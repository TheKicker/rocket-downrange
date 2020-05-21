<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>&nbsp;|&nbsp;
      <router-link to="/about">About</router-link>&nbsp;|&nbsp;
      <router-link to="/spacex">SpaceX</router-link>&nbsp;|&nbsp;
      <router-link to="/rocket-lab">Rocket Lab</router-link>
    </div>
    <div id="content">
      <router-view />
    </div>
    <div id="footer">
      <h2>Here is your footer 4head</h2>
      <h1>{{ copy }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      copy: `Copyright ${new Date()
        .getFullYear()
        .toString()}, TheKicker Industries `
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 1.1rem;
}

#app {
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav,
#footer {
  padding: 30px;
  text-align: left;
  background: #008080;
  font-size: 1.2rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #008081;
}

#content {
  width: 60%;
  text-align: center;
  margin: auto;
}
</style>
