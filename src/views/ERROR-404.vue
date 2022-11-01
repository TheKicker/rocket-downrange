<template>
  <div class="Error404 container py-3 my-4">
    <Error 
        CODE="404" 
        MSG="Page not found" 
        IMG="https://rocketdownrange.com/astronaut.jpeg" 
        DESC="This page could not be found.  If you think you had a valid URL, please try typing it in again.  If you have done so, and still see this message - you may have the wrong URL or will need to send me a message through the contact form on the home page to rectify the situation.  Please be as detailed as possible, with the URL and where you found it (social media, news article, etc.)"/>
    <about />
  </div>
</template>


<script>
// @ is an alias to /src
import about from "@/components/About-template.vue";
import Error from "@/components/Error.vue";

export default {
  name: "ERROR-404",
  components: {
    about,
    Error
  },
  metaInfo: {
    title: "Rocket Downrange | ERROR 404",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "ERROR 404 : PAGE NOT FOUND - This page could not be found. If you think you had a valid URL, please try typing it in again. If you have done so, and still see this message - you may have the wrong URL or will need to send me a message through the contact form on the home page.",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, Cav, Lemasters, Error, 404, Prank, April Fools, Fun, Hobby, Project, Vue, JS, Javascript",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | ERROR 404" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/error-404",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "ERROR 404 : PAGE NOT FOUND - This page could not be found. If you think you had a valid URL, please try typing it in again. If you have done so, and still see this message - you may have the wrong URL or will need to send me a message through the contact form on the home page."
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/error-404",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | ERROR 404",
      },
      {
        name: "twitter:description",
        content:
          "ERROR 404 : PAGE NOT FOUND - This page could not be found. If you think you had a valid URL, please try typing it in again. If you have done so, and still see this message - you may have the wrong URL or will need to send me a message through the contact form on the home page."
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | ERROR 404" },
      {
        itemprop: "description",
        content:
          "ERROR 404 : PAGE NOT FOUND - This page could not be found. If you think you had a valid URL, please try typing it in again. If you have done so, and still see this message - you may have the wrong URL or will need to send me a message through the contact form on the home page."
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>
