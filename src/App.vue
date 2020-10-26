<template>
  <div id="app">
    <section id="vote">
      <marquee id="marquee" behavior="scroll" direction="left" scrollamount="5">
        <h6 class="text-white">
          <i class="fas fa-flag-usa"></i> &nbsp; Election Day is coming, check
          your eligibility or register at vote.org &nbsp;
          <i class="fas fa-flag-usa"></i> &nbsp; Let's keep 45 in office!
          <a
            href="https://www.donaldjtrump.com/"
            target="_blank"
            rel="noopener"
            class="btn vote-btn vote-link"
            >Visit DonaldJTrump.com</a
          >
        </h6>
      </marquee>
    </section>

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
          <ul class="navbar-nav mr-auto text-left">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Explore</a
              >
              <div
                class="dropdown-menu bg-primary"
                aria-labelledby="navbarDropdown"
              >
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/solar-system"
                    >SOLAR SYSTEM</router-link
                  >
                </li>
                <!-- <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/calculator">CALCULATORS</router-link>
                </li>-->
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Companies</a
              >
              <div
                class="dropdown-menu bg-primary"
                aria-labelledby="navbarDropdown"
              >
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/spacex"
                    >SPACEX</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/rocket-lab"
                    >ROCKET LAB</router-link
                  >
                </li>
                <!-- <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/boeing-aerospace"
                    >BOEING</router-link
                  >
                </li> -->
                <li class="nav-item">
                  <router-link
                    class="nav-link ml-1"
                    to="/united-launch-alliance"
                    >ULA</router-link
                  >
                </li>
              </div>
            </li>
          </ul>
          <div class="mx-auto text-center">
            <button
              type="button"
              class="btn btn-primary display-block"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <h6 class="nav-item my-2 my-lg-0 text-white text-center">
                {{ getGreeting }}, {{ username }}
                <i class="fa fa-user-circle"></i>
              </h6>
            </button>
          </div>
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
            <h5 class="modal-title" id="exampleModalLabel">
              <i class="fa fa-user"></i> &nbsp; Change username
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <label class="col-form-label" for="inputDefault"
                >Let's be friends, what should I call you?</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Buzz Lightyear"
                id="inputDefault"
                v-model="username"
              />
            </div>
            <p></p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              @click="validate()"
              class="btn btn-primary"
              data-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <router-view />
    </div>

    <div id="footer" class="navbar navbar-dark bg-primary py-4">
      <div class="cntainer text-center mx-auto py-4">
        <div id="footercopy">
          <p class="text-white">
            <a
              class="text-white underline"
              href="https://cavlemasters.com"
              target="_blank"
              rel="noopener"
              >{{ copy }} &copy;</a
            >
            <br />API & all mission data belongs to the corresponding company.
          </p>
          <a
            class="text-white underline"
            href="https://cavlemasters.com"
            target="_blank"
            rel="noopener"
            style="font-family: 'Share Tech Mono', monospace; text-transform: lowercase;"
            >{{ trademark }}</a
          >
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
    if (window.localStorage.username) {
      this.username = window.localStorage.username;
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
    validate() {
      // Regex validation
      var regName = /^[a-z ,.'-]+$/i;
      // Eventually need to add a way to revert to previous given name.
      if (!regName.test(this.username)) {
        alert("Please enter a proper name.");
        return (this.username = "Guest");
      } else {
        console.log("Valid name given, saved. ");
        window.localStorage.setItem("username", `${this.username}`);
        return this.username;
      }
    }
  }
};
</script>

<style>
.ml-1 {
  margin-left: 5px;
}
.ml-2 {
  margin-left: 10px;
}
.ml-3 {
  margin-left: 15px;
}
.width-limit {
  max-width: 1632px;
  margin: auto;
}

#vote {
  background: black;
  color: white;
  height: 3.5rem;
}
#marquee {
  padding: 0.75rem 0rem;
}

.vote-btn {
  border-color: white;
  border-radius: 5px;
  padding: 2px 8px;
  border-width: 2px;
  color: white;
}
.vote-btn:hover {
  background: white;
  color: black;
}
</style>
