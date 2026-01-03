<template>
  <div class="container py-3 my-4">
    <div>
      <p class="h5 text-uppercase text-left text-secondary">
        The Space News API (SNAPI):
      </p>
      <hr />
      <h2 class="text-center my-4">Trending News</h2>

      <!-- Articles Grid -->
      <div class="articles-grid" v-if="results.length">
        <SNAPIArticle
          v-for="(article, index) in results.slice(0, 8)"
          :key="index"
          :newsSite="article.news_site || 'N/A'"
          :publishedAt="article.published_at || 'N/A'"
          :imageURL="article.image_url || 'placeholder.png'"
          :title="article.title || 'No title available'"
          :articleURL="article.url || '#'"
        />
      </div>

      <p v-else class="text-center text-muted">Loading news articles...</p>
    </div>

    <hr />
    <p class="text-center">
      <i>
        SNAPI brought to you by
        <a href="https://thespacedevs.com" target="_blank" rel="noopener">
          The Space Devs
        </a>
      </i>
    </p>
  </div>
</template>

<script>
import SNAPIArticle from "@/components/LaunchLib-SpaceNews-Article.vue";
window.axios = require("axios");

const url = "https://api.spaceflightnewsapi.net/v4/articles/?format=json";

export default {
  name: "SNAPI",
  components: { SNAPIArticle },
  data() {
    return { results: [] };
  },
  mounted() {
    const fetchArticles = () => {
      window.axios
        .get(url)
        .then((response) => {
          this.results = response.data.results || [];
        })
        .catch((error) => {
          console.error("Failed to fetch SNAPI data:", error);
          if (error.response?.status === 429) {
            setTimeout(fetchArticles, 5000);
          }
        });
    };
    fetchArticles();
  }
};
</script>

<style scoped>
.articles-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
}

/* Ensure all cards are same height by forcing flex column stretch */
.articles-grid > * {
  display: flex;
  flex-direction: column;
  height: 100%;
}

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: repeat(auto-fit, minmax(95%, 1fr));
  }
}
</style>
