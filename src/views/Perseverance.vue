<template>
    <div class="container mx-auto mb-5">
      <div class="col-md-12 mx-auto">
        <div class="bg-white overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">
            <div class="media align-items-end profile-head">
              <div class="profile mr-3">
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" class="rounded mb-2 img-thumbnail">
                <a href="#" class="btn btn-outline-dark btn-sm btn-block">Edit profile</a>
              </div>
              <div class="media-body mb-5 text-white">
                  <h1 class="text-light mt-0 mb-0">Perseverance</h1>
                  <p class="mb-4"><i class="fas fa-map-marker-alt mr-2"></i> Jezero Crater, Mars</p>
                </div>
              </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <h3 class="font-weight-bold mb-0 d-block">ACTIVE</h3>
                  <small class="text-muted">
                    Status
                  </small>
                </li>
                <li class="list-inline-item">
                  <h3 class="font-weight-bold mb-0 d-block">215</h3>
                  <small class="text-muted">
                    <i class="fas fa-image mr-1"></i>Photos
                  </small>
                </li>
                <li class="list-inline-item">
                  <h3 class="font-weight-bold mb-0 d-block">215</h3>
                  <small class="text-muted">
                    <i class="fas fa-image mr-1"></i>Photos
                  </small>
                </li>
              </ul>
            </div>
          <div class="px-4 py-3">
            <h2 class="mb-3">About</h2>
            <div class="d-flex col-md-12">
              <iframe src="https://mars.nasa.gov/gltf_embed/25042" width="100%" height="450px" frameborder="0" />
              <div class="col-md-6 p-4 rounded shadow-sm bg-light">
                <p class="font-italic mb-0">Web Developer</p>
                <p class="font-italic mb-0">Lives in New York</p>
                <p class="font-italic mb-0">Photographer</p>
              </div>
            </div>
          </div>
          <div class="py-4 px-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h2 class="mb-3">Recent photos</h2>
              <a href="#" class="btn btn-link text-muted">Show all</a>
            </div>
            <div class="row">
              <div class="col-lg-6 mb-2 pr-lg-1">
                <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm">
              </div>
              <div class="col-lg-6 mb-2 pr-lg-1">
                <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm">
              </div>
              <div class="col-lg-6 mb-2 pr-lg-1">
                <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm">
              </div>
              <div class="col-lg-6 mb-2 pr-lg-1">
                <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm">
              </div>
              <div class="col-lg-6 mb-2 pr-lg-1">
                <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm">
              </div>
            </div>
          </div>
        </div>
      </div>
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
.profile-head {
    transform: translateY(5rem)
}
.list-inline-item{
  margin: 0 1rem;
}
.cover {
    background-image: url("https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

body {
    background: #654ea3;
    background: linear-gradient(to right, #e96443, #904e95);
    min-height: 100vh;
    overflow-x:hidden;
}
</style>
