<template>
  <div class="SpaceX">
    <h3>{{ msg }}</h3>
    <p>{{ newData }}</p>
  </div>
</template>

<script>
export default {
  name: "RocketLabUSA",
  props: {
    msg: String
  },
  data() {
    return {
      newData: "Here is an example message. "
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color: var(--primary-dark);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
