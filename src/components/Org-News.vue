<template>
  <article class="org-news card shadow-sm border-0 my-4">

    <!-- HEADER -->
    <header class="card-header bg-white border-0 pb-0">
      <p class="text-uppercase text-muted small mb-1">
        {{ company }} • {{ year }}
      </p>
      <h2 class="h4 fw-bold mb-0">
        {{ title }}
      </h2>
    </header>

    <!-- BODY -->
    <div class="card-body">
      <div class="row align-items-center justify-content-center">

        <!-- MEDIA -->
        <div class="col-12 col-md-10 col-lg-7 mb-3 mb-lg-0">
          <div class="media-wrapper">

            <!-- IMAGE -->
            <template v-if="srcType === 'image'">
              <v-lazy-image
                class="media img-fluid"
                :src="image || source"
                :alt="title"
              />
            </template>

            <!-- VIDEO -->
            <template v-else-if="srcType === 'video'">
              <div class="video-container">
                <iframe
                  class="video-frame"
                  :src="embedUrl"
                  allowfullscreen
                  :title="title"
                ></iframe>
              </div>
            </template>

          </div>
        </div>

        <!-- CONTENT -->
        <div class="col-12 col-md-10 col-lg-5">
          <div class="content">

            <p v-if="description1" class="mb-2">
              {{ description1 }}
            </p>

            <p v-if="description2" class="text-muted">
              {{ description2 }}
            </p>

            <!-- 🔥 BUTTONS (FIXED SPACING) -->
            <div class="button-group mt-3">
              <a
                v-if="link1url"
                :href="link1url"
                target="_blank"
                class="btn btn-sm btn-primary btn-space"
              >
                {{ link1txt }}
              </a>

              <a
                v-if="link2url"
                :href="link2url"
                target="_blank"
                class="btn btn-sm btn-outline-primary btn-space"
              >
                {{ link2txt }}
              </a>

              <a
                v-if="link3url"
                :href="link3url"
                target="_blank"
                class="btn btn-sm btn-outline-secondary btn-space"
              >
                {{ link3txt }}
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- FOOTER -->
    <footer class="card-footer bg-white border-0 text-muted small text-center">
      Updated: {{ update }}
    </footer>

  </article>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: "OrgNews",
  components: { VLazyImage },

  props: {
    company: String,
    year: String,
    title: String,
    srcType: String,
    source: String,
    image: String,
    description1: String,
    description2: String,
    update: String,
    link1url: String,
    link1txt: String,
    link2url: String,
    link2txt: String,
    link3url: String,
    link3txt: String
  },

  computed: {
    embedUrl() {
      if (!this.source) return "";

      if (this.source.includes("watch?v=")) {
        return this.source.replace("watch?v=", "embed/");
      }

      return this.source;
    }
  }
};
</script>

<style scoped>
.org-news {
  border-radius: 16px;
  overflow: hidden;
}

/* MEDIA */
.media-wrapper {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
}

.media {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.25s ease;
}

.media:hover {
  transform: scale(1.02);
}

/* VIDEO */
.video-container {
  position: relative;
  width: 100%;
  padding-top: 62%;
  border-radius: 12px;
  overflow: hidden;
}

.video-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* TEXT */
.content p {
  line-height: 1.6;
}

/* 🔥 BUTTON FIX */
.button-group {
  display: flex;
  flex-wrap: wrap;
}

.btn-space {
  margin-right: 10px;
  margin-bottom: 10px;
}

/* MOBILE */
@media (max-width: 576px) {
  .card-body {
    padding: 1rem;
  }
}

/* TABLET */
@media (min-width: 768px) {
  .org-news .row {
    max-width: 95%;
    margin: 0 auto;
  }
}

/* DESKTOP */
@media (min-width: 1200px) {
  .org-news .row {
    max-width: 1200px;
    margin: 0 auto;
  }

  .video-container {
    padding-top: 60%;
  }
}
</style>