<template>
  <section class="article-card">
    <v-lazy-image
      class="article-img"
      :src="imageURL"
      :alt="newsSite + ' - ' + title"
    />
    <div class="article-content">
      <strong class="title">{{ charCount(title, 100) }}</strong>

      <div class="meta d-flex justify-content-between">
        <p class="text-muted site">{{ newsSite || 'N/A' }}</p>
        <p class="text-muted date">{{ timeTranslate(publishedAt) }}</p>
      </div>

      <div class="btn-container">
        <a
          :href="articleURL"
          target="_blank"
          rel="noopener"
          class="btn btn-primary btn-sm"
        >
          Read {{ newsSite }}
        </a>
        <router-link
          v-for="link in filteredLinks"
          :key="link.to"
          :to="link.to"
          class="btn btn-outline-secondary btn-sm"
          :aria-label="title + ' page on Rocket Downrange.com'"
        >
          {{ link.label }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: "SNAPIArticle",
  props: {
    newsSite: String,
    publishedAt: String,
    imageURL: String,
    title: String,
    articleURL: String
  },
  components: { VLazyImage },
  computed: {
    filteredLinks() {
      const mapping = [
        { keyword: "Astra", to: "/astra", label: "Astra Info" },
        { keyword: "Astrobotic", to: "/astrobotic", label: "Astrobotic Info" },
        { keyword: "Blue Origin", to: "/blue-origin", label: "Blue Origin Info" },
        { keyword: "Firefly", to: "/firefly-aerospace", label: "Firefly Info" },
        { keyword: "Relativity Space", to: "/relativity-space", label: "Relativity Info" },
        { keyword: "Rocket Lab", to: "/rocket-lab", label: "Rocket Lab Info" },
        { keyword: "SpaceX", to: "/spacex", label: "SpaceX Info" },
        { keyword: "Sierra Space", to: "/sierra-space", label: "Sierra Space Info" },
        { keyword: "ULA", to: "/united-launch-alliance", label: "ULA Info" },
        { keyword: "Virgin", to: "/virgin-galactic", label: "Virgin Info" },
        { keyword: "Perseverance", to: "/perseverance", label: "Rover Info" },
        { keyword: "Curiosity", to: "/curiosity", label: "Rover Info" },
        { keyword: "Opportunity", to: "/opportunity", label: "Rover Info" },
        { keyword: "Spirit", to: "/spirit", label: "Rover Info" },
        { keyword: "Sojourner", to: "/sojourner", label: "Rover Info" }
      ];
      return mapping.filter(link => this.title.includes(link.keyword));
    }
  },
  methods: {
    timeTranslate(dateStr) {
      if (!dateStr) return "N/A";
      const d = new Date(dateStr);
      return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
    },
    charCount(str, limit) {
      return str && str.length > limit ? str.slice(0, limit) + "..." : str;
    }
  }
};
</script>

<style scoped>
.article-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s;
  height: 100%;          /* Stretch to parent */
  min-height: 400px;     /* Give all cards extra vertical space */
}

.article-card:hover {
  transform: translateY(-3px);
}

.article-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-img:hover {
  transform: scale(1.05); /* Subtle hover zoom */
}

.article-content {
  flex: 1; /* Grow to fill card */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Push buttons to bottom */
  padding: 1rem;
  gap: 0.5rem;
}

.title {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  min-height: 2.5rem; /* Reserve space for short titles */
}

.meta {
  font-size: 0.85rem;
  color: #777;
  display: flex;
  justify-content: space-between;
}

.btn-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
  justify-content: flex-start;
}

.btn-container .btn {
  flex: 1 1 120px;
  font-size: 0.85rem;
  min-width: 120px;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .article-img {
    aspect-ratio: 4/3;
  }
  .article-card {
    min-height: 350px; /* Slightly smaller on mobile */
  }
}
</style>

