<template>
  <div class="Astrobotic container my-4">
    <Info
      header="Astrobotic"
      description="A space robotics company making space accessible to the world, Astrobotic was founded in 2007 at Carnegie Mellon and is headquartered in Pittsburgh, PA. They develop advanced navigation, operation, and computing systems for spacecraft, and their fleet of lunar landers and rovers deliver payloads to the Moon for companies, governments, universities, non-profits, and individuals."
      website="https://www.astrobotic.com/"
      twitter="https://twitter.com/astrobotic"
      instagram="https://www.instagram.com/astrobotictechnology/"
      youtube="https://www.youtube.com/channel/UCPjiXc-ThkwGnfQ2i7AYZhA"
    />

    <NextLaunch />

    <Quote
      message="We want to make it accessible to our region, to our next generation and make it possible for people to start to recognize that space is not owned by some old guys living and working in an ivory tower somewhere that I can never touch... Space is done here; space is done down the street. "
      author="John Thornton"
      significance="CEO of Astrobotic"
    />

    <!-- ASTR goes public section --> 
    <OrgNews 
      company="Astrobotic Special Event"
      year="2022"
      title="Building a Space Industry in the Steel City"
      srcType="image"
      source="https://rocketdownrange.com/organizations/astrobotic.jpeg"
      description1="Several years ago, John Thornton, chief executive of Astrobotic, presented his company’s plans to build lunar landers at a “pitch day” in the company’s hometown of Pittsburgh, an event where startups describe their businesses and look for investors and customers. It didn’t go well. “The judges laughed the entire time during my pitch,” recalled Thornton. “They just couldn’t imagine there’s a space company in Pittsburgh.”"
      description2='Now, his company is completing its first lunar lander, Peregrine, slated to launch as soon as late this year. The NASA contracts for both that lander and a second, larger one, Griffin, have allowed the company to grow from 18 employees three years ago to nearly 10 times that today.'
      update="May 25, 2022"
      link1txt="Company Website"
      link1url="https://www.astrobotic.com/"
      link2txt="SpaceNews Article"
      link2url="https://spacenews.com/foust-forward-building-a-space-industry-in-steel-city/"
      link3txt="Company YouTube"
      link3url="https://www.youtube.com/channel/UCPjiXc-ThkwGnfQ2i7AYZhA"
    />

    <br />
    <hr />
    <div class="text-center">
      <a href="https://thespacedevs.com" target="_blank" rel="noopener"
        >API Data brought to you by The Space Devs</a
      >
    </div> 
  </div>
</template>


<script>
// @ is an alias to /src
import Info from "@/components/Info-Template.vue";
import OrgNews from "@/components/Org-News.vue";
import NextLaunch from "@/components/astrobotic/Astrobotic-NextLaunch.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "Astra",
  components: {
    Info,
    OrgNews,
    NextLaunch,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | Astrobotic",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "A space robotics company making space accessible to the world, Astrobotic was founded in 2007 at Carnegie Mellon and is headquartered in Pittsburgh, PA. They develop advanced navigation, operation, and computing systems for spacecraft, and their fleet of lunar landers and rovers deliver payloads to the Moon for companies, governments, universities, non-profits, and individuals."
      },
      {
        name: "keywords",
        content:
          "Astrobotic, Rocket 3, Alameda, California, United States, Space Exploration, Rocket Downrange, Next Launch, Launch Schedule",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Astrobotic" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/Astrobotic",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "A space robotics company making space accessible to the world, Astrobotic was founded in 2007 at Carnegie Mellon and is headquartered in Pittsburgh, PA. They develop advanced navigation, operation, and computing systems for spacecraft, and their fleet of lunar landers and rovers deliver payloads to the Moon for companies, governments, universities, non-profits, and individuals."
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/Astrobotic",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Astrobotic",
      },
      {
        name: "twitter:description",
        content:
          "A space robotics company making space accessible to the world, Astrobotic was founded in 2007 at Carnegie Mellon and is headquartered in Pittsburgh, PA. They develop advanced navigation, operation, and computing systems for spacecraft, and their fleet of lunar landers and rovers deliver payloads to the Moon for companies, governments, universities, non-profits, and individuals."
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Astrobotic" },
      {
        itemprop: "description",
        content:
          "A space robotics company making space accessible to the world, Astrobotic was founded in 2007 at Carnegie Mellon and is headquartered in Pittsburgh, PA. They develop advanced navigation, operation, and computing systems for spacecraft, and their fleet of lunar landers and rovers deliver payloads to the Moon for companies, governments, universities, non-profits, and individuals."
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

