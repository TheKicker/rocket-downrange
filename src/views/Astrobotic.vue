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

    <!-- Peregrine Mission One launch and anomaly -->
    <OrgNews
      company="Astrobotic Special Event"
      year="2024"
      title="Peregrine Mission One - Launch and Propulsion Anomaly"
      srcType="video"
      source="https://www.youtube.com/embed/FNaUxYPFsOE"
      description1="On January 8, 2024, Astrobotic's Peregrine Mission One launched aboard United Launch Alliance's brand-new Vulcan Centaur rocket from Cape Canaveral — the first American lunar lander attempt in over 50 years. Hours after launch, Astrobotic reported a critical propulsion anomaly that caused a propellant leak, preventing the spacecraft from achieving the stable orientation needed for a lunar landing."
      description2="Despite the anomaly, the team kept Peregrine operational for 10 days, gathering valuable data and completing several payload experiments in space. The spacecraft re-entered Earth's atmosphere on January 18, 2024, burning up over the Pacific Ocean. The mission was a painful but important learning experience, and Astrobotic pressed forward with development of its larger Griffin lander for NASA's VIPER rover mission."
      update="Jan 18, 2024"
      link1txt="Launch Video"
      link1url="https://www.youtube.com/watch?v=FNaUxYPFsOE"
      link2txt="Astrobotic Updates"
      link2url="https://www.astrobotic.com/lunar-delivery/missions/peregrine-mission-one/"
      link3txt="Space.com Article"
      link3url="https://www.space.com/astrobotic-peregrine-lunar-lander-mission-one-results"
    />

    <!-- NASA CLPS contract award -->
    <OrgNews
      company="Astrobotic Special Event"
      year="2019"
      title="NASA Awards $79.5M CLPS Contract to Astrobotic"
      srcType="image"
      source="https://img.youtube.com/vi/BQ2OiGgtopo/maxresdefault.jpg"
      description1="In February 2019, NASA selected Astrobotic as one of nine companies to receive task orders under the Commercial Lunar Payload Services (CLPS) program, awarding the Pittsburgh company a $79.5 million contract to deliver 14 NASA payloads to the Moon's Lacus Mortis region aboard the Peregrine lander. This was the largest contract in Astrobotic's history at the time."
      description2="The CLPS program represents NASA's strategy to leverage commercial partners for routine lunar payload delivery, freeing the agency to focus on human exploration under the Artemis program. The Astrobotic award helped validate Pittsburgh as a serious hub for aerospace innovation and enabled the company to dramatically expand its workforce and facilities."
      update="Feb 28, 2019"
      link1txt="NASA CLPS Page"
      link1url="https://www.nasa.gov/commercial-lunar-payload-services/"
      link2txt="Astrobotic Article"
      link2url="https://www.astrobotic.com/2019/05/31/nasa-selects-astrobotic-for-clps/"
      link3txt="Space.com Article"
      link3url="https://www.space.com/nasa-commercial-lunar-payload-services-astrobotic-contract"
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