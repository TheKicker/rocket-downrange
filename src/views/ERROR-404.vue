<template>
  <div class="Error404 container py-3 my-4">
    <Error 
        CODE="404" 
        MSG="Page not found" 
        IMG="https://rocketdownrange.com/craiyon-404.png" 
        DESC="This page could not be found.  If you think you had a valid URL, please try typing it in again.  If you have done so, and still see this message - you may have the wrong URL or will need to send me a message through the contact form on the home page to rectify the situation.  Please be as detailed as possible, with the URL and where you found it (social media, article, etc.)"/>
    <about />
  </div>
</template>


<script>
// @ is an alias to /src
import about from "@/components/About-template.vue";
import Error from "@/components/Error.vue";

export default {
  name: "About",
  components: {
    about,
    Error
  }
};
</script>
