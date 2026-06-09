<template>
  <div class="SpaceX container my-4">
    <Info
      header="SpaceX"
      description="SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets. Based in Hawthorne, California, the company employs over 7000 who design, operate and relaunch 3 seperate vehicles."
      website="https://www.spacex.com/"
      twitter="https://twitter.com/SpaceX"
      instagram="https://www.instagram.com/spacex/"
      youtube="https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA"
    />

    <LaunchLocations x="25.985752215917778" y="-97.18223317068392" z="12.5" content="Boca Chica Starbase" hidden/>
    
    <NextLaunch company="SpaceX" />

    <LatestLaunch hidden/>

    <Quote
      message="Life cannot be just about solving one problem after another. There need to be things that inspire you, that make you glad to wake up and be a part of humanity."
      author="Elon Musk"
      significance="CEO of SpaceX"
    />

    <!-- SpaceX Public section --> 
      <OrgNews 
        company="SpaceX Special Event"
        year="2026"
        title="SpaceX Is Going Public at $1.8 Trillion."
        srcType="image"
        source="https://thespacedevs-prod.nyc3.digitaloceanspaces.com/media/images/falcon2520925_image_20221009234147.png"
        description1="In a landmark moment for the space industry, SpaceX has announced its plans to go public with an initial public offering (IPO) that values the company at an astounding $1.8 trillion. This move is expected to be one of the largest IPOs in history, reflecting the immense growth and potential of SpaceX as a leader in space exploration and technology."
        description2="The IPO will allow investors to buy shares in SpaceX, providing the company with additional capital to fund its ambitious projects, including the development of the Starship spacecraft, lunar missions, and Mars colonization efforts. The decision to go public comes as SpaceX continues to achieve significant milestones in spaceflight and expand its commercial satellite internet service, Starlink."
        update="June 9, 2026"
        link1txt="Reuters"
        link1url="https://www.reuters.com/world/spacex-ipo-demand-is-approaching-four-times-oversubscribed-source-says-2026-06-09/"
        link2txt="Yahoo Finance"
        link2url="https://finance.yahoo.com/markets/stocks/articles/spacex-going-public-1-8-150500128.html"
        link3txt="CNBC"
        link3url="https://www.cnbc.com/2026/06/09/spacex-ipo-explained-stock-price-date.html"
      />

    <!-- Starship V3 Flight 12 -->
    <OrgNews
      company="SpaceX Special Event"
      year="2026"
      title="Starship V3 Flight 12 - First Flight of Version 3 Starship"
      srcType="video"
      source="https://www.youtube.com/watch?v=hhrkosRjwVI"
      description1="On May 22, 2026, SpaceX launched Starship Flight 12 from the new Pad 2 at Starbase in Boca Chica, Texas. This was the debut flight of the upgraded Starship Version 3 (V3) hardware, featuring more powerful Raptor 3 engines, an upgraded Super Heavy booster, and Starship upper stage."
      description2="The Super Heavy booster (Booster 19) experienced engine issues during the boostback burn and resulted in a hard splashdown in the Gulf of Mexico. The Starship upper stage (Ship 39) successfully deployed 22 Starlink simulators (including camera-equipped units), survived reentry despite losing one Rvac engine, and achieved a controlled splashdown in the Indian Ocean."
      update="May 22, 2026"
      link1txt="Livestream Replay"
      link1url="https://www.youtube.com/watch?v=U4alF1JasLo"
      link2txt="Space.com Article"
      link2url="https://www.space.com/space-exploration/launches-spacecraft/spacex-starship-v3-megarocket-first-test-flight"
      link3txt="Full Mission Details"
      link3url="https://starship-spacex.fandom.com/wiki/Starship_Flight_Test_12"
    />

    <!-- Starship IFT-4 -->
    <OrgNews
      company="SpaceX Special Event"
      year="2024"
      title="Starship IFT-4 - First Successful Return of Super Heavy"
      srcType="video"
      source="https://www.youtube.com/watch?v=j2BdNDTlWbo"
      description1="On June 6, 2024, SpaceX launched Integrated Flight Test 4 (IFT-4) of Starship from Starbase in Boca Chica, Texas. For the first time, both the Super Heavy booster and the Starship upper stage successfully survived reentry and splashed down in their intended ocean zones — a landmark demonstration of full-stack reusability."
      description2="The Super Heavy booster executed a controlled splashdown in the Gulf of Mexico while the Starship upper stage completed a controlled reentry over the Indian Ocean. The flight validated heat shield tiles, propellant venting, and reentry attitude control ahead of future catch attempts by the launch tower arms."
      update="Jun 6, 2024"
      link1txt="Livestream Replay"
      link1url="https://www.youtube.com/watch?v=j2BdNDTlWbo"
      link2txt="SpaceX Starship"
      link2url="https://www.spacex.com/vehicles/starship/"
      link3txt="Space.com Article"
      link3url="https://www.space.com/spacex-starship-flight-4-test-launch-success"
    />

    <!-- New Starship Animation -->
      <OrgNews
        company="SpaceX Special Event"
        year="2022"
        title="New Starship animation released"
        srcType="video"
        source="https://www.youtube.com/watch?v=CyxGL_D-XD0"
        description1="Just a few days before Valentine's Day, and SpaceX is doing everything they can to steal our hearts! A new animation video has been released that illustrates the company's dedication to catch the Super Heavy booster with a massive tower and it's 'chopstick' arms. "
        update="Feb 14, 2021"
        link1txt="SpaceX Starship"
        link1url="https://www.spacex.com/vehicles/starship/"
        link2txt="Space.com Article"
        link2url="https://www.space.com/spacex-starship-launch-tron-blade-runner"
        link3txt="Futurism article"
        link3url="https://futurism.com/the-byte/gorgeous-new-animation-shows-starship-going-orbital"
      />

    <!-- Inspiration4 section --> 
    <OrgNews 
      company="SpaceX Special Event"
      year="2021"
      title="Inspiration4"
      srcType="video"
      source="https://www.youtube-nocookie.com/embed/3pv01sSq44w"
      description1="On Wednesday, September 15 at 8:02 p.m. EDT, 00:02 UTC on September 16, SpaceX’s Falcon 9 successfully launched the Inspiration4 mission – the world’s first all-civilian human spaceflight to orbit – from historic Launch Complex 39A at NASA’s Kennedy Space Center in Florida. "
      description2="After three days orbiting Earth, Dragon and the Inspiration4 crew safely splashed down off the coast of Florida at 7:06 p.m. EDT on Saturday, September 18, 2021, completing their first multi-day low Earth orbit mission. "
      update="Sep 20, 2021"
      link1txt="Livestream Replay"
      link1url="https://www.youtube.com/watch?v=3pv01sSq44w"
      link2txt="Space.com Article"
      link2url="https://www.space.com/spacex-launches-inspiration4-civilian-orbital-mission"
    />

    <!-- SN8 Starship first test section --> 
    <OrgNews 
      company="SpaceX Special Event"
      year="2020"
      title="SN8 - First Starship Launch"
      srcType="video"
      source="https://www.youtube-nocookie.com/embed/ap-BkkrRg-o"
      description1="On December 9, 2020, SpaceX conducted the first high-altitude suborbital flight test of Starship SN8 from Cameron County, Texas. The mission tested Raptor engine performance, aerodynamic behavior during descent (including body flaps), and propellant transfer systems. SN8 also attempted a complex landing flip maneuver, the first of its kind for a vehicle this size, but lost an engine and suffered a rapid unscheduled disassembly on touchdown."
      description2="While the landing failed, the test was still considered valuable. SpaceX emphasized that success is measured by data gathered rather than a clean completion of objectives. Even failure data helps improve future iterations of the Starship program."
      update="Dec 10, 2020"
      link1txt="Livestream Replay"
      link1url="https://www.youtube.com/watch?v=ap-BkkrRg-o"
      link2txt="Starship Overview"
      link2url="https://www.spacex.com/vehicles/starship/"
    />

    <!-- Crew-1 Resilience -->
    <OrgNews
      company="SpaceX Special Event"
      year="2020"
      title="Crew-1 - Resilience Carries First Operational Crew Dragon Crew"
      srcType="video"
      source="https://www.youtube.com/embed/VlTYJNB5-cg"
      description1="On November 15, 2020, SpaceX and NASA launched the first fully operational Crew Dragon mission, Crew-1, aboard Falcon 9 from Kennedy Space Center. The spacecraft, named Resilience, carried NASA astronauts Mike Hopkins, Victor Glover, and Shannon Walker, plus JAXA astronaut Soichi Noguchi to the International Space Station."
      description2="The crew spent 168 days aboard the ISS and safely splashed down on May 2, 2021. Crew-1 certified the Crew Dragon system for routine crewed flights and marked NASA's first fully operational commercial crew rotation mission, cementing SpaceX as a cornerstone of America's human spaceflight program."
      update="Nov 15, 2020"
      link1txt="Livestream Replay"
      link1url="https://www.youtube.com/watch?v=VlTYJNB5-cg"
      link2txt="NASA Crew-1 Page"
      link2url="https://www.nasa.gov/mission/spacex-crew-1/"
      link3txt="Space.com Article"
      link3url="https://www.space.com/spacex-crew-1-launch-success"
    />

    <!-- Crew Dragon first use -->
    <OrgNews
      company="SpaceX Special Event"
      year="2020"
      title="NASA & SPACEX - CREW DRAGON DEMO-2 MISSION"
      srcType="image"
      source="https://rocketdownrange.com/organizations/crew-demo-2.png"
      description1='A mission that was a longtime in the making, Crew Demo-2 was a manned test flight of the Crew Dragon spacecraft developed by SpaceX. The launch occured on May 30th of 2020, the astronauts spent 2 months in low earth orbit at the International Space Station and then returned to Earth on August 2nd of 2020. This event marks the first time since the final Space Shuttle mission (STS-135) in 2011 that American astronauts were launched on American rockets from American soil. The mission was manned by Commander Douglas Hurley and Joint-Operations Commander Robert Behnken and lasted 63 days, 23 hours, and 26 minutes.'
      update="Aug 3, 2020"
      link1txt="Part 1 - Launch to ISS"
      link1url="https://www.youtube.com/watch?v=xY96v0OIcK4"
      link2txt="Part 2 - Return Home"
      link2url="https://www.youtube.com/watch?v=sl2jo1bSxl8"
    />

    <!-- Falcon Heavy Demo Flight -->
    <OrgNews
      company="SpaceX Special Event"
      year="2018"
      title="Falcon Heavy Demo Flight - Starman Heads to Space"
      srcType="video"
      source="https://www.youtube.com/embed/wbSwFU6tY1c"
      description1="On February 6, 2018, SpaceX launched the inaugural flight of the Falcon Heavy — at the time, the world's most powerful operational rocket — from historic Launch Complex 39A at Kennedy Space Center. As a test payload, SpaceX sent CEO Elon Musk's personal Tesla Roadster with a mannequin in a spacesuit (nicknamed 'Starman') into a heliocentric orbit around the Sun."
      description2="The side boosters made simultaneous synchronized landings back at Cape Canaveral in a breathtaking sequence that captured the world's attention. The center core attempted a drone ship landing but missed. The Roadster and Starman are still out there today — you can track their position in real time using the link below."
      update="Feb 6, 2018"
      link1txt="Livestream Replay"
      link1url="https://www.youtube.com/watch?v=wbSwFU6tY1c"
      link2txt="Where is Starman?"
      link2url="https://www.whereisroadster.com/"
      link3txt="SpaceX Falcon Heavy"
      link3url="https://www.spacex.com/vehicles/falcon-heavy/"
    />

    <Starman msg="Where is Starman? " />
    <br />
    <hr />
    <div class="text-center">
      <a
        href="https://github.com/r-spacex/SpaceX-API"
        target="_blank"
        rel="noopener"
        >Link to SpaceX API Repository</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Info from "@/components/Info-Template.vue";
import OrgNews from "@/components/Org-News.vue";
import LaunchLocations from "@/components/LaunchLocations.vue";
import NextLaunch from "@/components/NextLaunch.vue";
import LatestLaunch from "@/components/spacex/SpaceX-LatestLaunch.vue";
import Starman from "@/components/spacex/SpaceX-Starman.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "SpaceX",
  components: {
    Info,
    OrgNews,
    LaunchLocations,
    NextLaunch,
    LatestLaunch,
    Starman,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | SpaceX",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Space Exploration Technologies Corp (SpaceX) is a private aerospace firm based in the United States, their primary launch vehicles include the Falcon 9, Falcon Heavy and Dragon variants.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        name: "keywords",
        content:
          "NASA, SpaceX, Elon Musk, Next Launch, Falcon 9, Falcon Heavy, Dragon, Rocket Downrange, Latest Launch, Launch Info, Space Industry",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | SpaceX" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/spacex",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Space Exploration Technologies Corp (SpaceX) is a private aerospace firm based in the United States, their primary launch vehicles include the Falcon 9, Falcon Heavy and Dragon variants.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/spacex",
      },
      { name: "twitter:title", content: "Rocket Downrange | SpaceX" },
      {
        name: "twitter:description",
        content:
          "Space Exploration Technologies Corp (SpaceX) is a private aerospace firm based in the United States, their primary launch vehicles include the Falcon 9, Falcon Heavy and Dragon variants.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | SpaceX" },
      {
        itemprop: "description",
        content:
          "Space Exploration Technologies Corp (SpaceX) is a private aerospace firm based in the United States, their primary launch vehicles include the Falcon 9, Falcon Heavy and Dragon variants.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>
