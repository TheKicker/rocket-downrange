<template>
  <div class="Error418 container py-3 my-4">
    <Error 
        CODE="418" 
        MSG="I'm a teapot" 
        IMG="https://rocketdownrange.com/teapot.jpeg" 
        DESC="Launch aborted, the Rocket is missing and all that remains on the launchpad is a Fiesta Tableware Company Teapot.  The HTTP 418 I'm a teapot client error response ( From Developer.Mozilla.org ) code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol defined in April Fools' jokes in 1998 and 2014.  Some websites use this response for requests they do not wish to handle, such as automated queries."/>
    <about />
  </div>
</template>


<script>
// @ is an alias to /src
import about from "@/components/About-template.vue";
import Error from "@/components/Error.vue";

export default {
  name: "ERROR-418",
  components: {
    about,
    Error
  },
  metaInfo: {
    title: "Rocket Downrange | ERROR 418",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "ERROR 418 : I'M A TEAPOT - Launch aborted, the Rocket is missing and all that remains on the launchpad is a Fiesta Tableware Company Teapot. The HTTP 418 I'm a teapot client error response ( From Developer.Mozilla.org ) code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503.",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, Cav, Lemasters, Error, 418, Prank, April Fools, Fun, Hobby, Project, Vue, JS, Javascript",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | ERROR 418" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/error-418",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "ERROR 418 : I'M A TEAPOT - Launch aborted, the Rocket is missing and all that remains on the launchpad is a Fiesta Tableware Company Teapot. The HTTP 418 I'm a teapot client error response ( From Developer.Mozilla.org ) code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503.",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/error-418",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | ERROR 418",
      },
      {
        name: "twitter:description",
        content:
          "ERROR 418 : I'M A TEAPOT - Launch aborted, the Rocket is missing and all that remains on the launchpad is a Fiesta Tableware Company Teapot. The HTTP 418 I'm a teapot client error response ( From Developer.Mozilla.org ) code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503.",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | ERROR 418" },
      {
        itemprop: "description",
        content:
          "ERROR 418 : I'M A TEAPOT - Launch aborted, the Rocket is missing and all that remains on the launchpad is a Fiesta Tableware Company Teapot. The HTTP 418 I'm a teapot client error response ( From Developer.Mozilla.org ) code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503.",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>
