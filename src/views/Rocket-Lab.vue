<template>
  <div class="RocketLab container my-4">
    <Info
      header="Rocket Lab"
      description="Rocket Lab designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2006 by an engineer named Peter Beck and established headquarters in California in 2013. Currently, their prime launch vehicle is named Electron capable of launching nearly 500lbs to orbit."
      website="https://www.rocketlabusa.com/"
      twitter="https://twitter.com/RocketLab"
      instagram="https://www.instagram.com/rocketlabusa/"
      youtube="https://www.youtube.com/user/RocketLabNZ"
      stock="https://www.nasdaq.com/market-activity/stocks/rklb"
    />

    <NextLaunch />

    <Quote
      message="We set out to really make space accessible and make space kind of the third domain where you can innovate and provide your services to everybody here on earth and Rocket Lab's Photon is really kind of the next logical step to doing that."
      author="Peter Beck"
      significance="CEO of Rocket Lab"
    />

    <Stock 
      START="August 25th, 2021"
      ORG="Rocket Lab" 
      TICKER="RKLB" 
      LINK="https://www.nasdaq.com/market-activity/stocks/rklb" 
      FINN="https://widget.finnhub.io/widgets/stocks/chart?symbol=RKLB&amp;watermarkColor=%231db954&amp;backgroundColor=%23222222&amp;textColor=white"
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

  <!-- Return to Sender section --> 
    <OrgNews 
      company="Rocket Lab Special Event"
      year="2020"
      title="Return to sender - a reusability milestone"
      srcType="image"
      source="https://rocketdownrange.com/organizations/Rocket-Lab-Gnome.jpg"
      description1="The Return to Sender mission was Rocket Lab's 16th succesful launch of the Electron vehicle that occured on November 20, 2020. Launched from Launch Complex 1 in New Zealand, the mission was responsible for over 30 different satellites to sun-synchronous orbit in one payload. Customers included TriSept, Unseenlabs, Swarm, Auckland Programme for Space Systems, and global gaming software company Valve. This mission also included Rocket Lab's first attempt to bring Electron’s first stage back to Earth under a newly designed parachute system for a controlled water landing before collection by a recovery vessel - a major milestone in Rocket Lab’s pursuit to make Electron a reusable rocket to support an increased launch cadence for small satellites."
      description2='Half Life 2 fans may recognize "Gnome Chompski" who was launched as part of the payload thanks to Valve president, Gabe Newell. In homage to the memes, "Little Rocket Man" achievement and more; The Garden Gnome is co-designed by special effects and prop house Weta Workshop and made from titanium. Rocket Lab hopes to use it “to test and qualify a novel 3D printing technique that could be employed for future spacecraft components”. The gnome will be attached to the inside of Rocket Lab’s Kick Stage, the final stage of Rocket Lab’s Electron rocket that allows more accurate placement of satellites in orbit.'
      update="Nov 24, 2020"
      link1txt="Mission Overview"
      link1url="https://www.rocketlabusa.com/missions/completed-missions/flight-16/"
      link2txt="Youtube Livestream"
      link2url="https://www.youtube.com/watch?v=eZGI_lHGltA"
    />

  <!-- It's a Test section --> 
    <OrgNews 
      company="Rocket Lab Special Event"
      year="2017"
      title="It's a test - First Electron Mission"
      srcType="image"
      source="https://rocketdownrange.com/organizations/RL-Test.jpg"
      description1="It's a Test was the first launch of Rocket Lab's Electron launch vehicle. When Electron lifted-off at 16:20 NZT from Rocket Lab Launch Complex 1 on the Mahia Peninsula in New Zealand, it became the first orbital-class rocket launched from from a private launch site. The mission saw Electron complete a perfect first stage burn, stage separation, second stage ignition and fairing separation. Electron successfully reached space and put Rocket Lab in an incredibly strong position to accelerate into commercial operations."
      update="Aug 12, 2020"
      link1txt="Mission Overview"
      link1url="https://www.rocketlabusa.com/missions/completed-missions/its-a-test/"
      link2txt="Launch Day Video"
      link2url="https://www.youtube.com/watch?v=VA_8HPsua0c"
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
import NextLaunch from "@/components/rocketlab/RocketLab-NextLaunch.vue";
import Quote from "@/components/Quotes-Template.vue";
import Stock from "@/components/Stock-Price.vue";

export default {
  name: "RocketLab",
  components: {
    Info,
    OrgNews,
    NextLaunch,
    Quote,
    Stock
  },
  data() {
    return {};
  },
  metaInfo: {
    title: "Rocket Downrange | Rocket Lab",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Rocket Lab is a private aerospace firm based in the United States, their primary launch vehicle is the Electron Rocket.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        name: "keywords",
        content:
          "NASA, Rocket Labs, Next Launch, Rocket Downrange, Latest Launch, Launch Info, Space Industry, Electron Rocket",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Rocket Lab" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/rocket-lab",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Rocket Lab is a private aerospace firm based in the United States, their primary launch vehicle is the Electron Rocket.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/rocket-lab",
      },
      { name: "twitter:title", content: "Rocket Downrange | Rocket Lab" },
      {
        name: "twitter:description",
        content:
          "Rocket Lab is a private aerospace firm based in the United States, their primary launch vehicle is the Electron Rocket.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Rocket Lab" },
      {
        itemprop: "description",
        content:
          "Rocket Lab is a private aerospace firm based in the United States, their primary launch vehicle is the Electron Rocket.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>
