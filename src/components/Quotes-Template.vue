<template>
  <div class="Quote">
    <div class="card my-4">
      <div class="card-header">Quote</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>
            {{ message }}
          </p>
          <footer class="blockquote-footer">
            {{ author }}
            <cite title="Source Title">{{ significance }}</cite>
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

