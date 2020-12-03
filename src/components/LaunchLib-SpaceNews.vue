<template>
  <div class="LaunchLib-News my-4">
    <div class="card container">
      <div class="card-body">
        <h5 class="text-left text-secondary">
          The Space News API (SNAPI):
        </h5>
        <hr />
        <h3 class="text-center my-4">Trending News</h3>

        <div class="row mb-2 justify-content-center">
          <!-- Article 1 -->
          <div class="col-md-5 col-sm-12">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h6>
                  <strong class="d-inline-block mb-2 text-secondary"
                    >{{ this.results.docs[0].news_site_long }} -
                    {{
                      timeTranslate(this.results.docs[0].published_date)
                    }}</strong
                  >
                </h6>
                <img
                  class="card-img img-fluid"
                  style="height: 14rem;"
                  :src="this.results.docs[0].featured_image"
                  :alt="this.results.docs[0].title"
                />
                <h5 class="mb-0 my-2">
                  <a
                    class="text-dark"
                    :href="this.results.docs[0].url"
                    target="_blank"
                    rel="noopener"
                    >{{ this.results.docs[0].title }}</a
                  >
                </h5>
                <br />
                <div class="d-block mx-auto">
                  <a
                    :href="this.results.docs[0].url"
                    class="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                    >Continue reading</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Article 2 -->
          <div class="col-md-5 col-sm-12">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h6>
                  <strong class="d-inline-block mb-2 text-secondary"
                    >{{ this.results.docs[1].news_site_long }} -
                    {{
                      timeTranslate(this.results.docs[1].published_date)
                    }}</strong
                  >
                </h6>
                <img
                  class="card-img img-fluid"
                  style="height: 14rem;"
                  :src="this.results.docs[1].featured_image"
                  :alt="this.results.docs[1].title"
                />
                <h5 class="mb-0 my-2">
                  <a
                    class="text-dark"
                    :href="this.results.docs[1].url"
                    target="_blank"
                    rel="noopener"
                    >{{ this.results.docs[1].title }}</a
                  >
                </h5>
                <br />
                <div class="d-block mx-auto">
                  <a
                    :href="this.results.docs[1].url"
                    class="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                    >Continue reading</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Row 2  -->
        <div class="row mb-2 justify-content-center">
          <!-- Article 3 -->
          <div class="col-md-5 col-sm-12">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h6>
                  <strong class="d-inline-block mb-2 text-secondary"
                    >{{ this.results.docs[2].news_site_long }} -
                    {{
                      timeTranslate(this.results.docs[2].published_date)
                    }}</strong
                  >
                </h6>
                <img
                  class="card-img img-fluid"
                  style="height: 14rem;"
                  :src="this.results.docs[2].featured_image"
                  :alt="this.results.docs[2].title"
                />
                <h5 class="mb-0 my-2">
                  <a
                    class="text-dark"
                    :href="this.results.docs[2].url"
                    target="_blank"
                    rel="noopener"
                    >{{ this.results.docs[2].title }}</a
                  >
                </h5>
                <br />
                <div class="d-block mx-auto">
                  <a
                    :href="this.results.docs[2].url"
                    class="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                    >Continue reading</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Article 4 -->
          <div class="col-md-5 col-sm-12">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h6>
                  <strong class="d-inline-block mb-2 text-secondary"
                    >{{ this.results.docs[3].news_site_long }} -
                    {{
                      timeTranslate(this.results.docs[3].published_date)
                    }}</strong
                  >
                </h6>
                <img
                  class="card-img img-fluid"
                  style="height: 14rem;"
                  :src="this.results.docs[3].featured_image"
                  :alt="this.results.docs[3].title"
                />
                <h5 class="mb-0 my-2">
                  <a
                    class="text-dark"
                    :href="this.results.docs[3].url"
                    target="_blank"
                    rel="noopener"
                    >{{ this.results.docs[3].title }}</a
                  >
                </h5>
                <br />
                <div class="d-block mx-auto">
                  <a
                    :href="this.results.docs[3].url"
                    class="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                    >Continue reading</a
                  >
                </div>
              </div>
            </div>
          </div>

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
var url = "https://spaceflightnewsapi.net/api/v1/articles?limit=4";

window.axios = require("axios");
export default {
  name: "SNAPI",
  data() {
    return {
      results: []
    };
  },
  mounted() {
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));
  },
  methods: {
    timeTranslate(results) {
      var day = new Date(results).getDate();
      var month = new Date(results).getMonth() + 1;
      var year = new Date(results).getFullYear();
      return `${month}/${day}/${year}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
