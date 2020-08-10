<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link class="navbar-brand" to="/">{{ org }}</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/spacex">SpaceX</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/rocket-lab">Rocket Lab</router-link>
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/TheKicker/rocket-downrange"
                target="_blank"
                class="nav-link"
                to="/rocket-lab"
              >Github</a>
            </li>
          </ul>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <h6 class="nav-item my-2 my-lg-0 text-white text-center">{{ getGreeting }}, {{username}}</h6>
          </button>
        </div>
      </div>
    </nav>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Change username</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <label class="col-form-label" for="inputDefault">Enter a new name:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Buzz Lightyear"
                id="inputDefault"
                v-model="username"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              type="button"
              @click="validate()"
              class="btn btn-primary"
              data-dismiss="modal"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <router-view />
    </div>

    <div id="footer" class="navbar navbar-dark bg-primary">
      <div class="container text-white my-4">
        <div>
          <p>
            <a
              class="text-white underline"
              href="https://cavlemasters.com"
              target="_blank"
              rel="noopener"
            >{{copy}} &copy;</a>
            <br />API & all mission data belongs to the corresponding company.
          </p>
          <a
            class="text-white underline"
            href="https://cavlemasters.com"
            target="blank"
            rel="noopener"
            style="font-family: 'Share Tech Mono', monospace; text-transform: lowercase;"
          >{{trademark}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      org: "Rocket Downrange",
      greeting: "",
      copy: `Rocket Downrange developed by Cav Lemasters ${new Date()
        .getFullYear()
        .toString()}`,
      trademark: "made on earth by a human & coffee"
    };
  },
  mounted() {
    if (localStorage.username) {
      this.username = localStorage.username;
    } else {
      this.username = "Guest";
    }
  },
  computed: {
    getGreeting: function() {
      let h = new Date().getHours();

      if (h >= 1 && h <= 6) {
        return "Whoa it's early";
      } else if (h < 12) {
        return "Good Morning";
      } else if (h <= 18) {
        return "Good Afternoon";
      } else if (h <= 23) {
        return "Good Evening";
      } else {
        return "We're up late";
      }
    }
  },
  methods: {
    persist() {
      localStorage.username = this.username;
    },
    validate() {
      // Regex validation
      var regName = /^[a-z ,.'-]+$/i;
      // Eventually need to add a way to revert to previous given name.
      if (!regName.test(this.username)) {
        alert("Please enter a proper name.");
        return (this.username = "Guest");
      } else {
        console.log("Valid name given, saved. ");
        persist();
        return this.username;
      }
    }
  }
};
</script>

<style>
</style>