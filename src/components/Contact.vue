<template>
  <div>
    <div class="my-4 width-limit">
      <div class="position-relative overflow-hidden text-center bg-primary text-white">
        <div class="col-md-6 p-lg-5 mx-auto my-5">
          <h2 class="font-weight-normal text-white">Contact Rocket Downrange</h2>
          <hr color="white" />
          <p
            class="lead font-weight-normal"
          >If you love the site or think something needs changed - we want to know! Questions, comments, suggestions and more can be sent below. If you know of any free and interesting API's we should include in the site - include information about where to find necessary documentation and we'll get to it!</p>
          <br />
          <div class="my-4">
            <!--Form with header-->
            <form
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
              netlify-honeypot="bot-field"
              netlify
            >
              <div class="card border-primary rounded-0">
                <div class="card-header p-0">
                  <div class="bg-secondary text-white text-center py-2">
                    <p class="m-0"></p>
                  </div>
                </div>
                <div class="card-body p-3">
                  <!--Body-->
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-user text-primary"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        placeholder="First and Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-envelope text-primary"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-comment text-primary"></i>
                        </div>
                      </div>
                      <textarea
                        class="form-control"
                        placeholder="Write your message here!"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <p class="ohnohoney">
                    <label>
                      Are you happy:
                      <input name="bot-field" />
                    </label>
                  </p>

                  <div class="text-center">
                    <button type="submit" class="btn btn-block btn-outline-primary italic">Submit</button>
                  </div>
                </div>
              </div>
            </form>
            <!--Form with header-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      code: "See the Code"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.width-limit {
  max-width: 1632px;
  margin: auto;
}
.ohnohoney {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
}
</style>
