<template>
  <div class="astra container my-4">
    <Info
      header="Astra"
      description="A small launch vehicle company based in Alameda, California, United States.  Astra was founded in 2004 by Chris Kemp and Adam London, then incorporated in 2016. Currently they employ a small team of around 119 individuals with a primary launch vehicle named Rocket 3.0 "
      website="https://astra.com"
      twitter="https://twitter.com/Astra"
      instagram="https://instagram.com/astraspace"
      stock="https://www.nasdaq.com/market-activity/stocks/astr"
    />

    <NextLaunch />

    <Quote
      message="Things don't become impossible, they just take a little bit more time. "
      author="Chris Kemp"
      significance="Co-Founder of Astra"
    />

    <Stock 
      START="June 30th, 2021"
      ORG="Astra" 
      TICKER="ASTR" 
      LINK="https://www.nasdaq.com/market-activity/stocks/astr" 
      FINN="https://widget.finnhub.io/widgets/stocks/chart?symbol=ASTR&amp;watermarkColor=%231db954&amp;backgroundColor=%23222222&amp;textColor=white" 
    />

    <!-- ASTR goes public section --> 
    <OrgNews 
      company="Astra Special Event"
      year="2021"
      title="Astra ($ASTR) goes public"
      srcType="image"
      source="https://rocketdownrange.com/organizations/Astra.jpg"
      description1="On Wednesday, June 30th of 2021, Astra became the first launch company to be traded publically on NASDAQ.  Trading under the ticker $ASTR, with shares previously listed under the special purpose acquisition company Holicity, the announcement expects to bring in around $500 million in proceeds. Astra's idea is to use the funding to continue to develop their rockets - with a goal of launching as many of it's 40ft tall rockets as it can, aiming to launch one per day by 2025."
      description2='“Now we have a space company that everyone can invest in on the public markets,” Astra CEO Chris Kemp told CNBC. “The same kinds of things you do to make a rocket great are the same behaviors that you have to invest in to make a company great. You don’t want any inefficiencies.”'
      update="Jul 2, 2021"
      link1txt="NASDAQ Profile"
      link1url="https://www.nasdaq.com/market-activity/stocks/astr"
      link2txt="Space.com Article"
      link2url="https://www.space.com/astra-launch-company-public-nasdaq"
      link3txt="CNBC Article"
      link3url="https://www.cnbc.com/2021/07/01/astra-astr-space-company-begins-trading-on-the-nasdaq.html"
    />

    <!-- Rocket 3.2 Launch section --> 
    <OrgNews 
      company="Astra Special Event"
      year="2020"
      title="Rocket 3.2 - Ready to Launch!"
      srcType="image"
      source="https://rocketdownrange.com/organizations/astra-test-2.jpeg"
      description1="Only three months after their previous attempt, on Tuesday, December 15 of 2020 - Astra officially passed the Karman Line in an amazing show of progress! Rocket 3.2 lifted off from Astra's private Kodiak Spaceport : Pad LP-3B in Alaska during their preferred launch window.  Following its targeted flight trajectory nearly dead on, a couple of minutes into flight, the main engines shut down, and the second stage separated. This upper stage then burnt out of all of its propellant and simulated the deployment of a payload into space - unfortunately, missing orbit by just a few seconds or 500m/s by some reports. "
      update="Dec 16, 2020"
      link1txt="Mission Overview"
      link1url="https://astra.com/blog/rocket-3-2-ready-to-launch/"
      link2txt="Twitter Recap Video"
      link2url="https://twitter.com/Astra/status/1338999451893915649?s=20"
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
import NextLaunch from "@/components/astra/Astra-NextLaunch.vue";
import Quote from "@/components/Quotes-Template.vue";
import Stock from "@/components/Stock-Price.vue";

export default {
  name: "Astra",
  components: {
    Info,
    OrgNews,
    NextLaunch,
    Quote,
    Stock
  },
  metaInfo: {
    title: "Rocket Downrange | Astra",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Astra is a private aerospace firm based in the United States, their primary launch vehicle is the Rocket 3.0.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },
      {
        name: "keywords",
        content:
          "Astra, Rocket 3, Alameda, California, United States, Space Exploration, Rocket Downrange, Next Launch, Launch Schedule",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Astra" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/Astra",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Astra is a private aerospace firm based in the United States, their primary launch vehicle is the Rocket 3.0.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/Astra",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Astra",
      },
      {
        name: "twitter:description",
        content:
          "Astra is a private aerospace firm based in the United States, their primary launch vehicle is the Rocket 3.0.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Astra" },
      {
        itemprop: "description",
        content:
          "Astra is a private aerospace firm based in the United States, their primary launch vehicle is the Rocket 3.0.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!   ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

