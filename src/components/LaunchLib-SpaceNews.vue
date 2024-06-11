<template>
  <div class="LaunchLib-News py-3 my-4">
      <div>
        <p class="h5 text-uppercase text-left text-secondary">
          The Space News API (SNAPI):
        </p>
        <hr />
        <h2 class="text-center my-4">Trending News</h2>
        <!-- Row 1  -->
        <div class="responsive-row">
          <!-- Article 1 & 2 -->
          <SNAPIArticle 
            :newsSite="this.results[0].news_site != null || undefined ? this.results[0].news_site : 'null'"
            :publishedAt="this.results[0].published_at != null || undefined ? this.results[0].published_at : 'null'"
            :imageURL="this.results[0].image_url != null || undefined ? this.results[0].image_url : 'null'"
            :title="this.results[0].title != null || undefined ? this.results[0].title : 'null'"
            :articleURL="this.results[0].url != null || undefined ? this.results[0].url : 'null'"
          />
          <SNAPIArticle 
            :newsSite="this.results[1].news_site != null || undefined ? this.results[1].news_site : 'null'"
            :publishedAt="this.results[1].published_at != null || undefined ? this.results[1].published_at : 'null'"
            :imageURL="this.results[1].image_url != null || undefined ? this.results[1].image_url : 'null'"
            :title="this.results[1].title != null || undefined ? this.results[1].title : 'null'"
            :articleURL="this.results[1].url != null || undefined ? this.results[1].url : 'null'"
          />
        </div>
        
        <!-- Row 2  -->
        <div class="responsive-row">
          <!-- Article 3 & 4 -->
          <SNAPIArticle 
            :newsSite="this.results[2].news_site != null || undefined ? this.results[2].news_site : 'null'"
            :publishedAt="this.results[2].published_at != null || undefined ? this.results[2].published_at : 'null'"
            :imageURL="this.results[2].image_url != null || undefined ? this.results[2].image_url : 'null'"
            :title="this.results[2].title != null || undefined ? this.results[2].title : 'null'"
            :articleURL="this.results[2].url != null || undefined ? this.results[2].url : 'null'"
          />
          <SNAPIArticle 
            :newsSite="this.results[3].news_site != null || undefined ? this.results[3].news_site : 'null'"
            :publishedAt="this.results[3].published_at != null || undefined ? this.results[3].published_at : 'null'"
            :imageURL="this.results[3].image_url != null || undefined ? this.results[3].image_url : 'null'"
            :title="this.results[3].title != null || undefined ? this.results[3].title : 'null'"
            :articleURL="this.results[3].url != null || undefined ? this.results[3].url : 'null'"
          />
        </div>
        <!-- Row 3  -->
        <div class="responsive-row">
          <!-- Article 5 & 6 -->
          <SNAPIArticle 
            :newsSite="this.results[4].news_site != null || undefined ? this.results[4].news_site : 'null'"
            :publishedAt="this.results[4].published_at != null || undefined ? this.results[4].published_at : 'null'"
            :imageURL="this.results[4].image_url != null || undefined ? this.results[4].image_url : 'null'"
            :title="this.results[4].title != null || undefined ? this.results[4].title : 'null'"
            :articleURL="this.results[4].url != null || undefined ? this.results[4].url : 'null'"
          />
          <SNAPIArticle 
            :newsSite="this.results[5].news_site != null || undefined ? this.results[5].news_site : 'null'"
            :publishedAt="this.results[5].published_at != null || undefined ? this.results[5].published_at : 'null'"
            :imageURL="this.results[5].image_url != null || undefined ? this.results[5].image_url : 'null'"
            :title="this.results[5].title != null || undefined ? this.results[5].title : 'null'"
            :articleURL="this.results[5].url != null || undefined ? this.results[5].url : 'null'"
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
</template>

<script>
var v2_url = "https://spaceflightnewsapi.net/api/v2/articles?_limit=4";
var v3_url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=6"
var url = "https://api.spaceflightnewsapi.net/v4/articles/?format=json"
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
        console.log(`API Log here: ${response.data}`)
        this.results = response.data.results
      })
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.responsive-row{
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
@media only screen and (max-width: 720px) {
   .responsive-row{
     display: flex;
     flex-direction: column;
     width: 100%;
   }
 }
</style>
