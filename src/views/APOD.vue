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
    <h2 class="h3 text-center my-2">{{ results.title }} ({{ results.date }})</h2>
    <div id="apod">
      <div class="child my-4">
        <div v-if="results.media_type === 'video'" class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" :src="results.url" frameborder="0" allowfullscreen></iframe>
        </div>
        <div v-else>
          <a :href="results.hdurl" target="_blank" rel="noopener">
            <img
              :src="results.url"
              class="img-fluid d-block mx-auto"
              style="max-height: 50vh;"
              :alt="results.title + ' - NASA APOD (' + results.date + ')'"
            />
          </a>
        </div>
      </div>
      <div class="child my-4">
        <p class="text-primary font-weight-bold">{{ results.explanation }}</p>
      </div>
    </div>
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
    today.setHours(0, 0, 0, 0); // Normalize to start of day for accurate comparison

    // Date picker state
    const currentMonth = ref(today.getMonth());
    const currentYear = ref(today.getFullYear());
    const selectedDay = ref(today.getDate());
    const isPickerOpen = ref(false);
    const results = ref({});

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const daysInMonth = computed(() => {
      return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
    });

    // Check if a specific day is in the future
    const isDateDisabled = (day) => {
      const selectedDate = new Date(currentYear.value, currentMonth.value, day);
      selectedDate.setHours(0, 0, 0, 0);
      return selectedDate > today;
    };

    // Disable "Next" button if we're already in the current month/year
    const isNextDisabled = computed(() => {
      return currentYear.value === today.getFullYear() && 
             currentMonth.value === today.getMonth();
    });

    // Disable "Previous" button only if we're at the very beginning (optional - you can remove if you want to allow all history)
    const isPrevDisabled = computed(() => false); // Set to true if you want a hard limit

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

      // Prevent going into the future
      const newDate = new Date(newYear, newMonth, 1);
      if (newDate > today) return;

      currentMonth.value = newMonth;
      currentYear.value = newYear;
    };

    const selectDate = (day) => {
      if (isDateDisabled(day)) return; // Block future dates

      selectedDay.value = day;
      isPickerOpen.value = false;
      fetchAPOD(currentYear.value, currentMonth.value + 1, day);
    };

    // APOD fetching logic
    const fetchAPOD = (year, month, day) => {
      const url = `https://api.nasa.gov/planetary/apod?date=${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}&api_key=${api_key}`;
      axios
        .get(url)
        .then((response) => {
          results.value = response.data;
        })
        .catch((error) => console.error(error));
    };

    // Initial fetch (today)
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
    };
  }
};
</script>

<style scoped>
/* ... your existing styles ... */

.days span.disabled {
  color: #ccc;
  cursor: not-allowed;
  pointer-events: none;
}

.days span.disabled:hover {
  background: none;
}

.controls button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Rest of your styles remain unchanged */
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
.days span:hover {
  background: #f0f0f0;
}
.days span.selected {
  background: #007bff;
  color: white;
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