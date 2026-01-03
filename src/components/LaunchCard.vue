<template>
  <div class="card launch-card h-100 shadow-sm">
    <!-- Launch image -->
    <img
      :src="image || 'apple-icon.png'"
      class="card-img-top"
      :alt="mission"
    />

    <!-- Card body -->
    <div class="card-body d-flex flex-column">
      <!-- Mission -->
      <h5 class="card-title text-truncate" :title="mission">{{ mission }}</h5>

      <!-- Rocket and Provider -->
      <p class="card-text mb-1">
        <strong>Rocket:</strong> {{ rocket }}
        <span class="text-muted">({{ launchsp }})</span>
      </p>

      <!-- Pad and Location -->
      <p class="card-text mb-1">
        <strong>Pad:</strong> {{ pad }}<br />
        <strong>Location:</strong> {{ location }}
      </p>

      <!-- Launch Time (user local) -->
      <p class="card-text mb-2">
        <strong>Launch Time:</strong> {{ formatLocalTime(launchtime) }}
      </p>

      <!-- Description -->
      <p class="card-text description flex-grow-1">{{ description }}</p>

      <!-- Optional Buttons -->
      <div class="mt-auto">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaunchCard",
  props: {
    mission: { type: String, default: "N/A" },
    image: { type: String, default: "apple-icon.png" },
    rocket: { type: String, default: "N/A" },
    launchsp: { type: String, default: "N/A" },
    launchtime: { type: String, default: "N/A" },
    pad: { type: String, default: "N/A" },
    location: { type: String, default: "N/A" },
    description: { type: String, default: "No description available." }
  },
  methods: {
    formatLocalTime(utcString) {
      if (!utcString) return "N/A";
      const date = new Date(utcString);
      return date.toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short"
      });
    }
  }
};
</script>

<style scoped>
.launch-card {
  display: flex;
  flex-direction: column;
  min-height: 450px; /* ensures enough space for long content */
}

.card-img-top {
  object-fit: cover;
  aspect-ratio: 16/9;
}

.description {
  color: #555;
  font-size: 0.9rem;
  overflow: hidden;
}

@media (max-width: 768px) {
  .launch-card {
    min-height: 400px;
  }
  .card-img-top {
    aspect-ratio: 4/3;
  }
}
</style>
