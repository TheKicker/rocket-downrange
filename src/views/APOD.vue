<template>
    <section class="container">
        <div class="my-4">
            <h1>NASA Astronomy Picture of the Day </h1>
            <hr>
            <div class="text-center">
                Select a date to get started: <date-picker v-model="chosenDate" valueType="format"></date-picker>
                YE: {{chosenDate}}
            </div> 
        </div>
        <about />
    </section>
</template>


<script>
// @ is an alias to /src
import about from "@/components/About-template.vue";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

var api_key = process.env.VUE_APP_APOD_KEY
var url =`https://api.nasa.gov/planetary/apod?date=${2022}-${3}-${10}&api_key=`+api_key;

window.axios = require("axios");

export default {
  name: "APOD",
  data() {
    return {
      chosenDate: new Date(),
    };
  },
  components:{
      about,
      DatePicker
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