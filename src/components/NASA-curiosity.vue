<template>
  <div class="Curiosity my-4 mx-lg-4 mx-md-0">
    <div class="card">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h2 class="h5 text-uppercase text-left text-secondary">
          Mars Curiosity Rover Picture of the Day:
        </h2>
        <hr />
        <div class="row">
          <div class="mx-auto">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              
              <div class="carousel-inner">
                <!-- START OF CAROUSEL -->

                <div class="carousel-item active">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[0].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[0].img_src"
                    :alt='"Image from " + Object.values(results.photos)[0].rover.name + " on Mars, taken via " + Object.values(results.photos)[0].camera.full_name + " on " + new Date(Object.values(results.photos)[0].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[0].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[0].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[0].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[0].camera.full_name }}
                      ({{ Object.values(results.photos)[0].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[0].rover.name }} rover.
                      {{ Object.values(results.photos)[0].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[0].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[0].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[0].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- Carousel Item -->
                <div class="carousel-item">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[1].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[1].img_src"
                    :alt='"Image from " + Object.values(results.photos)[1].rover.name + " on Mars, taken via " + Object.values(results.photos)[1].camera.full_name + " on " + new Date(Object.values(results.photos)[1].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[1].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[1].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[1].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[1].camera.full_name }}
                      ({{ Object.values(results.photos)[1].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[1].rover.name }} rover.
                      {{ Object.values(results.photos)[1].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[1].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[1].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[1].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- Carousel Item -->
                <div class="carousel-item">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[2].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[2].img_src"
                    :alt='"Image from " + Object.values(results.photos)[2].rover.name + " on Mars, taken via " + Object.values(results.photos)[2].camera.full_name + " on " + new Date(Object.values(results.photos)[2].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[2].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[2].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[2].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[2].camera.full_name }}
                      ({{ Object.values(results.photos)[2].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[2].rover.name }} rover.
                      {{ Object.values(results.photos)[2].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[2].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[2].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[2].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- Carousel Item -->
                <div class="carousel-item">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[3].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[3].img_src"
                    :alt='"Image from " + Object.values(results.photos)[3].rover.name + " on Mars, taken via " + Object.values(results.photos)[3].camera.full_name + " on " + new Date(Object.values(results.photos)[3].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[3].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[3].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[3].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[3].camera.full_name }}
                      ({{ Object.values(results.photos)[3].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[3].rover.name }} rover.
                      {{ Object.values(results.photos)[3].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[3].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[3].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[3].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- Carousel Item -->
                <div class="carousel-item">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[4].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[4].img_src"
                    :alt='"Image from " + Object.values(results.photos)[4].rover.name + " on Mars, taken via " + Object.values(results.photos)[4].camera.full_name + " on " + new Date(Object.values(results.photos)[4].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[4].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[4].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[4].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[4].camera.full_name }}
                      ({{ Object.values(results.photos)[4].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[4].rover.name }} rover.
                      {{ Object.values(results.photos)[4].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[4].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[4].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[4].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- Carousel Item -->
                <div class="carousel-item">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[5].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[5].img_src"
                    :alt='"Image from " + Object.values(results.photos)[5].rover.name + " on Mars, taken via " + Object.values(results.photos)[5].camera.full_name + " on " + new Date(Object.values(results.photos)[5].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[5].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[5].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[5].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[5].camera.full_name }}
                      ({{ Object.values(results.photos)[5].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[5].rover.name }} rover.
                      {{ Object.values(results.photos)[5].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[5].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[5].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[5].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- Carousel Item -->
                <div class="carousel-item">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[6].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[6].img_src"
                    :alt='"Image from " + Object.values(results.photos)[6].rover.name + " on Mars, taken via " + Object.values(results.photos)[6].camera.full_name + " on " + new Date(Object.values(results.photos)[6].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[6].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[6].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[6].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[6].camera.full_name }}
                      ({{ Object.values(results.photos)[6].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[6].rover.name }} rover.
                      {{ Object.values(results.photos)[6].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[6].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[6].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[6].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- Carousel Item -->
                <div class="carousel-item">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[7].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[7].img_src"
                    :alt='"Image from " + Object.values(results.photos)[7].rover.name + " on Mars, taken via " + Object.values(results.photos)[7].camera.full_name + " on " + new Date(Object.values(results.photos)[7].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[7].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[7].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[7].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[7].camera.full_name }}
                      ({{ Object.values(results.photos)[7].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[7].rover.name }} rover.
                      {{ Object.values(results.photos)[7].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[7].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[7].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[7].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- Carousel Item -->
                <div class="carousel-item">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[8].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[8].img_src"
                    :alt='"Image from " + Object.values(results.photos)[8].rover.name + " on Mars, taken via " + Object.values(results.photos)[8].camera.full_name + " on " + new Date(Object.values(results.photos)[8].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[8].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[8].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[8].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[8].camera.full_name }}
                      ({{ Object.values(results.photos)[8].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[8].rover.name }} rover.
                      {{ Object.values(results.photos)[8].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[8].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[8].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[8].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- Carousel Item -->
                <div class="carousel-item">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[9].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[9].img_src"
                    :alt='"Image from " + Object.values(results.photos)[9].rover.name + " on Mars, taken via " + Object.values(results.photos)[9].camera.full_name + " on " + new Date(Object.values(results.photos)[9].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[9].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[9].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[9].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[9].camera.full_name }}
                      ({{ Object.values(results.photos)[9].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[9].rover.name }} rover.
                      {{ Object.values(results.photos)[9].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[9].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[9].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[9].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- Carousel Item -->
                <div class="carousel-item">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[10].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[10].img_src"
                    :alt='"Image from " + Object.values(results.photos)[10].rover.name + " on Mars, taken via " + Object.values(results.photos)[10].camera.full_name + " on " + new Date(Object.values(results.photos)[10].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[10].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[10].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[10].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[10].camera.full_name }}
                      ({{ Object.values(results.photos)[10].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[10].rover.name }} rover.
                      {{ Object.values(results.photos)[10].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[10].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[10].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[10].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- Carousel Item -->
                <div class="carousel-item">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[11].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[11].img_src"
                    :alt='"Image from " + Object.values(results.photos)[11].rover.name + " on Mars, taken via " + Object.values(results.photos)[11].camera.full_name + " on " + new Date(Object.values(results.photos)[11].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[11].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[11].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[11].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[11].camera.full_name }}
                      ({{ Object.values(results.photos)[11].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[11].rover.name }} rover.
                      {{ Object.values(results.photos)[11].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[11].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[11].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[11].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- Carousel Item -->
                <div class="carousel-item">
                  <h3 class="text-center my-4">
                    Photo ID#{{ Object.values(results.photos)[12].id }}
                  </h3>
                  <img
                    class="img-fluid d-block w-100"
                    :src="Object.values(results.photos)[12].img_src"
                    :alt='"Image from " + Object.values(results.photos)[12].rover.name + " on Mars, taken via " + Object.values(results.photos)[12].camera.full_name + " on " + new Date(Object.values(results.photos)[12].earth_date).toDateString()'
                    id="images"
                  />
                  <div class="my-4">
                    <div class="mx-auto my-2">
                      <strong>
                        <a
                          :href="Object.values(results.photos)[12].img_src"
                          target="_blank"
                          rel="noopener"
                          class="btn btn-block btn-outline-primary text-secondary italic"
                          >HD Link from NASA.gov</a
                        >
                      </strong>
                    </div>
                    <p class="my-2 text-primary">
                      These pictures were taken on Earth date:
                      {{
                        new Date(
                          Object.values(results.photos)[12].earth_date
                        ).toDateString()
                      }}, or Sol {{ Object.values(results.photos)[12].sol }} on
                      Mars. Captured with the
                      {{ Object.values(results.photos)[12].camera.full_name }}
                      ({{ Object.values(results.photos)[12].camera.name }})
                      aboard the
                      {{ Object.values(results.photos)[12].rover.name }} rover.
                      {{ Object.values(results.photos)[12].rover.name }} was
                      launched from Earth on
                      {{
                        new Date(
                          Object.values(results.photos)[12].rover.launch_date
                        ).toDateString()
                      }}
                      and has been on Mars since
                      {{
                        new Date(
                          Object.values(results.photos)[12].rover.landing_date
                        ).toDateString()
                      }}
                      and remains
                      {{ Object.values(results.photos)[12].rover.status }} to
                      this day. All images and mission data compliments of NASA.
                    </p>
                  </div>
                </div>

                <!-- END OF CAROUSEL -->
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <p>
            Need more Curiosity? You can learn more about the rover on <a href="https://www.nasa.gov/mission_pages/msl/overview/index.html" target="_blank" rel="noopener"> NASA's official site </a> or watch this incredible video on YouTube put together by <a href="https://www.youtube.com/watch?v=8DcPcGpdV3A" target="_blank" rel="noopener">Curiosityandbeyond</a> that features a year in 4K.
          </p>
        </div>
        <div style="display: grid; place-items: center; margin: 2rem;">
          <router-link to="/curiosity" class="btn btn-primary" style="text-decoration: none;">Explore Curiosity</router-link>
        </div>
        <hr />
        <p class="text-center">
          <i
            ><a href="https://api.nasa.gov/" target="_blank" rel="noopener"
              >Data brought to you from Mars by NASA</a
            ></i
          >
        </p>
      </div>
    </div>
  </div>
</template>


<script>
var oneDayAgo = new Date();
oneDayAgo.setDate(oneDayAgo.getDate() - 1);
var oneWeekAgo = new Date();
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
const lastYear = oneWeekAgo.getFullYear();
const lastMonth = oneWeekAgo.getMonth() + 1;
const lastDay = oneWeekAgo.getDate();
var api_key = process.env.VUE_APP_APOD_KEY
window.axios = require("axios");
export default {
  name: "NASAcuriosity",
  data() {
    return {
      results: {}
    };
  },
  mounted() {
    var url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${lastYear}-${lastMonth}-${lastDay}&api_key=${api_key}`;
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));
  },
  computed: {
    secureURL: function() {
      var baseURL = this.results.photos[0].img_src;
      if (baseURL.slice(0, 5) != "https") {
        var secure_url = baseURL.slice(0, 4) + "s" + baseURL.slice(4);
        return secure_url;
      } else {
        return baseURL;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mission-patch {
  height: 18rem;
  margin: auto;
}
p {
  text-size-adjust: 1.1rem;
}
#images {
  min-height: 40vh;
  max-height: 70vh;
  min-width: 20vw;
}
a{
  text-decoration: underline;
  font-weight: bold;
}
</style>
