<template>
  <div class="card launch-card h-100 shadow-sm">
    <!-- Launch Image -->
    <img
      :src="image || '/apple-icon.png'"
      class="card-img-top"
      :alt="mission || 'Launch image'"
      loading="lazy"
    />

    <!-- Card Body -->
    <div class="card-body d-flex flex-column">
      <!-- Mission Title -->
      <h5 class="card-title text-truncate" :title="mission">
        {{ mission || "Unnamed Mission" }}
      </h5>

      <!-- Rocket + Provider (with link if page exists) -->
      <p class="card-text mb-1">
        <strong>Rocket:</strong> {{ rocket || "Unknown" }}
        <span class="text-muted">
          (
          <template v-if="providerPage">
            <router-link :to="providerPage" class="text-decoration-underline">
              {{ launchsp }}
            </router-link>
          </template>
          <template v-else>
            {{ launchsp || "N/A" }}
          </template>
          )
        </span>
      </p>

      <!-- Pad & Location -->
      <p class="card-text mb-1">
        <strong>Pad:</strong> {{ pad || "Unknown" }}<br />
        <strong>Location:</strong> {{ location || "Unknown" }}
      </p>

      <!-- Launch Time -->
      <p class="card-text mb-2">
        <strong>Launch Time:</strong> 
        {{ formatLocalTime(launchtime) }}
      </p>

      <!-- Description -->
      <p class="card-text description flex-grow-1">
        {{ description || "No description available." }}
      </p>

      <!-- Optional Buttons Slot -->
      <div class="mt-auto pt-2">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// List of providers that have dedicated pages
const knownProviders = [
  'ASTROBOTIC',
  'ASTRA',
  'BLUE ORIGIN',
  'FIREFLY',
  'RELATIVITY',
  'ROCKET LAB',
  'SIERRA SPACE',
  'SPACEX',
  'ULA',
  'VIRGIN'
]

const props = defineProps({
  mission: { type: String, default: null },
  image: { type: String, default: null },
  rocket: { type: String, default: null },
  launchsp: { type: String, default: null },
  launchtime: { type: String, default: null },
  pad: { type: String, default: null },
  location: { type: String, default: null },
  description: { type: String, default: null }
})

// Compute the correct route for the launch service provider
const providerPage = computed(() => {
  if (!props.launchsp) return null

  const normalized = props.launchsp.trim().toUpperCase()

  // Map common variations to exact page names
  const mapping = {
    'ASTROBOTIC': '/Astrobotic',
    'ASTRA': '/Astra',
    'BLUE ORIGIN': '/Blue-Origin',
    'FIREFLY': '/Firefly-Aerospace',
    'RELATIVITY': '/Relativity-Space',
    'ROCKET LAB': '/Rocket-Lab',
    'SIERRA SPACE': '/Sierra-Space',
    'SPACEX': '/SpaceX',
    'ULA': '/United-Launch-Alliance',
    'VIRGIN': '/Virgin-Galactic'
  }

  return mapping[normalized] || null
})

// Format launch time safely
const formatLocalTime = (utcString) => {
  if (!utcString) return "TBD"

  try {
    const date = new Date(utcString)
    if (isNaN(date.getTime())) return "TBD"

    return date.toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short"
    })
  } catch (e) {
    return "TBD"
  }
}
</script>

<style scoped>
.launch-card {
  display: flex;
  flex-direction: column;
  min-height: 460px;
}

.card-img-top {
  object-fit: cover;
  aspect-ratio: 16 / 9;
  height: 200px; /* Fixed height for consistency */
}

.description {
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
}

.card-title {
  font-weight: 600;
}

/* Hover effect on provider link */
.launch-card a:hover {
  color: #0d6efd;
  text-decoration: underline !important;
}

@media (max-width: 768px) {
  .launch-card {
    min-height: 420px;
  }
  .card-img-top {
    height: 180px;
    aspect-ratio: 4 / 3;
  }
}
</style>