<template>
  <div>
    <div class="cover container">
      <!-- Cover image size set by scoped CSS -->
    </div>
    <div class="mx-auto container">
      <div class="profile-head">
        <div class="bio">
          <img
            src="@/assets/rover/CURI.png"
            class="profile-image"
            alt="Rocket Downrange Rover profile image for the 'Curiosity' Mars Rover"
          />
          <div class="name">
            <h1>Curiosity</h1>
            <p>
              <i class="fas fa-map-marker-alt mr-2"></i> Gale Crater, Mars
            </p>
          </div>
        </div>
        <div class="stats">
          <div class="stats-item">
            <p class="stats-status">ACTIVE</p>
            <p class="small">Status</p>
          </div>
          <div class="stats-item">
            <p class="stats-status">{{ solsAlive }} ({{ daysAlive }})</p>
            <p class="small">SOLs (DAYs)</p>
          </div>
          <div class="stats-item">
            <p class="stats-status">31.2 (50.2)</p>
            <p class="small">MILES (KM)</p>
          </div>
        </div>
      </div>

      <div class="profile-body">
        <div class="body-3d">
          <iframe
            src="https://mars.nasa.gov/gltf_embed/24584"
            width="100%"
            height="100%"
            frameborder="0"
          />
        </div>
        <div class="body-bio">
          <h2>ABOUT THE ROVER</h2>
          <hr />
          <div class="foobar">
            <p class="foo">Biography:</p>
            <p class="bar">
              Designed to explore the Gale Crater, the Curiosity Rover is a car-sized vehicle
              designed to study climate and geology on Mars in preparation for human exploration.
              On August 6th, 2022, NASA released a detailed overview of the many accomplishments
              made by Curiosity over its first ten years on Mars.
            </p>
          </div>
          <div class="foobar">
            <p class="foo">Launch Date:</p>
            <p class="bar">November 26th, 2011</p>
          </div>
          <div class="foobar">
            <p class="foo">Landing Date:</p>
            <p class="bar">August 6th, 2012</p>
          </div>
          <div class="foobar">
            <p class="foo">Rover Cost:</p>
            <p class="bar">$2.5 billion</p>
          </div>
          <div class="foobar text-center">
            <a
              href="https://twitter.com/MarsCuriosity"
              target="_blank"
              rel="noopener"
            >
              <i class="fab fa-twitter"></i> Follow Curiosity on Twitter
            </a>
          </div>
        </div>
      </div>

      <Quote
        message="Mount Sharp is the only place we can currently access on Mars where we can investigate this transition in one stratigraphic sequence... the hope of this mission is to find evidence of a habitable environment; the promise is to get the story of an important environmental breakpoint in the deep history of the planet."
        author="John Grotzinger"
        significance="Former Chief Scientist of the Curiosity mission"
      />

      <div class="mt-4">
        <h2>Rover Photo Feed</h2>
        <p v-if="results.photos && results.photos.length > 0">
          Latest photos available — updated regularly by NASA
        </p>
        <p v-else>
          Loading latest photos from Mars...
        </p>
      </div>

      <!-- Photo Feed with safety checks -->
      <div class="profile-feed" v-if="results.photos && results.photos.length > 0">
        <a
          v-for="(result, index) in results.photos"
          :key="index"
          :href="result.img_src"
          target="_blank"
          rel="noopener"
        >
          <VLazyImage
            :src="result.img_src"
            :alt="'Photo id#' + result.id + ' taken by Curiosity Rover in the Gale Crater on Mars'"
            class="img"
          />
        </a>
      </div>
      <div v-else class="text-center py-5">
        <p>No photos available right now. NASA updates the feed regularly — check back soon!</p>
      </div>

      <div class="py-3">
        <hr />
        <p class="text-center">
          For more information on this rover, or other missions,
          <a href="https://nasa.gov" target="_blank" rel="noopener"
            >visit NASA's official website</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "@/components/Quotes-Template.vue";
import VLazyImage from "v-lazy-image";
import axios from "axios";

export default {
  name: "Curiosity",
  components: {
    Quote,
    VLazyImage,
  },
  data() {
    return {
      results: { photos: [] }, // Safe default to prevent errors
      daysAlive: 0,
      solsAlive: 0,
    };
  },
  async mounted() {
    // Calculate mission duration
    const landingDate = new Date("2012-08-06");
    const now = new Date();
    const diffInMs = now - landingDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    this.daysAlive = Math.floor(diffInDays);
    // Rough conversion: 1 Martian sol ≈ 1.027 Earth days
    this.solsAlive = Math.floor(diffInDays / 1.027);

    const api_key = process.env.VUE_APP_APOD_KEY;

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${api_key}`;

    try {
      const response = await axios.get(url);
      this.results = response.data;
      console.log(`Loaded ${this.results.photos.length} latest Curiosity photos`);
    } catch (error) {
      console.error("Failed to fetch Curiosity photos:", error);
      this.results = { photos: [] };
    }
  },
  metaInfo: {
    title: "Rocket Downrange | Curiosity Rover",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Designed to explore the Gale Crater, the Curiosity Rover is a car sized vehicle designed to study climate and geology on Mars in preparation for human exploration.",
      },
      {
        name: "keywords",
        content: "Rocket, Downrange, NASA, JPL, Mars, Rovers, Curiosity",
      },
      // OpenGraph data
      { property: "og:title", content: "Rocket Downrange | Curiosity Rover" },
      { property: "og:site_name", content: "Rocket Downrange" },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/curiosity",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      {
        property: "og:description",
        content:
          "Designed to explore the Gale Crater, the Curiosity Rover is a car sized vehicle designed to study climate and geology on Mars in preparation for human exploration.",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Curiosity Rover",
      },
      {
        name: "twitter:description",
        content:
          "Designed to explore the Gale Crater, the Curiosity Rover is a car sized vehicle designed to study climate and geology on Mars in preparation for human exploration.",
      },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      { name: "twitter:creator", content: "Github: @TheKicker" },

      // Schema.org
      { itemprop: "name", content: "Rocket Downrange | Curiosity Rover" },
      {
        itemprop: "description",
        content:
          "Designed to explore the Gale Crater, the Curiosity Rover is a car sized vehicle designed to study climate and geology on Mars in preparation for human exploration.",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

<style scoped>
.cover {
  background-image: url("https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
}
.profile-head {
  display: flex;
  justify-content: space-between;
}
.profile-image {
  transform: translateY(-2.5rem);
  border: 5px white solid;
  border-radius: 45%;
}
.bio {
  display: flex;
  flex-direction: row;
}
.name {
  margin: auto 1rem;
}
.stats {
  display: flex;
  flex-direction: row;
}
.stats-item {
  text-align: center;
  margin: auto 1rem;
}
.stats-status {
  font-size: 18px;
  font-weight: bold;
}
.profile-body {
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
}
.body-bio {
  width: 55%;
  padding: 1rem;
}
.body-3d {
  height: 450px;
  width: 45%;
}
.foobar {
  margin: 2rem 0;
}
.foo {
  font-weight: 800;
  line-height: 0;
}
.bar {
  margin: 0 0 0 0.5rem;
  line-height: 16px;
}
.profile-feed {
  margin: 2rem auto;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.img {
  margin: auto;
  height: 250px;
  width: 250px;
  object-fit: cover;
}

@media only screen and (max-width: 900px) {
  .cover {
    height: 200px;
  }
  .profile-head {
    flex-direction: column;
  }
  .profile-image {
    width: 120px;
  }
  .stats {
    justify-content: space-evenly;
  }
  .stats-item {
    margin: auto 0.5rem;
  }
  .stats-status {
    font-size: 12px;
  }
  .profile-body {
    flex-direction: column;
    margin: 1rem 0;
  }
  .body-bio {
    width: 100%;
    padding: 1rem;
  }
  .body-3d {
    display: block;
    margin: auto;
    width: 100%;
    height: 300px;
  }
  .profile-feed {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .img {
    height: 300px;
    width: 300px;
  }
}
</style>