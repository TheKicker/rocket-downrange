<template>
  <div id="astronautProfile" class="card mx-auto my-2" style="width: 16rem">
    <div class="hovereffect rounded">
      <img
        :src="profile_image"
        style="
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          height: 100%;
        "
        class="card-img-top"
        :alt="name + ' - ' + abbrev + ' (' + country_code + ')'"
      />
      <div class="overlay overflow-hidden">
        <p id="desc">{{ truncate(bio) }}</p>
      </div>
    </div>
    <div class="card-body bg-primary text-center">
      <p class="h5 text-uppercase text-white">{{ name }}</p>
      <hr style="background-color: white" />
      <p class="h6 text-uppercase text-white">{{ abbrev }}, {{ country_code }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "astrocomponent",
  props: {
    profile_image: String,
    name: String,
    abbrev: String,
    country_code: String,
    bio: String,
  },
  methods:{
    truncate(bio){
      var periods = []
      var limit = 450

      if(bio.length > limit){
        for(var i = 0; i < bio.length; i++)
        {
          if(bio[i] === ".")
          {
            periods.push(i)
          }
        }
        // console.log(`Periods: ${periods}`)
        return bio.slice(0, this.closest(limit, periods) + 1)
      } else {
        return bio
      }
    },
    closest(num, arr){
      var val = 0;
      for (var i = 0; i < arr.length; i++)
      {
        if (arr[i] < num)
        {
          val = arr[i]
        }
      }
      // console.log(`Closest i: ${val}`)
      return val
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hovereffect {
  width: 100%;
  height: 100%;
  float: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  background: black;
}
.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  padding: 1rem 1rem;
  overflow: scroll;
}
.hovereffect img {
  display: block;
  position: relative;
  max-width: none;
  width: calc(100% + 20px);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.hovereffect:hover img {
  opacity: 0.2;
  filter: alpha(opacity=40);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.hovereffect h4 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 16px;
  overflow: hidden;
  padding: 0.5em 0;
  background-color: transparent;
}
.hovereffect h4:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  content: "";
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}
.hovereffect:hover h4:after {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.hovereffect h4,
.hovereffect a,
.hovereffect p {
  color: #fff;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
.hovereffect:hover h4,
.hovereffect:hover a,
.hovereffect:hover p {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.text-white {
  color: white;
}
#dates {
  display: none;
}
#desc {
  font-size: small;
  overflow-y: scroll;
}
</style>