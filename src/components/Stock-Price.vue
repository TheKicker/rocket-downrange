<template>
  <section>
    <div class="my-4">
      <div class="text-center bg-primary text-white py-2">
        <div class="col-md-10 p-lg-5 p-sm-3 mx-auto my-5">
          <h2 class="font-weight-normal text-white">
            {{ ORG }} (<span class="text-info">${{ TICKER }}</span>)
          </h2>
          <p>
            All data comes from an API provided by 
            <a href="https://finnhub.io/" target="_blank" rel="noopener" class="text-light" style="text-decoration: underline">
              Finnhub
            </a>. 
            Please consult your financial representative before making any decisions. 
            Rocket Downrange does not endorse any stock.
          </p>
          <hr color="white" />

          <!-- Loading -->
          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-light mb-3" role="status" style="width: 2.5rem; height: 2.5rem;"></div>
            <p class="text-light">Loading latest stock data...</p>
          </div>

          <!-- Error -->
          <div v-else-if="error" class="alert alert-warning text-center p-4">
            <h5>⚠️ Unable to load stock data</h5>
            <p>{{ error }}</p>
            <button @click="retryFetch" class="btn btn-outline-light mt-2">
              Retry Now
            </button>
          </div>

          <!-- Main Data -->
          <div v-else id="data">
            <iframe id="frames" frameborder="2" :src="FINN"></iframe>

            <ul id="info" class="list-group text-light text-left">
              <li class="list-group-item bg-primary">
                <strong>IPO:</strong> {{ START || 'N/A' }}
              </li>
              <li class="list-group-item bg-primary">
                <strong>PRICE:</strong> ${{ price.toFixed(2) }}
              </li>
              <li class="list-group-item bg-primary">
                <strong>DELTA:</strong> 
                {{ delta }} ({{ deltaPercent.toFixed(2) }}%)
              </li>
              <li class="list-group-item bg-primary">
                <strong>HIGH/LOW:</strong> 
                ${{ high.toFixed(2) }} / ${{ low.toFixed(2) }}
              </li>
              <li class="list-group-item bg-primary">
                <a :href="LINK" class="btn btn-outline-info d-block" target="_blank" rel="noopener">
                  View on NASDAQ
                </a>
              </li>
            </ul>

            <!-- Optional: Show when data was last refreshed -->
            <small v-if="lastUpdated" class="text-light d-block text-center mt-3">
              Last updated: {{ lastUpdated }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import axios from 'axios';

const api_key = process.env.VUE_APP_STOCK_KEY;
const CACHE_KEY_PREFIX = 'rocket_stock_';
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes in ms

export default {
  name: "Stock",
  props: {
    ORG: String,
    TICKER: String,
    LINK: String,
    FINN: String,
    START: String
  },
  setup(props) {
    const priceResults = ref({});
    const loading = ref(true);
    const error = ref(null);
    const lastUpdated = ref('');
    let polling = null;

    const price = computed(() => priceResults.value?.c ?? 0);
    const delta = computed(() => priceResults.value?.d ?? 0);
    const deltaPercent = computed(() => priceResults.value?.dp ?? 0);
    const high = computed(() => priceResults.value?.h ?? 0);
    const low = computed(() => priceResults.value?.l ?? 0);

    // Generate cache key for this ticker
    const getCacheKey = () => `${CACHE_KEY_PREFIX}${props.TICKER}`;

    // Load from localStorage if fresh
    const loadFromCache = () => {
      const key = getCacheKey();
      const cached = localStorage.getItem(key);
      if (!cached) return false;

      try {
        const parsed = JSON.parse(cached);
        const age = Date.now() - parsed.timestamp;

        if (age < CACHE_DURATION) {
          priceResults.value = parsed.data;
          lastUpdated.value = new Date(parsed.timestamp).toLocaleTimeString();
          return true;
        }
      } catch (e) {
        console.warn('Failed to parse cache', e);
      }
      return false;
    };

    const saveToCache = (data) => {
      const key = getCacheKey();
      const cacheObj = {
        data: data,
        timestamp: Date.now()
      };
      localStorage.setItem(key, JSON.stringify(cacheObj));
      lastUpdated.value = new Date().toLocaleTimeString();
    };

    const fetchPrice = async (force = false) => {
      if (!props.TICKER) {
        error.value = "No ticker symbol provided";
        loading.value = false;
        return;
      }

      // Try cache first (unless force refresh)
      if (!force && loadFromCache()) {
        loading.value = false;
        return;
      }

      try {
        const url = `https://finnhub.io/api/v1/quote?symbol=${props.TICKER}&token=${api_key}`;
        const response = await axios.get(url, { timeout: 10000 });

        if (response.data && typeof response.data === 'object') {
          priceResults.value = response.data;
          saveToCache(response.data);
          error.value = null;
        } else {
          throw new Error('Invalid response');
        }
      } catch (err) {
        console.error('Finnhub error:', err);
        if (!priceResults.value.c) {
          error.value = "Finnhub API is temporarily unavailable.";
        }
      } finally {
        loading.value = false;
      }
    };

    const retryFetch = () => {
      error.value = null;
      loading.value = true;
      fetchPrice(true); // force refresh
    };

    // Background refresh every 15 minutes
    const startPolling = () => {
      polling = setInterval(() => {
        fetchPrice();
      }, CACHE_DURATION);
    };

    onMounted(() => {
      fetchPrice();        // Initial load (uses cache if fresh)
      startPolling();
    });

    onBeforeUnmount(() => {
      if (polling) clearInterval(polling);
    });

    return {
      price,
      delta,
      deltaPercent,
      high,
      low,
      loading,
      error,
      retryFetch,
      lastUpdated,
    };
  }
};
</script>

<style scoped>
/* Your existing styles remain unchanged */
#data {
  margin: 3rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

@media screen and (max-width: 650px) {
  #data {
    margin: 1.5rem 0;
    flex-direction: column;
  }
  #frames {
    display: block;
    height: 100%;
    min-height: 260px;
    margin: 2rem auto;
  }
  #info {
    margin: 2rem 0;
  }
}
</style>