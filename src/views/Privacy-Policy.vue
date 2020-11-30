<template>
  <div class="PrivacyPolicy container my-4">
    <div class="container-fluid text-center my-5">
      <h1>Rocket Downrange Privacy Policy</h1>
      <div class="row my-4 text-left">
        <p>At Rocket Downrange, your privacy is our top priority.  As a digital marketer and web developer, I am strongly aware of the information companies and organizations can collect when you use their site. There are benefits to this information like a better user experience or more customized interface, but there are negative consequences of this data as well.</p>    
        <hr>
        <div class="row mx-2">
            <h4>The Greeting in the Nav Bar </h4>
            <p>The navigation bar is a user experience idea I like to build into every project.  The first half is Javascript code behind the scenes that will poll your browser for the local time and then dynamically set the greeting to good morning / good afternoon / good night / etc depending on the time.  The second half will say "Guest" by default, or can be customize via one input box and a submit button.  This data is not stored on Netlify servers and Rocket Downrange cannot read or access data.  It is stored in your browser (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge, etc.) on your device through what's called local storage.  You may rest assured this is completely unique to your device and cannot be accessed or changed by anyone but you.  </p>
        </div>
        <br>
        <div class="row mx-2">
            <h4>The Form on the Index (Home) Page</h4>
            <p>This form is designed to provide better user experience for you, and better learning experience for me.  All submissions are filtered through 3 different layers of security / bot detection to verify I am not getting fake data. If you use the form, you recognize I reserve the right to use/ignore the information in any capacity that makes Rocket Downrange better.  </p>
        </div>
        <br>
        <div class="row mx-2">
            <h4>Google Analytics & Google AdSense </h4>
            <p>This site uses Google Analytics to better understand how our users engage with the site.  This aggregated information does not include individual names or personal data, so it does not personally identify you or any other user. All data is anonymized by default and only reveals general specifications like device type (computer, mobile, tablet), location data (city, state, country), language (English, Chinese, Russian), etc. This allows Rocket Downrange to better understand who is using our site, how they are using it and what issues they may be having.  It also allows us to see how our site grows over time which is the goal :)</p>
            <p>Operating a website is not free! However, I do not want to cheapen the experience through hundreds of ads. Google AdSense has been added to the site in limited amounts to offset this, or if you would like to directly support the site, <a href="https://cavlemasters.com/contact" target="_blank" rel="noopener" id="link">you can send me a message</a> for my PayPal link. All tips are appreciated however they are not necessary and non-refundable.</p>
        </div>
        <br>
        <div class="row mx-2">
            <h4>Information Shared With Others</h4>
            <p>Short answer, none! If you fill out a form, tip the site or leave a comment on Github - that information stays with Rocket Downrange.  It will not be shared with anyone or any organization unless required to by law.  We don't like sketchy marketers either! </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src


export default {
  name: "PrivacyPolicy",
  components: {},
  metaInfo: {
    title: "Rocket Downrange | Privacy Policy",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Rocket Downrange is a fan-made site that utilizes different free API's to inform and inspire others of missions concerning the advancement of human space travel. Featuring data from NASA, SpaceX, Rocket Lab, and Mars via Opportunity, Curiousity, Insight, and hopefully Perserverance! Built with Vue.JS, Netlify and more! ",
      },
      {
        name: "keywords",
        content:
          "NASA, SpaceX, Rocket Labs, Next Launch, Rocket, Downrange, Latest Launch, Opportunity, Curiousity, Insight, Perserverance, Rovers, Mars, APOD, Privacy, Policy",
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
          "Rocket Downrange is a fan-made site that utilizes different free API's to inform and inspire others of missions concerning the advancement of human space travel. Featuring data from NASA, SpaceX, Rocket Lab, and Mars via Opportunity, Curiousity, Insight, and hopefully Perserverance! Built with Vue.JS, Netlify and more! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com",
      },
      { name: "twitter:title", content: "Rocket Downrange | Privacy Policy" },
      {
        name: "twitter:description",
        content:
          "Rocket Downrange is a fan-made site that utilizes different free API's to inform and inspire others of missions concerning the advancement of human space travel. Featuring data from NASA, SpaceX, Rocket Lab, and Mars via Opportunity, Curiousity, Insight, and hopefully Perserverance! Built with Vue.JS, Netlify and more!  ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Privacy Policy" },
      {
        itemprop: "description",
        content:
          "Rocket Downrange is a fan-made site that utilizes different free API's to inform and inspire others of missions concerning the advancement of human space travel. Featuring data from NASA, SpaceX, Rocket Lab, and Mars via Opportunity, Curiousity, Insight, and hopefully Perserverance! Built with Vue.JS, Netlify and more! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  }
};
</script>

<style scoped>
#link{
    font-weight: bold;
    color: black;
    text-decoration: underline;
}
</style>
