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
            <button @click="changeMonth(-1)">&lt;</button>
            <span>{{ monthNames[currentMonth] }} {{ currentYear }}</span>
            <button @click="changeMonth(1)">&gt;</button>
          </div>
          <div class="days">
            <span
              v-for="day in daysInMonth"
              :key="day"
              @click="selectDate(day)"
              :class="{ selected: day === selectedDay }"
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
import { ref, computed, onMounted, watch } from 'vue';
import About from '@/components/About-template.vue';
import axios from 'axios';

const api_key = import.meta.env.VUE_APP_APOD_KEY; // Vue 3 env variable syntax

export default {
  name: 'APOD',
  components: {
    About,
  },
  setup() {
    // Date picker state
    const currentDate = new Date();
    const currentMonth = ref(currentDate.getMonth());
    const currentYear = ref(currentDate.getFullYear());
    const selectedDay = ref(currentDate.getDate());
    const isPickerOpen = ref(false);
    const results = ref({});

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const daysInMonth = computed(() => {
      return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
    });

    const displayDate = computed({
      get() {
        return selectedDay.value
          ? `${currentYear.value}-${String(currentMonth.value + 1).padStart(2, '0')}-${String(selectedDay.value).padStart(2, '0')}`
          : '';
      },
      set() {
        // Readonly, no setter needed
      },
    });

    const togglePicker = () => {
      isPickerOpen.value = !isPickerOpen.value;
    };

    const changeMonth = (delta) => {
      currentMonth.value += delta;
      if (currentMonth.value < 0) {
        currentMonth.value = 11;
        currentYear.value--;
      } else if (currentMonth.value > 11) {
        currentMonth.value = 0;
        currentYear.value++;
      }
    };

    const selectDate = (day) => {
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
        .catch((error) => console.log(error));
    };

    // Initial fetch on mount
    onMounted(() => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      fetchAPOD(year, month, day);
    });

    // Watch for date changes
    watch(displayDate, (newDate) => {
      if (newDate) {
        const [year, month, day] = newDate.split('-').map(Number);
        fetchAPOD(year, month, day);
      }
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
      results,
    };
  },
  metaInfo: {
    title: 'Rocket Downrange | Historical APOD',
    meta: [
      { name: 'author', content: 'Github: @TheKicker' },
      {
        name: 'description',
        content:
          'Missed an Astronomy Picture of the Day? Use the Rocket Downrange Historical APOD Lookup Tool - NASA\'s Astronomy Picture of the Day has been around since 1995 so you have plenty to catch up on!',
      },
      {
        name: 'keywords',
        content:
          'Rocket, Downrange, NASA, APOD, Astronomy, Picture, Day, Historical, Lookup, Tool, Space, Images, Video, GIF',
      },
      // OpenGraph, Twitter, and Schema.org metadata remain unchanged
      { property: 'og:title', content: 'Rocket Downrange | Historical APOD' },
      { property: 'og:site_name', content: 'Rocket Downrange' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.rocketdownrange.com/APOD' },
      { property: 'og:image', content: 'https://www.rocketdownrange.com/rocketdownrange.jpg' },
      { property: 'og:description', content: 'Missed an Astronomy Picture of the Day? Use the Rocket Downrange Historical APOD Lookup Tool - NASA\'s Astronomy Picture of the Day has been around since 1995 so you have plenty to catch up on!' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'https://www.rocketdownrange.com/APOD' },
      { name: 'twitter:title', content: 'Rocket Downrange | Historical APOD' },
      { name: 'twitter:description', content: 'Missed an Astronomy Picture of the Day? Use the Rocket Downrange Historical APOD Lookup Tool - NASA\'s Astronomy Picture of the Day has been around since 1995 so you have plenty to catch up on!' },
      { name: 'twitter:creator', content: 'Github: @TheKicker' },
      { name: 'twitter:image:src', content: 'https://www.rocketdownrange.com/rocketdownrange.jpg' },
      { itemprop: 'name', content: 'Rocket Downrange | Historical APOD' },
      { itemprop: 'description', content: 'Missed an Astronomy Picture of the Day? Use the Rocket Downrange Historical APOD Lookup Tool - NASA\'s Astronomy Picture of the Day has been around since 1995 so you have plenty to catch up on!' },
      { itemprop: 'image', content: 'https://www.rocketdownrange.com/rocketdownrange.jpg' },
    ],
  },
};
</script>

<style scoped>
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