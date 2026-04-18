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
          <h1 class="h2">Baikonur Cosmodrome</h1>
          <p><i class="fas fa-map-marker-alt mr-2"></i> Kazakh Steppe, Kazakhstan</p>
        </div>
      </div>
      <div class="stats">
        <div class="stats-item">
          <p class="stats-status">Oct 4, 1957</p>
          <p class="small">FIRST LAUNCH</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">ROSCOSMOS</p>
          <p class="small">PRIMARY OPERATOR</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">15</p>
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
            Baikonur Cosmodrome, located in the desert steppes of Kazakhstan, is the world's oldest and largest space launch facility and has been the launch site for numerous historic space missions, including the first human spaceflight by Yuri Gagarin. With its unparalleled history and infrastructure, Baikonur Cosmodrome remains a vital component of the global space industry and a symbol of humanity's quest for exploration and discovery.
          </p>
        </div>
        <figure>
          <figcaption>Quick Facts:</figcaption>
          <ul>
            <li>It covers an area of approximately 6,717 square kilometers (2,600 square miles) and is situated near the city of Baikonur.</li>
            <li>It was originally constructed by the Soviet Union in the late 1950s and became the launch site for the iconic space missions, including Yuri Gagarin's historic flight, which made him the first human to orbit the Earth on April 12, 1961.</li>
            <li>Despite being located in Kazakhstan, Baikonur Cosmodrome is not part of the Kazakh Space Agency. Instead, it is operated under a lease agreement between Russia and Kazakhstan.</li>
          </ul>
        </figure>
      </div>
    </div>

    <Quote
      message="Orbiting Earth in the spaceship, I saw how beautiful our planet is. People, let us preserve and increase this beauty, and not destroy it!"
      author="Yuri Gagarin"
      significance="The first person in space (1961)"
    />

    <!-- NASA Image Gallery -->
    <div class="profile-feed mb-4">
      <h3 class="mb-3">NASA Image Gallery</h3>
      
      <div v-if="loading" class="text-center py-5">
        <p class="text-muted">Loading images from NASA...</p>
      </div>
      
      <div v-else-if="galleryImages.length" class="image-grid">
        <img 
          v-for="(item, index) in galleryImages" 
          :key="index"
          :src="item.links?.[0]?.href" 
          class="img" 
          :alt="item.data?.[0]?.title || 'Baikonur image'"
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
const center = [45.965, 63.305]
const markerLatLng = [45.965, 63.305]
const content = 'Baikonur Cosmodrome'

const images = ref(null)
const loading = ref(true)

// Safe computed gallery (limits to 12 images to avoid overwhelming the page)
const galleryImages = computed(() => {
  if (!images.value?.collection?.items) return []
  return images.value.collection.items.slice(0, 12)
})

const fetchImages = async () => {
  const image_url = `https://images-api.nasa.gov/search?q=baikonur%20cosmodrome&page=1`
  
  try {
    const response = await fetch(image_url)
    if (!response.ok) throw new Error('Network response was not ok')
    
    const data = await response.json()
    images.value = data
  } catch (error) {
    console.error("Error fetching NASA images:", error)
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
  background-image: url("https://images-assets.nasa.gov/image/NHQ201903140002/NHQ201903140002~thumb.jpg");
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