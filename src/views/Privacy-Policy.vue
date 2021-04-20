<template>
  <div class="PrivacyPolicy container my-4">
    <div class="container-fluid text-center my-5">
      <h1>Rocket Downrange Privacy Policy</h1>
      <div class="body my-4 text-left">
        <p>At Rocket Downrange, your privacy is our top priority.  As marketing, technology & space nerds, we are strongly aware of big tech and similar organizations collection efforts when it comes to your personal data when you use their site. There are benefits to this information like a better experience or more customized interface, but there can be dangers too - and we must be mindful of just how much data is offered and given away. We believe it is a fundamental human right that you know by who and how your data is processed. Below, you will find a general overview of what data Rocket Downrange has access to and how we use it. </p>    
        <hr class="my-4">
        <div class="row mx-2">
            <h4>The Greeting in the Nav Bar </h4>
            <p>The personalized greeting is a user experience idea that we like to build into major projects.  The first half is simple Javascript code behind the scenes that will poll your browser for the local time and then dynamically set the greeting to good morning / good afternoon / good night depending on your local time.  The second half will say "Guest" by default, or can be customized using the input box and submit button.  This data is not stored on any servers and Rocket Downrange cannot read or access this data in any form.  It is stored in your browser (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge) on your device through what's called <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" class="link" target="_blank" rel="noopener">local storage.</a>  This is completely unique to your device and cannot be accessed or changed by anyone but you.   </p>
        </div>
        <br>
        <div class="row mx-2">
            <h4>The Form on the Index (Home) Page</h4>
            <p>This form is designed to provide better user experience for you, and better learning experience for us.  Aside from a few college courses, Rocket Downrange is made by a self-taught computer programmer who is still learning - this site is a way to satisfy both passion for space technology & exploration and to learn <a href="https://vuejs.org/" class="link" target="_blank" rel="noopener">Vue.js which is a Javascript framework</a> used to build modern sites.  The only way we know if we are doing a good job (or not) is through your feedback.  Everything is welcome; positive, negative or even suggestions on new features or APIs to include. All submissions are filtered through different layers of security / bot detection to verify we're getting legitimate responses from real people. If you use the form, you recognize that we reserve the right to use the information in any capacity towards the mission of the site.  WE WILL NOT share your name, email address or message with anyone except when required by law.   </p>
        </div>
        <br>
        <div class="row mx-2">
            <h4>Google Analytics & Google AdSense </h4>
            <p>This site uses Google Analytics to better understand how our users engage with the site.  This aggregated information does not include individual names or personal data, so it does not personally identify you or any other user. All data is anonymized by default and only reveals general specifications like device type (computer, mobile, tablet), location data (nearest city, state, country), language (English, Chinese, Russian), etc. This allows Rocket Downrange to better understand who is using our site, how they are using it and what issues they may be having.  It also allows us to see how our site progresses over time, what features people love and which ones don't perform as expected - we want to see the site grow :)</p>
            <p>Operating a website is not free! However, the goal is not to cheapen the experience through hundreds of ads. Google AdSense has been added to the site in limited amounts to offset this, or if you would like to directly support the site, <a href="https://cavlemasters.com/contact" target="_blank" rel="noopener" class="link">you can send a message</a> for a PayPal link. All tips are greatly appreciated however they are not necessary and non-refundable.</p>
            <p>If you would like to opt out of Google Analytics tracking, you may do so at <a href="https://tools.google.com/dlpage/gaoptout/" target="_blank" rel="noopener" class="link">this link.</a>  Members of the EU and other nations note that by using Rocket Downrange, you accept that your data is read/used/updated by these companies to enable Rocket Downrange to provide better content and site structure. For example, how Google keeps your data anonymized and uses it can be found <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener" class="link">here.</a> </p>
        </div>
        <br>
        <div class="row mx-2 mb-1">
            <h4>Edabit</h4>
            <p>The basis of this website is to continue learning and refining my skills as a junior developer. <a href="https://edabit.com/?ref=cavanlemasters" target="_blank" rel="noopener nofollow" class="link">Edabit</a> is a site comprised of byte-sized (haha lame computer joke) challenges in a variety of languages that you can use to practice the fundamentals.  At the end of 2020, I was invited to be an affiliate, this means that any links you see are sponsored. I would not support them if I did not fully believe in how beneficial they are to learning the basics of programming. </p>
            <div id="desktop" class="mx-auto my-3">
              <a href="https://edabit.com?ref=cavanlemasters" target="_BLANK" rel="noopener"><img src="@/assets/edabit-wide.png" border="0"></a>
            </div>
            <div id="mobile" class="mx-auto my-2">
              <a href="https://edabit.com?ref=cavanlemasters" target="_BLANK" rel="noopener"><img src="@/assets/edabit-short.png" border="0"></a>
            </div>
            <p class="mx-auto">Start your development journey today, and tomorrow you can directly contribute to Rocket Downrange!</p>
        </div>
        <br>
        <div class="row mx-2">
            <h4>Information Shared With Others</h4>
            <p>Short answer, none! If you fill out a form, tip the site or leave a comment on Github - that information stays with Rocket Downrange.  It will not be shared with anyone or any organization unless required so by law.  </p>
        </div>
        <br>
        <div class="row mx-2">
            <h4>Further Questions</h4>
            <p>If you have any other questions, would like to help the site grow or simply want to talk about the final frontier - you can use the contact form on the home page, follow us on Twitter <a href="https://twitter.com/rocketdownrange" class="link" target="_blank" rel="noopener">(<i class="fab fa-twitter"></i> @RocketDownrange )</a>.  We look forward to exploring with you! </p>
        </div>
        <br>
        <div class="spacer"></div>
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
          "At Rocket Downrange, your privacy is our top priority.  As marketing, technology & space nerds, we are strongly aware of big tech and similar organizations collection efforts when it comes to your personal data when you use their site.",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, Rocket Downrange, Privacy, Policy, Big Tech, Google Analytics, Google, Adsense, Vue, Javascript, JS, Twitter, @RocketDownrange",
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
          "At Rocket Downrange, your privacy is our top priority.  As marketing, technology & space nerds, we are strongly aware of big tech and similar organizations collection efforts when it comes to your personal data when you use their site.",
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
          "At Rocket Downrange, your privacy is our top priority.  As marketing, technology & space nerds, we are strongly aware of big tech and similar organizations collection efforts when it comes to your personal data when you use their site.",
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
          "At Rocket Downrange, your privacy is our top priority.  As marketing, technology & space nerds, we are strongly aware of big tech and similar organizations collection efforts when it comes to your personal data when you use their site.",
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
.body{
  font-size: 15px;
}
.link{
    font-weight: bold;
    color: black;
    text-decoration: underline;
}
.spacer{height: 10vh;}

#desktop{
  display: initial;
}
#mobile{
  display: none;
}
@media only screen and (max-width: 720px) {
  #desktop{ display: none;}
  #mobile{ display: initial;}
}

</style>
