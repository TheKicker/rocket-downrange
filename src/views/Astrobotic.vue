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

    <NextLaunch company="Astrobotic" />

    <Quote
      message="We want to make it accessible to our region, to our next generation and make it possible for people to start to recognize that space is not owned by some old guys living and working in an ivory tower somewhere that I can never touch... Space is done here; space is done down the street."
      author="John Thornton"
      significance="CEO of Astrobotic"
    />

    <!-- Astrobotic News / Special Event -->
    <OrgNews
      company="Astrobotic Special Event"
      year="2022"
      title="Building a Space Industry in the Steel City"
      srcType="image"
      source="https://rocketdownrange.com/organizations/astrobotic.jpeg"
      description1="Several years ago, John Thornton, chief executive of Astrobotic, presented his company’s plans to build lunar landers at a “pitch day” in the company’s hometown of Pittsburgh. The judges laughed during his pitch — they couldn’t imagine a space company in Pittsburgh."
      description2="Now, Astrobotic is completing its first lunar lander, Peregrine, and has grown from 18 employees to nearly 180 thanks to NASA contracts for Peregrine and Griffin."
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
      <a href="https://thespacedevs.com" target="_blank" rel="noopener">
        API Data brought to you by The Space Devs
      </a>
    </div>
  </div>
</template>

<script>
import Info from "@/components/Info-Template.vue";
import OrgNews from "@/components/Org-News.vue";
import NextLaunch from "@/components/NextLaunch.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "Astrobotic",
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
          "A space robotics company making space accessible to the world, Astrobotic was founded in 2007 at Carnegie Mellon and is headquartered in Pittsburgh, PA.",
      },
      {
        name: "keywords",
        content:
          "Astrobotic, Pittsburgh, Lunar Lander, Peregrine, Griffin, Moon, Space Robotics, Pennsylvania",
      },
      // Open Graph
      { property: "og:title", content: "Rocket Downrange | Astrobotic" },
      { property: "og:site_name", content: "Rocket Downrange" },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/astrobotic",   // lowercase recommended
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      {
        property: "og:description",
        content:
          "A space robotics company making space accessible to the world, Astrobotic was founded in 2007 at Carnegie Mellon and is headquartered in Pittsburgh, PA.",
      },

      // Twitter Card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Astrobotic",
      },
      {
        name: "twitter:description",
        content:
          "A space robotics company making space accessible to the world, Astrobotic was founded in 2007 at Carnegie Mellon and is headquartered in Pittsburgh, PA.",
      },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      { name: "twitter:creator", content: "Github: @TheKicker" },

      // Schema.org
      { itemprop: "name", content: "Rocket Downrange | Astrobotic" },
      {
        itemprop: "description",
        content:
          "A space robotics company making space accessible to the world, Astrobotic was founded in 2007 at Carnegie Mellon and is headquartered in Pittsburgh, PA.",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>