<template>
  <div class="Info my-5">
    <div class="container-fluid text-center">
      <h1>{{ header }}</h1>
      <div class="row my-4 mx-3">
        {{ description }}
      </div>
      <div id="center" class="row my-4 mx-3">
        <a v-if="website == null || undefined" hidden></a>
        <a v-else class="btn btn-site mx-1 my-2" :href="website" target="_blank" rel="noopener"><i class="fas fa-laptop-code fa-2x" id="hiddenDesktop"></i><span id="hiddenMobile"><i class="fas fa-laptop-code"></i> &nbsp; Website</span></a>
        <a v-if="twitter == null || undefined" hidden></a>
        <a v-else class="btn btn-twitter mx-1 my-2" :href="twitter" target="_blank" rel="noopener"><i class="fab fa-twitter fa-2x" id="hiddenDesktop"></i><span id="hiddenMobile"><i class="fab fa-twitter"></i> &nbsp; Twitter</span></a>
        <a v-if="instagram == null || undefined" hidden></a> 
        <a v-else class="btn btn-instagram mx-1 my-2" :href="instagram" target="_blank" rel="noopener"><i class="fab fa-instagram fa-2x" id="hiddenDesktop"></i><span id="hiddenMobile"><i class="fab fa-instagram"></i> &nbsp; Instagram</span></a>
        <a v-if="youtube == null || undefined" hidden></a> 
        <a v-else class="btn btn-youtube mx-1 my-2" :href="youtube" target="_blank" rel="noopener"><i class="fab fa-youtube fa-2x" id="hiddenDesktop"></i><span id="hiddenMobile"><i class="fab fa-youtube"></i> &nbsp; Youtube</span></a> 
        <a v-if="stock == null || undefined" hidden></a> 
        <a v-else class="btn btn-site mx-1 my-2" :href="stock" target="_blank" rel="noopener"><i class="fas fa-dollar-sign fa-2x" id="hiddenDesktop"></i><span id="hiddenMobile"><i class="fas fa-dollar-sign"></i> &nbsp; NASDAQ</span></a> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    header: String,
    description: String,
    website: String,
    twitter: String,
    instagram: String,
    youtube: String,
    stock: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#center{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.btn-site{
  background: black;
  color: white;
}
.btn-site:hover{
  background: #323232;
  color: white;
}
.btn-twitter{
  background: #08a0e9;
  color: white;
}
.btn-twitter:hover{
  background: #0084b4;
  color: white;
}
.btn-instagram{
  background: #f46f30;
  color: white;
}
.btn-instagram:hover{
  background: #c35826;
  color: white;
}
.btn-youtube{
  background: #E62117;
  color: white;
}
.btn-youtube:hover{
  background: #b81a12;
  color: white;
}
#hiddenDesktop{display: none;}
#hiddenMobile{display: initial;}

@media only screen and (max-width: 700px) {
  #hiddenMobile{
    display: none;
  }
  #hiddenDesktop{
    display: initial;
  }
}
</style>
