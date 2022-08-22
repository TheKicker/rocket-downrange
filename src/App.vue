<template>
  <div id="app">
    <div id="marqueecontainer">
      <p id="marquee"> LOVE ROCKET DOWNRANGE? SUPPORT THE PROJECT AND <a class="marquee-btn" href="https://www.buymeacoffee.com/cavlemasters" target="_blank" rel="noopener"><i class="fas fa-coffee"></i>&nbsp;BUY ME A COFFEE</a></p>
    </div>
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
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Explore</a>
              <div class="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/apod"><i class="fas fa-regular fa-camera"></i> APOD</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/astronaut"><i class="fas fa-user-astronaut"></i> ASTRONAUT</router-link>
                </li>  
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/locations"><i class="fas fa-map-pin"></i> LOCATIONS</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/solar-system"><i class="fas fa-globe-americas"></i> OUR SYSTEM</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/vehicles"><i class="fas fa-space-shuttle"></i> VEHICLES</router-link>
                </li>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Companies</a>
              <div class="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                <li class="nav-item">
                    <router-link class="nav-link ml-1" to="/astrobotic">ASTROBOTIC</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link ml-1" to="/astra">ASTRA</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link ml-1" to="/blue-origin">BLUE ORIGIN</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/firefly-aerospace">FIREFLY</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/rocket-lab">ROCKET LAB</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/sierra-space">SIERRA SPACE</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/spacex">SPACEX</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/united-launch-alliance">ULA</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link ml-1" to="/virgin-galactic">VIRGIN</router-link>
                </li>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">External Links</a>
              <div class="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                
                <li class="nav-item">
                  <a href="https://github.com/TheKicker/rocket-downrange" target="_blank" rel="noopener" class="nav-link ml-1"><i class="fas fa-code"></i> GITHUB</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.buymeacoffee.com/cavlemasters" target="_blank" rel="noopener" class="nav-link ml-1"><i class="fas fa-coffee"></i> SUPPORT</a>
                </li>
                <li class="nav-item">
                  <a href="https://twitter.com/RocketDownrange" target="_blank" rel="noopener" class="nav-link ml-1"><i class="fab fa-twitter"></i> TWITTER</a>
                </li>
                <li class="nav-item">
                  <a href="https://lunco.space" target="_blank" rel="noopener" class="nav-link ml-1"><i class="fas fa-gamepad"></i> LUNCO</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.ivoyager.dev/" target="_blank" rel="noopener" class="nav-link ml-1"><i class="fas fa-sun"></i> I, VOYAGER</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.moonwards.com/gameplay/" target="_blank" rel="noopener" class="nav-link ml-1"><i class="fas fa-trophy"></i> MOONWARD</a>
                </li>
                <li class="nav-item">
                  <a href="https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html" target="_blank" rel="noopener" class="nav-link ml-1"><i class="fas fa-globe-americas"></i> PIXEL SPACE</a>
                </li>
              </div>
            </li>
          </ul>
          <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#userModal">
              <h6 class="my-2 my-lg-0 text-white">
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
      id="userModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="userModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="userModalLabel">
              <i class="fa fa-user"></i> &nbsp; Change username
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <label class="col-form-label" for="inputDefault">Let's be friends, what should I call you?</label>
              <input type="text" class="form-control" placeholder="Buzz Lightyear" id="inputDefault" v-model="username"/>
            </div>       
          </div>
          <div class="modal-footer">
              <div class="m-footer">
                <router-link to="/privacy-policy">
                  <button type="button" class="btn btn-outline-info" data-dismiss="modal">Privacy Policy</button>
                </router-link>
                <button type="button" @click="validate()" class="btn btn-outline-success" data-dismiss="modal">Save changes</button>
                <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close lightbox</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <router-view />
    </div>

    <div id="footer" class="navbar navbar-dark bg-primary py-4 text-center">
      <div class="mx-auto my-4 container" id="footer-container">
        <div class="text-light navbar-text">
          <h4><router-link to="/" class="text-light">Rocket Downrange</router-link></h4>
        </div>
        <div class="text-light navbar-text">
          <p><a href="https://cavlemasters.com" target="_blank" rel="noopener" class="text-light">{{trademark}} &copy; {{copy}}</a></p>
        </div>
        <div class="text-light navbar-text">
          <p><router-link to="/privacy-policy" class="text-light">Privacy Policy</router-link></p>
          <p><router-link to="/accessibility-statement" class="text-light">Accessibility Statement</router-link></p>
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
      copy: `${new Date().getFullYear().toString()}`,
      trademark: "made on earth by a human & coffee",
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
    getGreeting: function () {
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
    },
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
    },
  },
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

.m-footer{
  width: 100%;
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
}

#marqueecontainer {
  background: black;
  height: 2.5rem;
  display: grid;
  place-items: center;
}
#marquee {
  padding: 0.5rem 0rem;
  color: white;
}

#marquee a{
  color: white;
  text-decoration: none;
}

.TRADE{
  color: blue;
  text-decoration: underline;
}

.marquee-btn {
  border-style: solid;
  border-color: white;
  border-radius: 5px;
  padding: 3px 8px;
  border-width: 2px;
  background: black;
  color: white;
}
.marquee-btn:hover {
  background-color: white;
  color: black !important;
}

#footer-container{
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.ticker{
  font-weight: bolder;
}

.nav-link{
  font-size: 12px;
}

@media only screen and (max-width: 999px) {
  #marqueecontainer{
    display: none;
  }
  
  #footer-container{
    width: 100%;
    flex-direction: column;
  }
  .nav-link{
    font-size: 14px;
  }
}

</style>