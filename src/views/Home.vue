<template>
  <div class="home">
    <Homepage />
    <section class="container">
      <NASAapod />
      <br>
      <SNAPI />
      <br>
      <LLNextLaunch />

      <!-- Lunco Space section --> 
      <OrgNews 
        company="Space Industry & Godot"
        year="2022"
        title="Help wanted: LunCo Space"
        srcType="image"
        source="https://rocketdownrange.com/organizations/lunco.png"
        description1="Recently, I was invited to join the team at LunCo where we plan to create a space simulation game that features industry real world applications.  While similar to games like Kerbal Space and No Man's Sky, LunCo will be feature two game styles - digital twin mode for engineers, and story mode for casual enthusiasts.  We also plan to allow user generated content (space crafts, trajectories, factories, etc.) and integration with professional tools like CAD, FEA, MBSE, and more. "
        description2="For story mode, you are playing as a CEO & Founder of a Lunar exploration company in the near future.  You will collect resources, build factories, and manufacture robots to create a sustainable lunar base.  From there, it's up to you to turn the Moon into a stepping stone and launch past the stars!"
        update="Aug 10, 2022"
        link1txt="Itchi.io Profile"
        link1url="https://difint.itch.io/lunco"
        link2txt="Github Repository"
        link2url="https://github.com/LunCoSim"
        link3txt="Gitcoin Grant"
        link3url="https://gitcoin.co/grants/5939/lunco-full-cycle-space-operations-sim-tool"
      />
      
      <!-- RKLB Goes Public section --> 
      <OrgNews 
        company="Rocket Lab Special Event"
        year="2021"
        title="Rocket Lab ($RKLB) goes public"
        srcType="image"
        source="https://rocketdownrange.com/organizations/rocketLab.jpg"
        description1="On Wednesday, August 25th of 2021, Rocket Lab began trading on the Nasdaq, becoming the latest space company to close a merger with a special purpose acquisition company and go public. They closed the first day down slightly at $10.45 per share, under the ticker $RKLB."
        description2='“We are super excited to bring a high-quality space asset to the market” Rocket Lab CEO Peter Beck told CNBC. “I don’t think it will take long for investors to differentiate between the company that’s consistently delivering and the ones that have aspirations to deliver sometime in the future” he later added.'
        update="Aug 30, 2021"
        link1txt="NASDAQ Profile"
        link1url="https://www.nasdaq.com/market-activity/stocks/rklb"
        link2txt="Space.com Article"
        link2url="https://www.space.com/rocket-lab-goes-public-spac-merger"
        link3txt="CNBC Article"
        link3url="https://www.cnbc.com/2021/08/25/rocket-lab-begins-trading-on-nasdaq-as-rklb-after-spac-merger.html"
      />
      <!-- ASTR goes public section --> 
      <OrgNews 
        company="Astra Special Event"
        year="2021"
        title="Astra ($ASTR) goes public"
        srcType="image"
        source="https://rocketdownrange.com/organizations/Astra.jpg"
        description1="On Wednesday, June 30th of 2021, Astra became the first launch company to be traded publicly on NASDAQ.  Trading under the ticker $ASTR, with shares previously listed under the special purpose acquisition company Holicity, the announcement expects to bring in around $500 million in proceeds. Astra's idea is to use the funding to continue to develop their rockets - with a goal of launching as many of it's 40ft tall rockets as it can, aiming to launch one per day by 2025."
        description2='“Now we have a space company that everyone can invest in on the public markets,” Astra CEO Chris Kemp told CNBC. “The same kinds of things you do to make a rocket great are the same behaviors that you have to invest in to make a company great. You don’t want any inefficiencies.”'
        update="Jul 2, 2021"
        link1txt="NASDAQ Profile"
        link1url="https://www.nasdaq.com/market-activity/stocks/astr"
        link2txt="Space.com Article"
        link2url="https://www.space.com/astra-launch-company-public-nasdaq"
        link3txt="CNBC Article"
        link3url="https://www.cnbc.com/2021/07/01/astra-astr-space-company-begins-trading-on-the-nasdaq.html"
      />
      <NASAperseverance/>
      <NASAcuriosity />
      <NASAopportunity />
    </section>
    <ExternalLinks />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from "@/components/Homepage.vue";
import OrgNews from "@/components/Org-News.vue";
import NASAapod from "@/components/NASA-APOD.vue";
import LLNextLaunch from "@/components/LaunchLib-Next.vue";
import NASAcuriosity from "@/components/NASA-curiosity.vue";
import NASAopportunity from "@/components/NASA-opportunity.vue";
import NASAperseverance from "@/components/NASA-perseverancePhotos.vue";
import ExternalLinks from "@/components/ExternalLinks.vue";
import Contact from "@/components/Contact.vue";
import SNAPI from "@/components/LaunchLib-SpaceNews.vue";

export default {
  name: "Home",
  components: {
    Homepage,
    OrgNews,
    NASAapod,
    LLNextLaunch,
    NASAcuriosity,
    NASAopportunity,
    NASAperseverance,
    ExternalLinks,
    Contact,
    SNAPI,
  },
  metaInfo: {
    title: "Rocket Downrange",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "A dynamically generated site made possible through various NASA APIs, TheSpaceDevs APIs and others.  Featuring rocket launch schedule, astronomy picture of the day, company information, rover pictures, and more! Made on Earth by Cavan Lemasters, coffee and Vue! ",
      },
      {
        name: "keywords",
        content:
          "NASA, SpaceX, Rocket Labs, Next Launch, Rocket, Downrange, Latest Launch, Opportunity, Curiosity, Insight, Perseverance, Rovers, Mars, APOD, Cav, Lemasters, Cavan Lemasters",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "A dynamically generated site made possible through various NASA APIs, TheSpaceDevs APIs and others.  Featuring rocket launch schedule, astronomy picture of the day, company information, rover pictures, and more! Made on Earth by Cavan Lemasters, coffee and Vue! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com",
      },
      { name: "twitter:title", content: "Rocket Downrange" },
      {
        name: "twitter:description",
        content:
          "A dynamically generated site made possible through various NASA APIs, TheSpaceDevs APIs and others.  Featuring rocket launch schedule, astronomy picture of the day, company information, rover pictures, and more! Made on Earth by Cavan Lemasters, coffee and Vue! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange" },
      {
        itemprop: "description",
        content:
          "A dynamically generated site made possible through various NASA APIs, TheSpaceDevs APIs and others.  Featuring rocket launch schedule, astronomy picture of the day, company information, rover pictures, and more! Made on Earth by Cavan Lemasters, coffee and Vue! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>
