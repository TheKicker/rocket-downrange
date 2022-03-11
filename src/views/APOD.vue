<template>
    <section>
        <about />
        <div class="my-4"><h1>Hello there</h1></div>
        <hr> 
        <date-field v-model='value' :size='20' :disabled='false' :readonly='false'/>
        {{value}} - {{url}}
    </section>
</template>


<script>
// @ is an alias to /src
import about from "@/components/About-template.vue";

var api_key = process.env.VUE_APP_APOD_KEY
var url =`https://api.nasa.gov/planetary/apod?date=${2022}-${3}-${10}&api_key=`+api_key;

window.axios = require("axios");

export default {
  name: "APOD",
  data() {
    return {
      chosendate: new Date(),
      value:"",
    };
  },
  components:{
      about
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