<template>
  <div class="Firefly container my-4">
    <Info
      header="Firefly Aerospace"
      description="Firefly Aerospace is an American private aerospace firm based in Austin,
        Texas, that develops small and medium sized vehicles to launch payloads
        to low earth orbit. They were founded in January of 2014 and employ
        around 300 individuals between the United States and Ukraine. Their
        primary launch vehicle, Alpha, is capable of lifting one metric ton with
        more vehicles in research and development."
      website="https://firefly.com/"
      twitter="https://twitter.com/Firefly_Space"
      instagram="https://www.instagram.com/fireflyaerospace/"
      youtube="https://www.youtube.com/channel/UC31UF9oKANw77yxBLxN852A"
    />

    <NextLaunch company="Firefly" />
    
    <Quote
      message="We're really excited and confident about our upcoming launch (December 2020), all great companies start with a great team - and we have an amazing one with plenty of experience. This ain't our first rodeo."
      author="Tom Markusic"
      significance="CEO of Firefly Aerospace"
    />

  <!-- Blue Ghost lunar landing -->
    <OrgNews
      company="Firefly Special Event"
      year="2025"
      title="Blue Ghost - First Commercial Lunar Lander to Successfully Touch Down"
      srcType="video"
      source="https://www.youtube.com/watch?v=NpHhEybJdxg"
      description1="On March 2, 2025, Firefly Aerospace's Blue Ghost lander successfully touched down on the Moon's Mare Crisium region, becoming the first commercial lunar lander in history to achieve a successful soft landing. Blue Ghost carried 10 NASA payloads to the surface under the Commercial Lunar Payload Services (CLPS) program, operating on the lunar surface for a full lunar day (about 14 Earth days)."
      description2="Blue Ghost transmitted high-definition video of a total solar eclipse as seen from the Moon's surface, a first-ever feat. The mission was an extraordinary success for Firefly and for NASA's strategy of using commercial partners for lunar surface access. It positioned Firefly as a leader in the commercial lunar economy and a key partner for future Artemis-era surface operations."
      update="Mar 2, 2025"
      link1txt="Landing Livestream"
      link1url="https://www.youtube.com/watch?v=NpHhEybJdxg"
      link2txt="Firefly Article"
      link2url="https://firefly.com/blue-ghost-mission-1/"
      link3txt="NASA CLPS Page"
      link3url="https://www.nasa.gov/commercial-lunar-payload-services/"
    />

  <!-- Victus Nox responsive launch -->
    <OrgNews
      company="Firefly Special Event"
      year="2023"
      title="Victus Nox - Fastest Commercial Launch Ever for US Space Force"
      srcType="video"
      source="https://www.youtube.com/watch?v=P30-FXePPKU"
      description1="On September 14-15, 2023, Firefly launched the Victus Nox mission for the US Space Force from Vandenberg Space Force Base — setting a new record for the fastest commercial launch ever conducted. After receiving a 27-hour notice-to-launch order, Firefly's team fueled and launched an Alpha rocket carrying the Millennium Space Systems VICTUS NOX satellite in under 27 hours."
      description2="The mission demonstrated a critical new national security capability: the ability to rapidly reconstitute satellite coverage in response to a threat or on-orbit failure. It validated Firefly's Tactically Responsive Space (TacRS) capability and earned the company significant credibility with US government customers seeking assured access to space on short notice."
      update="Sep 15, 2023"
      link1txt="Launch Video"
      link1url="https://www.youtube.com/watch?v=P30-FXePPKU"
      link2txt="Space Force Article"
      link2url="https://www.spaceforce.mil/News/Article/3521771/us-space-force-firefly-aerospace-launch-victus-nox/"
      link3txt="Space.com Article"
      link3url="https://www.space.com/firefly-aerospace-victus-nox-launch-record-speed"
    />

  <!-- Alpha Flight 2 reaches orbit -->
    <OrgNews
      company="Firefly Special Event"
      year="2022"
      title="Alpha Flight 2 - To The Black - Firefly Reaches Orbit"
      srcType="video"
      source="https://www.youtube.com/watch?v=lqraRQlA5aY"
      description1="On October 1, 2022, Firefly Aerospace's Alpha rocket successfully reached orbit on its second ever flight, launching from Vandenberg Space Force Base and delivering a DREAM (Dedicated Research and Education Accelerator Mission) payload of three CubeSats for educational institutions. The mission, named 'To The Black,' redeemed the program after the 2021 first-flight failure."
      description2="Alpha's second flight demonstrated rapid iteration in rocket development — Firefly analyzed the failure mode, redesigned the affected system, and returned to flight in just over a year. Reaching orbit on only the second attempt of a new rocket is an exceptional achievement in the launch industry and validated Firefly's engineering approach and manufacturing in Cedar Park, Texas."
      update="Oct 1, 2022"
      link1txt="Launch Video"
      link1url="https://www.youtube.com/watch?v=lqraRQlA5aY"
      link2txt="Firefly Article"
      link2url="https://firefly.com/to-the-black/"
      link3txt="Space.com Article"
      link3url="https://www.space.com/firefly-alpha-rocket-second-launch-orbit-success"
    />

  <!-- Firefly Alpha first test section -->
    <OrgNews
      company="Firefly Special Event"
      year="2021"
      title="First Alpha rocket comes up short"
      srcType="video"
      source="https://www.youtube.com/embed/-HfHAazNM3Q"
      description1="Firefly's Alpha rocket launched on the company's first ever orbital test flight on September 2nd, lifting off from Vandenberg Space Force Base in California at 9:59pm EDT. Everything was looking great for the first 2 minutes and 25 seconds until the rocket rapidly disassembled itself in spectacular fashion high up in the California sky."
      description2="While not successful, congratulations to everyone at Firefly Aerospace for an incredible first attempt and we look forward to the next one! "
      update="Sep 3, 2021"
      link1txt="Mission Overview"
      link1url="https://astra.com/blog/rocket-3-2-ready-to-launch/"
      link2txt="Space.com Article"
      link2url="https://www.space.com/firefly-aerospace-first-alpha-rocket-launch-failure"
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
import NextLaunch from "@/components/NextLaunch.vue";
import OrgNews from "@/components/Org-News.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "Firefly",
  components: {
    Info,
    NextLaunch,
    OrgNews,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | Firefly Aerospace",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Firefly Aerospace is a private aerospace firm based in the United States, their primary launch vehicle is the Alpha.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },
      {
        name: "keywords",
        content:
          "Firefly Aerospace, Alpha Rocket, United States, Space Exploration, Rocket Downrange, Next Launch, Launch Schedule",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Firefly Aerospace" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/Firefly-aerospace",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Firefly Aerospace is a private aerospace firm based in the United States, their primary launch vehicle is the Alpha.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/Firefly-aerospace",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Firefly Aerospace",
      },
      {
        name: "twitter:description",
        content:
          "Firefly Aerospace is a private aerospace firm based in the United States, their primary launch vehicle is the Alpha.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Firefly Aerospace" },
      {
        itemprop: "description",
        content:
          "Firefly Aerospace is a private aerospace firm based in the United States, their primary launch vehicle is the Alpha.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

