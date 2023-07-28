<template>
<div>
  <div class="cover container">
      <!-- Cover image size set by scoped CSS -->
  </div>
  <div class="mx-auto container">
    <div class="profile-head">
      <div class="bio">
        <img src="@/assets/rover/SOJO.png" class="profile-image" alt="Rocket Downrange Rover profile image for the Pathfinder 'Sojourner' Mars Rover">
        <div class="name">
          <h1 class="roverName">Sojourner</h1>
          <p class="roverLocation"><i class="fas fa-map-marker-alt mr-2"></i> Ares Vallis, Mars</p>
        </div>
      </div>
      <div class="stats">
        <div class="stats-item">
          <p class="stats-status">COMPLETE</p>
          <p class="small">Status</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">83 (85)</p>
          <p class="small">SOLs (DAYs)</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">330 (100)</p>
          <p class="small">Feet (Metres)</p>
        </div>
      </div>
    </div>
    <div class="profile-body">
      <div class="body-3d">
        <iframe src="https://sketchfab.com/models/79d6dba490864f6d8e44565c8a8f81a8/embed?dnt=1" width="100%" height="100%" frameborder="0" />
      </div>
      <div class="body-bio">
        <h2>ABOUT THE ROVER</h2>
        <hr>
        <div class="foobar">
          <p class="foo">Biography:</p>
          <p class="bar">NASA's Pathfinder is a two fold mission to Mars in mid-1997.  One part consisted of the lander, named Carl Sagan Memorial Station, which served as a base camp communications and control.  The other, was a light weight (only 23 pounds) rover named Sojourner which was the first rover to operate outside the Earth-Moon system.  Originally designed for a 7 sol environmental survey mission, Sojourner was operational for 83 days before communications were lost.</p>
        </div>
        <div class="foobar">
          <p class="foo">Launch Date:</p>
          <p class="bar">December 4th, 1996</p>
        </div>
        <div class="foobar">
          <p class="foo">Landing Date:</p>
          <p class="bar">July 4th, 1997</p>
        </div>
        <div class="foobar">
          <p class="foo">Rover Cost:</p>
          <p class="bar">$265 million</p>
        </div>
      </div>
    </div>

    <Quote
      message="It was the beginning of a Mars Renaissance... since Pathfinder, there’s been basically a mission to Mars almost every opportunity... [now] we have a flotilla of orbiters, we have three spacecraft, two rovers, and a lander on the surface, I mean, we have a little community up there."
      author="Matthew Golombek"
      significance="Former Project Manager for Pathfinder/Sojourner mission"
    />

    <div class="mt-4">
      <h2>Rover Photo Feed</h2>
      <p>Photos taken by Sojourner and Pathfinder base camp.</p>
    </div>
    <div class="profile-feed">
      <a href="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_so182_color_an.jpg" target="_blank" rel="noopener">
        <VLazyImage src="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_so182_color_an.jpg" alt="This image shows the area directly in front of the rover egress ramp and around Yogi." class="img" />
      </a>
      <a href="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_sol30s55.gif" target="_blank" rel="noopener">
        <VLazyImage src="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_sol30s55.gif" alt="Sojourner rolling over the Mermaid dune " class="img" />
      </a>
      <a href="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_sunset3.gif" target="_blank" rel="noopener">
        <VLazyImage src="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_sunset3.gif" alt="These three images show a sunset on Mars, with false color to enhance details." class="img" />
      </a>
      <a href="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_sol22r55.gif" target="_blank" rel="noopener">
        <VLazyImage src="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_sol22r55.gif" alt="The Sojourner Rover at the end of sol 22 " class="img" />
      </a>
      <a href="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_82467.jpg" target="_blank" rel="noopener">
        <VLazyImage src="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_82467.jpg" alt="This image shows clear evidence of 'scalloped' features in the soil associated with wind-blown dust." class="img" />
      </a>
      <a href="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_yogi_rov.jpg" target="_blank" rel="noopener">
        <VLazyImage src="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_yogi_rov.jpg" alt="The Sojourner Rover is taking its Alpha Proton X-ray Spectrometer measurement. It clearly shows the 'two-toned' surface of this large rock." class="img" />
      </a>
      <a href="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_81093.jpg" target="_blank" rel="noopener">
        <VLazyImage src="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_81093.jpg" alt="Here we see Wedge and Flat Top imaged in color as part of the 'monster panorama'." class="img" />
      </a>
      <a href="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_presidential.jpg" target="_blank" rel="noopener">
        <VLazyImage src="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_presidential.jpg" alt="A full-color panorama of the landing site from the Mars Pathfinder camera." class="img" />
      </a>
      <a href="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_81094.jpg" target="_blank" rel="noopener">
        <VLazyImage src="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_81094.jpg" alt="A color version of the image of the rover as it left the rear (or right) ramp." class="img" />
      </a>
      <a href="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_80808.jpg" target="_blank" rel="noopener">
        <VLazyImage src="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_80808.jpg" alt="Large boulders are visible in this enlargement of pictures taken by the Mars Pathfinder lander camera on July 4, 1997." class="img" />
      </a>
      <a href="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_80809.jpg" target="_blank" rel="noopener">
        <VLazyImage src="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_80809.jpg" alt="This closeup picture of the Mars Pathfinder lander shows the front of the small Sojourner rover, perched on a solar panel. " class="img" />
      </a>
      <a href="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_80812.jpg" target="_blank" rel="noopener">
        <VLazyImage src="https://nssdc.gsfc.nasa.gov/planetary/image/marspath_80812.jpg" alt="A hill is visible in the distance (the notch within the hill is an image artifact). Airbags are seen at the lower right." class="img" />
      </a>
    </div>
    <div class="py-3">
      <hr>
      <p class="text-center">
        For more information on this rover, or other missions, <a href="https://nasa.gov" target="_blank" rel="noopener">visit NASA's official website</a>
      </p>
    </div>
  </div>
</div>
</template>


<script>

import Quote from "@/components/Quotes-Template.vue";
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "Sojourner",
  components:{
    Quote,
    VLazyImage
  },
  metaInfo: {
    title: "Rocket Downrange | Sojourner Rover",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "NASA's Pathfinder is a two fold mission to Mars in mid-1997.  One part consisted of the lander, named Carl Sagan Memorial Station, which served as a base camp communications and control.  The other, was a light weight (only 23 pounds) rover named Sojourner.",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, NASA, JPL, Mars, Rovers, Sojourner, Pathfinder, Carl, Sagan, Memorial, base camp",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Sojourner Rover" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/sojourner",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "NASA's Pathfinder is a two fold mission to Mars in mid-1997.  One part consisted of the lander, named Carl Sagan Memorial Station, which served as a base camp communications and control.  The other, was a light weight (only 23 pounds) rover named Sojourner.",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/sojourner",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Sojourner Rover",
      },
      {
        name: "twitter:description",
        content:
          "NASA's Pathfinder is a two fold mission to Mars in mid-1997.  One part consisted of the lander, named Carl Sagan Memorial Station, which served as a base camp communications and control.  The other, was a light weight (only 23 pounds) rover named Sojourner.",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Sojourner Rover" },
      {
        itemprop: "description",
        content:
          "NASA's Pathfinder is a two fold mission to Mars in mid-1997.  One part consisted of the lander, named Carl Sagan Memorial Station, which served as a base camp communications and control.  The other, was a light weight (only 23 pounds) rover named Sojourner.",
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
.cover {
    background-image: url("https://nssdc.gsfc.nasa.gov/planetary/image/marspath_presidential_med.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
}
.profile-head{
  display: flex;
  justify-content: space-between;
}
.profile-image{
  transform: translateY(-2.5rem);
  border: 5px white solid;
  border-radius: 45%;
}
.bio{
  display: flex;
  flex-direction: row;
}
.name{
  margin: auto 1rem;
}
.stats{
  display: flex;
  flex-direction: row;
}
.stats-item{
  text-align: center;
  margin: auto 1rem;
}
.stats-status{
  font-size: 18px;
  font-weight: bold;
}
.profile-body{
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
}
.body-bio{
  width: 55%;
  padding: 1rem;
}
.body-3d{
  height: 450px;
  width: 45%;
}
.foobar{
  margin: 2rem 0;
}
.foo{
  font-weight: 800;
  line-height: 0;
}
.bar{
  margin: 0 0 0 0.5rem;
  line-height: 16px;
}
.profile-feed{
  margin: 2rem auto;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.img{
  margin: auto;
  height: 250px;
  width: 250px;
  object-fit: cover;
}

@media only screen and (max-width: 900px){
  .cover {
    height: 200px;
  }
  .roverName{
    font-size: 18px;
  }
  .roverLocation{
    font-size: 12px;
  }
  .profile-head{
    flex-direction: column;
  }
  .profile-image{
    width: 120px;
  }
  .stats{
    justify-content: space-evenly;
  }
  .stats-item{
    margin: auto 0.5rem;
  }
  .stats-status{
    font-size: 12px;
  }
  .profile-body{
    flex-direction: column;
    margin: 1rem 0;
  }
  .body-bio{
    width: 100%;
    padding: 1rem;
  }
  .body-3d{
    display: block;
    margin: auto;
    width: 100%;
    height: 300px;
  }
  .profile-feed{
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .img{
    height: 300px;
    width: 300px;
  }
}
</style>
