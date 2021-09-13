<template>
    <section>
        <!-- Article X -->
          <div class="m-1">
            <div class="card">
              <div class="card-body d-flex flex-column">
                <h6>
                  <strong class="d-inline-block mb-2 text-secondary">{{ newsSite }} - {{timeTranslate(publishedAt)}}</strong>
                </h6>
                <img
                  class="card-img img-fluid"
                  id="cardimg"
                  :src="imageURL"
                  :alt="'Cover image from ' + newsSite + ' - ' + title"/>
                <h5 class="mb-0 my-2">
                  <a
                    class="text-dark"
                    :href="articleURL"
                    target="_blank"
                    rel="noopener"
                    >{{ title }}</a>
                </h5>
                <br />
                <div class="d-block mx-auto">
                  <a
                    :href="articleURL"
                    class="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                    >Continue reading</a>
                </div>
              </div>
            </div>
          </div>
    </section>
</template>


<script>
export default {
  name: "SNAPIArticle",
  props: {
    newsSite: String,
    publishedAt: String,
    imageURL: String,
    title: String,
    articleURL: String
  },
  methods: {
    timeTranslate(results) {
      var day = new Date(results).getDate();
      var month = new Date(results).getMonth() + 1;
      var year = new Date(results).getFullYear();
      return `${month}/${day}/${year}`;
    },
    charCount(results, limit) {
      if (results.length > limit) {
        return results.slice(0, limit) + "...";
      } else {
        return results;
      }
    }
  }
};
</script>
<style scoped>
  #cardimg{
    height: 14rem;
  }
</style>
