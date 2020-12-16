<template>
  <div class="Astronaut container my-4">
    <Info
      header="How do we get to Space? "
      description="From the legendary NASA Saturn V that put boot prints on the moon, to the Russian Sputnik 1 which first achieved satellite status in space.  As a species, we dream of flying through the galaxy and dancing among the stars - but what are the vehicles that actually get us there? From government agencies like NASA, RosCosmos, and China; to the private industry like SpaceX, Rocket Lab, ULA, Blue Origin and more - the best and brightest minds are dedicated to making space-rated vehicles capable of taking humanity wherever they want to go.  "
    />
    <Active />
    <Quote
      message="Anyone who sits on top of the largest hydrogen-oxygen fueled system in the world, knowing they’re going to light the bottom, and doesn’t get a little worried, does not fully understand the situation."
      author="John Young"
      significance="Commander of the Apollo 16 Mission (1972)"
    />
    <Retired />
    <Quote
      message="Let’s face it, space is a risky business. I always considered every launch a barely controlled explosion."
      author="Aaron Cohen"
      significance="ANASA Administrator (Feb 1992 - Nov 1992)"
    />
    <Lost />
    <Quote
      message="“Only since the collapse of the Soviet Union have we learned that the Soviets were in fact developing a moon rocket, known as the N1, in the sixties. All four launch attempts of the N1 ended in explosions. Saturn was the largest rocket in the world, the most complex and powerful ever to fly, and remains so to this day. The fact that it was developed for a peaceful purpose is an exception to every pattern of history, and this is one of the legacies of Apollo.”"
      author="Margaret Lazarus Dean"
      significance="Author of Leaving Orbit: Notes from the Last Days of American Spaceflight"
    />
  </div>
</template>


<script>
// @ is an alias to /src
import Info from "@/components/Info-Template.vue";
import Active from "@/components/vehicles/Active-in-flight.vue";
import Retired from "@/components/vehicles/Retired-from-flight.vue";
import Lost from "@/components/vehicles/Lost-in-flight.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "Vehicles",
  components: {
    Info,
    Active,
    Retired,
    Lost,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | Vehicles",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "From the legendary NASA Saturn V that put boot prints on the moon, to the Russian Sputnik 1 which first achieved satellite status in space.  As a species, we dream of flying through the galaxy and dancing among the stars - but what are the vehicles that actually get us there? From government agencies like NASA, RosCosmos, and China; to the private industry like SpaceX, Rocket Lab, ULA, Blue Origin and more - the best and brightest minds are dedicated to making space-rated vehicles capable of taking humanity wherever they want to go.",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, Rocket Downrange, NASA, Roscosmos, China, ESA, SpaceX, Rocket Lab, Blue Origin, ULA, vehicles, launch vehicles, tin can, humans, space ",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Vehicles" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/vehicles",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "From the legendary NASA Saturn V that put boot prints on the moon, to the Russian Sputnik 1 which first achieved satellite status in space.  As a species, we dream of flying through the galaxy and dancing among the stars - but what are the vehicles that actually get us there? From government agencies like NASA, RosCosmos, and China; to the private industry like SpaceX, Rocket Lab, ULA, Blue Origin and more - the best and brightest minds are dedicated to making space-rated vehicles capable of taking humanity wherever they want to go.",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/vehicles",
      },
      { name: "twitter:title", content: "Rocket Downrange | Vehicles" },
      {
        name: "twitter:description",
        content:
          "From the legendary NASA Saturn V that put boot prints on the moon, to the Russian Sputnik 1 which first achieved satellite status in space.  As a species, we dream of flying through the galaxy and dancing among the stars - but what are the vehicles that actually get us there? From government agencies like NASA, RosCosmos, and China; to the private industry like SpaceX, Rocket Lab, ULA, Blue Origin and more - the best and brightest minds are dedicated to making space-rated vehicles capable of taking humanity wherever they want to go.",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Vehicles" },
      {
        itemprop: "description",
        content:
          "From the legendary NASA Saturn V that put boot prints on the moon, to the Russian Sputnik 1 which first achieved satellite status in space.  As a species, we dream of flying through the galaxy and dancing among the stars - but what are the vehicles that actually get us there? From government agencies like NASA, RosCosmos, and China; to the private industry like SpaceX, Rocket Lab, ULA, Blue Origin and more - the best and brightest minds are dedicated to making space-rated vehicles capable of taking humanity wherever they want to go.",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

