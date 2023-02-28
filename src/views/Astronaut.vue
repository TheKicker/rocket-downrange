<template>
  <div class="Astronaut container my-4">
    <Info
      header="Who's in Space?"
      description="Long before the legendary cosmonaut Yuri Gagarin became the first human
        in space in 1961, humanity has dreamed of flying amongst the stars. To
        this day, nearly 600 individuals have traveled into space with
        somewhere around 2/3 of that being American. Even fewer, only 12 people
        have visited our celestial neighbor, the moon. Several space agencies
        are working to change that, and with big projects on the horizon this
        page stands as a living monument to the courageous explorers out there! Ad Astra!"
    />
    <Active />
    <Quote
      message="One small step for man, one giant leap for mankind."
      author="Neil Alden Armstrong"
      significance="The first person to step on the Moon (1969)"
    />
    <Retired />
    <Quote
      message="Orbiting Earth in the spaceship, I saw how beautiful our planet is. People, let us preserve and increase this beauty, and not destroy it!"
      author="Yuri Gagarin"
      significance="The first person in space (1961)"
    />
    <Lost />
  </div>
</template>


<script>
// @ is an alias to /src
import Info from "@/components/Info-Template.vue";
import Active from "@/components/astronaut/Active-In-Flight.vue";
import Retired from "@/components/astronaut/Retired-From-Flight.vue";
import Lost from "@/components/astronaut/Lost-In-Flight.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "Astronaut",
  components: {
    Info,
    Active,
    Retired,
    Lost,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | Astronaut",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Long before the legendary cosmonaut Yuri Gagarin became the first human in space in 1961, humanity has dreamed of flying amongst the stars. This page on Rocket Downrange stands as a living monument to the courageous astronauts out there! Ad Astra!",
      },
      {
        name: "keywords",
        content:
          "NASA, RosCosmos, China, India, Astronauts, Who's in space right now, are there people in space, humanity in space, Rocket Downrange  ",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Astronaut" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/astronaut",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Long before the legendary cosmonaut Yuri Gagarin became the first human in space in 1961, humanity has dreamed of flying amongst the stars. This page on Rocket Downrange stands as a living monument to the courageous astronauts out there! Ad Astra!",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/astronaut",
      },
      { name: "twitter:title", content: "Rocket Downrange | Astronaut" },
      {
        name: "twitter:description",
        content:
          "Long before the legendary cosmonaut Yuri Gagarin became the first human in space in 1961, humanity has dreamed of flying amongst the stars. This page on Rocket Downrange stands as a living monument to the courageous astronauts out there! Ad Astra!",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Astronaut" },
      {
        itemprop: "description",
        content:
          "Long before the legendary cosmonaut Yuri Gagarin became the first human in space in 1961, humanity has dreamed of flying amongst the stars. This page on Rocket Downrange stands as a living monument to the courageous astronauts out there! Ad Astra!",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

