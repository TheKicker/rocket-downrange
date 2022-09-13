<template>
  <div class="my-4 mx-auto container">
    <h1>Perseverance Rover</h1>
    <hr />
    <div class="d-flex">
      <div class="col-md-4">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque expedita quo delectus magnam inventore soluta numquam rem aut similique deserunt ipsam hic ut distinctio maxime doloremque exercitationem odio officiis fuga voluptate, id a at deleniti nulla. Laboriosam mollitia facilis sit quae, quas ut fugit soluta sunt expedita magni. Officia, similique corporis voluptatum totam ullam atque quas eligendi facilis nesciunt ducimus sunt facere quasi enim, quis, ad expedita eveniet alias non neque doloribus. Laboriosam necessitatibus nisi molestiae illo accusamus enim, recusandae, alias similique harum consequatur quibusdam nemo quod voluptates suscipit possimus atque iusto. Atque et autem aliquam iusto molestiae facilis aspernatur?</p>
      </div>
      <iframe src="https://mars.nasa.gov/gltf_embed/25042" width="100%" height="450px" frameborder="0" />
    </div>
    <Error404 />
  </div>
</template>


<script>
// @ is an alias to /src
import Error404 from "@/components/Error.vue";

export default {
  name: "About",
  components: {
    Error404
  }
};
</script>
<style scoped>

</style>
