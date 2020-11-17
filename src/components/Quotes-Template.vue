<template>
  <div class="Quote">
    <div class="card my-4">
      <div class="card-header">Quote</div>
      <div class="card-body">
        <blockquote class="blockquote mb-4">
          <p id="message">
            {{ message }}
          </p>
          <footer class="blockquote-footer">
            <cite title="Source Title"
              ><span id="author">{{ author }}</span>
              <span id="signif">, {{ significance }}</span></cite
            >
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Quote",
  props: {
    message: String,
    author: String,
    significance: String,
  },
};
</script>
<style scoped>
#message {
  font-size: 20px;
  letter-spacing: 2px;
}
#author {
  text-decoration: none;
  letter-spacing: 1px;
  font-style: initial;
  font-weight: bold;
  font-size: 16px;
  color: black;
}
#signif {
  text-decoration: none;
  font-style: italic;
  font-weight: bold;
  font-size: 14px;
  color: grey;
}
</style>

