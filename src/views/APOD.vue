<template>
    <section class="container">
        <div id="parent">
            <h1 class="h4 text-uppercase text-secondary">Historical NASA APOD</h1>
            <div class="text-center">
                <date-picker v-model="chosenDate" valueType="format" placeholder="Pick a date"></date-picker>
            </div>
        </div>
        <h2 class="h3 text-center my-2">{{results.title}} ({{ results.date }})</h2>
        <div id="apod">
            <div class="child my-4">
                <div v-if="results.media_type == 'video'" class="embed-responsive embed-responsive-16by9">              
                    <iframe class="embed-responsive-item" :src="results.url" frameborder="0" allowfullscreen></iframe>
                </div>
                <div v-else>
                    <a :href="results.hdurl" target="_blank" rel="noopener">
                      <img :src="results.url" class="img-fluid d-block mx-auto" style="max-height: 50vh;" :alt="results.title + ' - NASA APOD (' + results.date + ')'"/>
                    </a>
                </div>
            </div>
            <div class="child my-4">
                <p class="text-primary font-weight-bold">{{ results.explanation }}</p>
            </div>
        </div>
        <div class="my-4">
            <p class="text-secondary text-center">Discover the final frontier! Every day brings a new image or video from NASA's Astronomy Picture of the Day tool - a free service brought to you by NASA and Michigan Technological University that has existed since June 16th, 1995. Interested in using this service in your own project, <a href="https://api.nasa.gov/" target="_blank" rel="noopener">click here for the link to their API</a>! The official NASA APOD site can be accessed by going to <a href="https://apod.nasa.gov/apod/" target="_blank" rel="noopener">https://apod.nasa.gov/apod/</a></p>
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

window.axios = require("axios");

export default {
  name: "APOD",
  data() {
    return {
        results:[],
        chosenDate: new Date(),
    };
  },
  components:{
      about,
      DatePicker
  },
  mounted() {
    var year = new Date().getFullYear()
    var month = new Date().getMonth() + 1
    var day = new Date().getDate()
    this.fetchAPOD(year,month,day)
  },
  watch:{
      chosenDate:function(){
          console.log("New Date: " + this.chosenDate)
          var year = new Date(this.chosenDate).getFullYear()
          var month = new Date(this.chosenDate).getMonth() + 1
          var day = new Date(this.chosenDate).getDate() + 1
          this.fetchAPOD(year, month, day)
      }
  },
  methods:{
      fetchAPOD:function(year, month, day){
          var url = `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=${api_key}`;
          window.axios
            .get(url)
            .then(response => {
                this.results = response.data;
            })
            .catch(error => console.log(error));
      }
  },
  metaInfo: {
    title: "Rocket Downrange | Historical APOD",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Missed an Astronomy Picture of the Day? Use the Rocket Downrange Historical APOD Lookup Tool  - NASA's Astronomy Picture of the Day has been around since 1995 so you have plenty to catch up on! ",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, NASA, APOD, Astronomy, Picture, Day, Historical, Lookup, Tool, Space, Images, Video, GIF",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Historical APOD" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/APOD",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Missed an Astronomy Picture of the Day? Use the Rocket Downrange Historical APOD Lookup Tool  - NASA's Astronomy Picture of the Day has been around since 1995 so you have plenty to catch up on! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/APOD",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Historical APOD",
      },
      {
        name: "twitter:description",
        content:
          "Missed an Astronomy Picture of the Day? Use the Rocket Downrange Historical APOD Lookup Tool  - NASA's Astronomy Picture of the Day has been around since 1995 so you have plenty to catch up on! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Historical APOD" },
      {
        itemprop: "description",
        content:
          "Missed an Astronomy Picture of the Day? Use the Rocket Downrange Historical APOD Lookup Tool  - NASA's Astronomy Picture of the Day has been around since 1995 so you have plenty to catch up on! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>
<style scoped>

#parent{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3rem 0;
}
#apod{
    display: flex; 
    flex-direction: row;
}
.child{
    width: 50%;
    padding: 0 1rem;
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 650px) {
  #parent{
      flex-direction: column;
      margin: 1.5rem 0;
  }
  #apod{
      flex-direction: column;
  }
  .child{
      width: 100%; 
      padding: 0 0.5rem;
  }
}

</style>