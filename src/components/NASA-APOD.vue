<template>
  <div id="APOD" class="APOD py-3 my-4">
    <p class="h5 text-uppercase text-left text-secondary">
      NASA APOD:
    </p>
    <hr>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-5 my-4">
      <div class="spinner-border text-primary mb-3" role="status" style="width: 2.5rem; height: 2.5rem;"></div>
      <p class="text-muted">Loading today's Astronomy Picture of the Day...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="alert alert-warning text-center p-4 my-4">
      <h5>⚠️ NASA APOD temporarily unavailable</h5>
      <p>{{ error }}</p>
      <button @click="retryFetch" class="btn btn-outline-primary mt-2">
        Retry Now
      </button>
    </div>

    <!-- Success State -->
    <template v-else>
      <div v-if="results.media_type === 'video'">
        <h2 class="h3 text-uppercase text-center my-3">{{ results.title }} (Video)</h2>
      </div>
      <div v-else>
        <h2 class="h3 text-uppercase text-center my-3">{{ results.title }}</h2>
      </div>

      <div class="d-flex flex-lg-row flex-column">
        <!-- Media Column -->
        <div class="half">
          <!-- Video -->
          <div v-if="results.media_type === 'video'" class="embed-responsive embed-responsive-16by9">
            <iframe 
              class="embed-responsive-item" 
              :src="results.url" 
              frameborder="0" 
              allowfullscreen
              :title="results.title"
            ></iframe>
          </div>

          <!-- Image -->
          <div v-else-if="results.url">
            <a :href="results.hdurl || results.url" target="_blank" rel="noopener">
              <img 
                :src="results.url" 
                class="img-fluid" 
                style="margin: auto; max-height: 55vh;"
                :alt="results.title + ' - NASA Astronomy Picture of the Day'"
              />
            </a>
          </div>

          <!-- Rare fallback -->
          <div v-else class="text-center text-muted py-4">
            <p>Unable to display media</p>
          </div>
        </div>

        <!-- Explanation + Button Column -->
        <div class="half">
          <p class="text-primary">{{ results.explanation }}</p>

          <div class="d-block text-center w-100 mt-3">
            <div v-if="results.media_type === 'video'">
              <a
                :href="results.url"
                target="_blank"
                rel="noopener"
                class="btn btn-block btn-outline-primary"
              >
                Watch on YouTube
              </a>
            </div>
            <div v-else>
              <a
                :href="results.hdurl || results.url"
                target="_blank"
                rel="noopener"
                class="btn btn-block btn-outline-primary"
              >
                View HD Image on NASA.gov
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const api_key = process.env.VUE_APP_APOD_KEY;

export default {
  name: "NASAapod",
  setup() {
    const results = ref({});
    const loading = ref(false);
    const error = ref(null);

    // Improved fetch with retries
    const fetchAPOD = async (attempt = 1) => {
      const maxRetries = 4;
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      
      const url = `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=${api_key}`;

      loading.value = true;
      error.value = null;

      try {
        console.log(`Fetching APOD (attempt ${attempt}/${maxRetries})`);
        const response = await axios.get(url, { timeout: 15000 });
        results.value = response.data;
        error.value = null;
      } catch (err) {
        console.warn(`Attempt ${attempt} failed:`, err.message);

        if (attempt < maxRetries) {
          const delay = 1000 * Math.pow(2, attempt - 1); // 1s, 2s, 4s, 8s
          await new Promise(resolve => setTimeout(resolve, delay));
          await fetchAPOD(attempt + 1);
        } else {
          error.value = "NASA's APOD service is temporarily unavailable. Please try again in a few minutes.";
        }
      } finally {
        loading.value = false;
      }
    };

    const retryFetch = () => {
      fetchAPOD();
    };

    // Initial fetch on mount
    onMounted(() => {
      fetchAPOD();
    });

    return {
      results,
      loading,
      error,
      retryFetch,
    };
  }
};
</script>

<style scoped>
.half {
  width: 50%;
  padding: 1rem 1.5rem;
}

@media screen and (max-width: 650px) {
  .half {
    width: 100%;
    padding: 0.5rem 0;
  }
}

/* Optional: Make the explanation text a bit more readable on mobile */
@media screen and (max-width: 650px) {
  .text-primary {
    font-size: 0.95rem;
  }
}
</style>