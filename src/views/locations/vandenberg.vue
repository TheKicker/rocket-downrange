<template>
  <div class="container">
    <div class="cover"></div>

    <div class="profile-head">
      <div class="bio">
        <img 
          src="https://rocketdownrange.com/app-icon.png" 
          class="profile-image" 
          alt="Rocket Downrange profile image"
        >
        <div class="name">
          <h1 class="h2">Vandenberg AFB</h1>
          <p><i class="fas fa-map-marker-alt mr-2"></i> Santa Barbara County, California, USA</p>
        </div>
      </div>
      <div class="stats">
        <div class="stats-item">
          <p class="stats-status">Dec 16th, 1958</p>
          <p class="small">FIRST LAUNCH</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">NASA / USSF</p>
          <p class="small">PRIMARY OPERATOR</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">11</p>
          <p class="small">LAUNCH PADS</p>
        </div>
      </div>
    </div>

    <div class="profile-body pb-4">
      <div class="body-map">
        <l-map class="l-map" :zoom="zoom" :center="center" :options="{ attributionControl: false }">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng">
            <l-popup>{{ content }}</l-popup>
          </l-marker>
        </l-map>
        <p class="text-right mt-2">
          <a target="_blank" href="https://leafletjs.com/" rel="noopener">Leaflet.js</a> 
          | &copy; <a target="_blank" href="http://osm.org/copyright" rel="noopener">OpenStreetMap</a>
        </p>
      </div>

      <div class="body-bio">
        <h2>ABOUT THE LAUNCH SITE</h2>
        <hr>
        <div class="foobar">
          <p class="foo">Description:</p>
          <p class="bar">
            Vandenberg Space Force Base is a major U.S. military installation located on the central coast of California. It serves as the primary West Coast launch site for polar and sun-synchronous orbits, supporting both national security and commercial satellite launches.
          </p>
        </div>
        <figure>
          <figcaption>Quick Facts:</figcaption>
          <ul>
            <li>It was established in 1941 and became the primary location for testing and launching ballistic missiles during the Cold War era.</li>
            <li>On February 28, 1959, Vandenberg launched the first successful American polar-orbiting satellite, Discoverer 1.</li>
            <li>Vandenberg is uniquely positioned to support a wide range of launch azimuths, making it ideal for polar, sun-synchronous, and high-inclination orbits.</li>
          </ul>
        </figure>
      </div>
    </div>

    <Quote
      message="I believe that Vandenberg has and will continue to play a key role in the future of space. It is one of the most critical launch sites in our nation, contributing significantly to our national security and the advancement of space exploration."
      author="General Jay Raymond"
      significance="Former Chief of Space Operations, United States Space Force"
    />

    <!-- NASA Image Gallery -->
    <div class="profile-feed mb-4">
      <h3 class="mb-3">Image Gallery</h3>
      
      <div v-if="loading" class="text-center py-5">
        <p class="text-muted">Loading images from NASA...</p>
      </div>
      
      <div v-else-if="galleryImages.length" class="image-grid">
        <img 
          v-for="(item, index) in galleryImages" 
          :key="index"
          :src="item.links?.[0]?.href" 
          class="img" 
          :alt="item.data?.[0]?.title || 'Vandenberg image'"
          loading="lazy"
        />
      </div>
      
      <div v-else class="text-center py-5">
        <p class="text-muted">No images available right now. Please check back later.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue3-leaflet'
import Quote from "@/components/Quotes-Template.vue"

const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'

const zoom = 11
const center = [34.732778, -120.568056]
const markerLatLng = [34.732778, -120.568056]
const content = 'Vandenberg Space Force Base'

const images = ref(null)
const loading = ref(true)

const galleryImages = computed(() => {
  if (!images.value?.collection?.items) return []
  return images.value.collection.items.slice(0, 12)
})

const fetchImages = async () => {
  const computeString = "Vandenberg Space Force Base".replace(/ /g, '%20')
  const image_url = `https://images-api.nasa.gov/search?q=${computeString}&page=1`
  
  console.log('Fetching NASA images for Vandenberg:', image_url)

  try {
    const response = await fetch(image_url)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    
    const data = await response.json()
    images.value = data
  } catch (error) {
    console.error("Error fetching NASA images for Vandenberg:", error)
    images.value = null
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchImages()
})
</script>

<style scoped>
/* Existing styles + small improvements */
.cover {
  background-image: url("https://www.jpl.nasa.gov/news/press_kits/sentinel-6/assets/images/mission/launch/launch-site-vehicle_sm.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
}

.profile-head {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.profile-image {
  transform: translateY(-2.5rem);
  border: 5px solid white;
  border-radius: 25%;
  height: 150px;
  flex-shrink: 0;
}

.bio {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.name {
  margin: auto 1rem;
}

.stats {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1.5rem;
}

.stats-item {
  text-align: center;
}

.stats-status {
  font-size: 18px;
  font-weight: bold;
}

.profile-body {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 1rem 0;
}

.body-bio {
  flex: 1;
  min-width: 300px;
}

.body-map {
  flex: 1;
  min-width: 300px;
  height: 450px;
}

.l-map {
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.profile-feed h3 {
  font-weight: 600;
}

.image-grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
}

.img {
  height: 250px;
  width: 250px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Mobile Responsiveness */
@media only screen and (max-width: 900px) {
  .cover { height: 220px; }
  .profile-head { flex-direction: column; align-items: center; text-align: center; }
  .profile-image { transform: none; margin-bottom: 1rem; }
  .profile-body { flex-direction: column; }
  .body-map { height: 320px; }
  .l-map { height: 320px; }
  .image-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  .stats{
    padding-top: 0.5rem;
  }
  .img {
    height: 280px;
    width: 280px;
  }
}
</style>