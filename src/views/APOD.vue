<template>
  <section class="container">
    <div id="parent">
      <h1 class="h4 text-uppercase text-secondary">Historical NASA APOD</h1>
      <div class="text-center">
        <input
          type="text"
          v-model="displayDate"
          @click="togglePicker"
          placeholder="Pick a date"
          readonly
        />
        <div v-if="isPickerOpen" class="picker-dropdown">
          <div class="controls">
            <button @click="changeMonth(-1)" :disabled="isPrevDisabled">&lt;</button>
            <span>{{ monthNames[currentMonth] }} {{ currentYear }}</span>
            <button @click="changeMonth(1)" :disabled="isNextDisabled">&gt;</button>
          </div>
          <div class="days">
            <span
              v-for="day in daysInMonth"
              :key="day"
              @click="selectDate(day)"
              :class="{
                selected: day === selectedDay,
                disabled: isDateDisabled(day)
              }"
            >
              {{ day }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center my-5 py-5">
      <div class="spinner-border text-primary mb-3" role="status" style="width: 3rem; height: 3rem;"></div>
      <p class="text-muted fs-5">Loading Astronomy Picture of the Day from NASA...</p>
      <p class="text-secondary small">This may take a few seconds during busy times</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="alert alert-warning text-center my-4 p-4">
      <h5>⚠️ Unable to load APOD right now</h5>
      <p class="mb-3">{{ error }}</p>
      <button @click="retryFetch" class="btn btn-outline-primary px-4">
        Retry Now
      </button>
      <p class="text-muted small mt-3">
        NASA's APOD API is sometimes temporarily unavailable. This usually resolves quickly.
      </p>
    </div>

    <!-- Success State -->
    <template v-else>
      <h2 class="h3 text-center my-2">{{ results.title }} ({{ results.date }})</h2>
      
      <div id="apod">
        <div class="child my-4">
          <!-- Video -->
          <div v-if="results.media_type === 'video'" class="embed-responsive embed-responsive-16by9">
            <iframe 
              class="embed-responsive-item" 
              :src="results.url" 
              frameborder="0" 
              allowfullscreen
            ></iframe>
          </div>

          <!-- Image -->
          <div v-else-if="results.media_type === 'image' || results.url">
            <a :href="results.hdurl || results.url" target="_blank" rel="noopener">
              <img
                :src="results.url"
                class="img-fluid d-block mx-auto"
                style="max-height: 50vh;"
                :alt="results.title + ' - NASA APOD (' + results.date + ')'"
              />
            </a>
          </div>

          <!-- Fallback for other rare types -->
          <div v-else class="text-center text-muted py-5">
            <p>Media type not supported: {{ results.media_type }}</p>
            <a :href="results.url" target="_blank" class="btn btn-sm btn-outline-secondary">
              Open Original Media
            </a>
          </div>
        </div>

        <!-- Explanation -->
        <div class="child my-4">
          <p class="text-primary font-weight-bold">{{ results.explanation }}</p>
        </div>
      </div>
    </template>

    <div class="my-4">
      <p class="text-secondary text-center">
        Discover the final frontier! Every day brings a new image or video from NASA's Astronomy Picture of the Day tool - a free service brought to you by NASA and Michigan Technological University that has existed since June 16th, 1995. Interested in using this service in your own project,
        <a href="https://api.nasa.gov/" target="_blank" rel="noopener">click here for the link to their API</a>! The official NASA APOD site can be accessed by going to
        <a href="https://apod.nasa.gov/apod/" target="_blank" rel="noopener">https://apod.nasa.gov/apod/</a>
      </p>
    </div>

    <about />
  </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import About from '@/components/About-template.vue';
import axios from 'axios';

const api_key = process.env.VUE_APP_APOD_KEY;

export default {
  name: 'APOD',
  components: {
    About,
  },
  setup() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Date picker state
    const currentMonth = ref(today.getMonth());
    const currentYear = ref(today.getFullYear());
    const selectedDay = ref(today.getDate());
    const isPickerOpen = ref(false);

    // Loading & Error states
    const loading = ref(false);
    const error = ref(null);
    const results = ref({});

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const daysInMonth = computed(() => {
      return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
    });

    const isDateDisabled = (day) => {
      const selectedDate = new Date(currentYear.value, currentMonth.value, day);
      selectedDate.setHours(0, 0, 0, 0);
      return selectedDate > today;
    };

    const isNextDisabled = computed(() => {
      return currentYear.value === today.getFullYear() && 
             currentMonth.value === today.getMonth();
    });

    const isPrevDisabled = computed(() => false);

    const displayDate = computed({
      get() {
        return selectedDay.value
          ? `${currentYear.value}-${String(currentMonth.value + 1).padStart(2, '0')}-${String(selectedDay.value).padStart(2, '0')}`
          : '';
      },
      set() {},
    });

    const togglePicker = () => {
      isPickerOpen.value = !isPickerOpen.value;
    };

    const changeMonth = (delta) => {
      let newMonth = currentMonth.value + delta;
      let newYear = currentYear.value;

      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      } else if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }

      const newDate = new Date(newYear, newMonth, 1);
      if (newDate > today) return;

      currentMonth.value = newMonth;
      currentYear.value = newYear;
    };

    const selectDate = (day) => {
      if (isDateDisabled(day)) return;
      selectedDay.value = day;
      isPickerOpen.value = false;
      fetchAPOD(currentYear.value, currentMonth.value + 1, day);
    };

    // Improved fetch with retries
    const fetchAPOD = async (year, month, day, attempt = 1) => {
      const maxRetries = 4;
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const url = `https://api.nasa.gov/planetary/apod?date=${dateStr}&api_key=${api_key}`;

      loading.value = true;
      error.value = null;

      try {
        console.log(`Fetching APOD for ${dateStr} (attempt ${attempt}/${maxRetries})`);
        const response = await axios.get(url, { timeout: 15000 });
        results.value = response.data;
        error.value = null;
      } catch (err) {
        console.warn(`Attempt ${attempt} failed:`, err.message);

        if (attempt < maxRetries) {
          const delay = 1000 * Math.pow(2, attempt - 1); // 1s, 2s, 4s, 8s
          console.log(`Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          await fetchAPOD(year, month, day, attempt + 1);
        } else {
          error.value = "NASA's APOD service is temporarily unavailable (503). This is common and usually resolves within a few minutes.";
          results.value = { title: 'Service Unavailable', date: dateStr };
        }
      } finally {
        loading.value = false;
      }
    };

    const retryFetch = () => {
      fetchAPOD(currentYear.value, currentMonth.value + 1, selectedDay.value);
    };

    // Initial fetch
    onMounted(() => {
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      fetchAPOD(year, month, day);
    });

    return {
      currentMonth,
      currentYear,
      selectedDay,
      isPickerOpen,
      monthNames,
      daysInMonth,
      displayDate,
      togglePicker,
      changeMonth,
      selectDate,
      isDateDisabled,
      isNextDisabled,
      isPrevDisabled,
      results,
      loading,
      error,
      retryFetch,
    };
  }
};
</script>

<style scoped>
/* Your existing styles remain unchanged */
#parent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3rem 0;
}

#apod {
  display: flex;
  flex-direction: row;
}

.child {
  width: 50%;
  padding: 0 1rem;
}

.picker-dropdown {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 10;
}

.controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.days span {
  text-align: center;
  padding: 5px;
  cursor: pointer;
}

.days span:hover:not(.disabled) {
  background: #f0f0f0;
}

.days span.selected {
  background: #007bff;
  color: white;
}

.days span.disabled {
  color: #ccc;
  cursor: not-allowed;
  pointer-events: none;
}

input {
  padding: 8px;
  cursor: pointer;
}

/* Media queries */
@media screen and (max-width: 650px) {
  #parent {
    flex-direction: column;
    margin: 1.5rem 0;
  }
  #apod {
    flex-direction: column;
  }
  .child {
    width: 100%;
    padding: 0 0.5rem;
  }
}
</style>