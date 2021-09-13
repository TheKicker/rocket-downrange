<template>
  <div class="LaunchLib-News my-4 mx-lg-4 mx-md-0">
    <div class="card">
      <div class="card-body">
        <h5 class="text-left text-secondary">
          The Space News API (SNAPI):
        </h5>
        <hr />
        <h3 class="text-center my-4">Trending News</h3>

        <!-- Row 1  -->
        <div class="responsive-row">
          <!-- Article 4 -->
          <SNAPIArticle 
            :newsSite="this.results[0].newsSite != null || undefined ? this.results[0].newsSite : 'null'"
            :publishedAt="this.results[0].publishedAt != null || undefined ? this.results[0].publishedAt : 'null'"
            :imageURL="this.results[0].imageUrl != null || undefined ? this.results[0].imageUrl : 'null'"
            :title="this.results[0].title != null || undefined ? this.results[0].title : 'null'"
            :articleURL="this.results[0].url != null || undefined ? this.results[0].url : 'null'"
          />
          <SNAPIArticle 
            :newsSite="this.results[1].newsSite != null || undefined ? this.results[1].newsSite : 'null'"
            :publishedAt="this.results[1].publishedAt != null || undefined ? this.results[1].publishedAt : 'null'"
            :imageURL="this.results[1].imageUrl != null || undefined ? this.results[1].imageUrl : 'null'"
            :title="this.results[1].title != null || undefined ? this.results[1].title : 'null'"
            :articleURL="this.results[1].url != null || undefined ? this.results[1].url : 'null'"
          />
        </div>
        <!-- Row 1  -->
        <div class="responsive-row">
          <!-- Article 4 -->
          <SNAPIArticle 
            :newsSite="this.results[2].newsSite != null || undefined ? this.results[2].newsSite : 'null'"
            :publishedAt="this.results[2].publishedAt != null || undefined ? this.results[2].publishedAt : 'null'"
            :imageURL="this.results[2].imageUrl != null || undefined ? this.results[2].imageUrl : 'null'"
            :title="this.results[2].title != null || undefined ? this.results[2].title : 'null'"
            :articleURL="this.results[2].url != null || undefined ? this.results[2].url : 'null'"
          />
          <SNAPIArticle 
            :newsSite="this.results[3].newsSite != null || undefined ? this.results[3].newsSite : 'null'"
            :publishedAt="this.results[3].publishedAt != null || undefined ? this.results[3].publishedAt : 'null'"
            :imageURL="this.results[3].imageUrl != null || undefined ? this.results[3].imageUrl : 'null'"
            :title="this.results[3].title != null || undefined ? this.results[3].title : 'null'"
            :articleURL="this.results[3].url != null || undefined ? this.results[3].url : 'null'"
          />
        </div>
      </div>

      <hr />
      <p class="text-center">
        <i>
          SNAPI brought to you by
          <a href="https://thespacedevs.com" target="_blank" rel="noopener"
            >The Space Devs</a
          >
        </i>
      </p>
    </div>
  </div>
</template>

<script>
var oldurl = "https://spaceflightnewsapi.net/api/v2/articles?_limit=4";
var url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=4"
import SNAPIArticle from "@/components/LaunchLib-SpaceNews-Article.vue";

window.axios = require("axios");
export default {
  name: "SNAPI",
  data() {
    return {
      results: []
    };
  },
  components:{
    SNAPIArticle
  },
  mounted() {
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.responsive-row{
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>
