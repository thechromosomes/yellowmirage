<template>
  <div data-spy="scroll" data-target=".navbar" data-offset="50">
    <div id="mobile-menu-overlay"></div>
    <!-- full [page initial loader] -->
    <!-- <full-page-loader v-show="!$store.state.homePageBannerLoaded" /> -->

    <div class="floating-images">
      <FloatingImages />
    </div>

    <div class="page-body-wrapper">
      <section id="home" class="home">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="main-banner">
                <div class="d-sm-flex justify-content-between">
                  <div data-aos="zoom-in-up glob-content-div">
                    <div class="banner-title">
                      <h3 class="font-weight-medium text-white">
                        Once a year...<br />
                        go someplace you've <br />never been before.
                      </h3>
                    </div>
                    <p class="mt-3">
                      This holiday season, make the most of every moment with
                      us. Take pleasure in the perfect escape.

                      <br />
                      We will always be your favorite hotel!
                    </p>
                    <NuxtLink to="/aboutus" class="btn btn-secondary mt-3"
                      >Learn more</NuxtLink
                    >
                  </div>
                  <div class="mt-5 mt-lg-0">
                    <img
                      src="@/static/assets/images/earth.gif"
                      alt="marsmello"
                      class="glob-image"
                      data-aos="zoom-in-up"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="date-picker">
        <div class="section sec-form-search">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="form row">
                  <div class="col-lg-2">
                    <div class="input-icon-wrap">
                      <span class="icon-calendar"></span>
                      <input
                        type="text"
                        v-model="user.startDate"
                        onfocus="(this.type='date')"
                        class="form-control"
                        id="arrival"
                        placeholder="Date Arrival"
                      />
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="input-icon-wrap">
                      <span class="icon-calendar"></span>
                      <input
                        type="text"
                        v-model="user.endDate"
                        onfocus="(this.type='date')"
                        class="form-control"
                        id="departure"
                        placeholder="Date Departure"
                      />
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="input-icon-wrap">
                      <span class="icon-calendar"></span>
                      <input
                        type="text"
                        v-model="user.phone"
                        onfocus="(this.type='number')"
                        class="form-control"
                        id="departure"
                        placeholder="contact number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="input-icon-wrap">
                      <span class="icon-person"></span>
                      <select
                        name=""
                        v-model="user.person"
                        id="number-of-person"
                        class="form-control"
                        placeholder="Number of Person"
                      >
                        <option value="" disabled selected># of Person</option>
                        <option value="2">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5++">5++</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <button
                      class="btn btn-primary btn-block w-100"
                      @click="sendMail('enquiry')"
                    >
                      Submit query<span class=""></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="our-services" id="services">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h5 class="text-dark">We’re offering</h5>
              <h3 class="font-weight-medium text-dark mb-5">
                The best in the world
              </h3>
            </div>
          </div>
          <div class="row" data-aos="fade-up">
            <div class="col-sm-4 text-center text-lg-left">
              <div
                class="services-box"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img
                  src="@/static/assets/images/food.png"
                  alt="integrated-marketing"
                  data-aos="zoom-in"
                  class="w-50"
                />
                <h6 class="text-dark mb-3 mt-4 font-weight-medium">
                  Hygienic food
                </h6>
                <p>
                  preparing and storing food or drink in a way that best reduces
                  the risk of consumers becoming sick from the food-borne
                  disease.
                </p>
              </div>
            </div>
            <div class="col-sm-4 text-center text-lg-left">
              <div
                class="services-box"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img
                  src="@/static/assets/images/mountain.png"
                  alt="design-development"
                  data-aos="zoom-in"
                  class="w-50"
                />
                <h6 class="text-dark mb-3 mt-4 font-weight-medium">
                  The best view
                </h6>
                <p>
                  The most beautiful things are not associated with money; they
                  are memories and moments and the mountain view in the front :)
                </p>
              </div>
            </div>
            <div class="col-sm-4 text-center text-lg-left">
              <div
                class="services-box"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img
                  src="@/static/assets/images/planet-earth.png"
                  alt="digital-strategy"
                  data-aos="zoom-in"
                  class="w-50"
                />
                <h6 class="text-dark mb-3 mt-4 font-weight-medium">
                  Earthy smell
                </h6>
                <p>
                  That earthy smell and the beauty of the place is our pride. We
                  bet you will love it :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="our-process" id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-6" data-aos="fade-up">
              <h5 class="text-dark">Our work process</h5>
              <h3 class="font-weight-medium text-dark">
                Discover nature With Us!
              </h3>
              <h5 class="text-dark mb-3">
                Imagination will take us everywhere
              </h5>
              <p class="font-weight-medium mb-4">
                Drop us a mail or simply make a call <br />
                and we will be happy to help you.
              </p>
              <div class="d-flex justify-content-start mb-3">
                <img
                  src="@/static/assets/images/tick.png"
                  alt="tick"
                  class="mr-3 tick-icon"
                />
                <p class="mb-0">
                  Book your entry via call, email or your favorite booking site.
                </p>
              </div>
              <div class="d-flex justify-content-start mb-3">
                <img
                  src="@/static/assets/images/tick.png"
                  alt="tick"
                  class="mr-3 tick-icon"
                />
                <p class="mb-0">
                  We will provide you the direction and confirm the booking.
                </p>
              </div>
              <div class="d-flex justify-content-start">
                <img
                  src="@/static/assets/images/tick.png"
                  alt="tick"
                  class="mr-3 tick-icon"
                />
                <p class="mb-0">
                  From here forget everything just sit on a couch and relax.
                </p>
              </div>
            </div>
            <div
              class="col-sm-6 text-right"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src="@/static/assets/images/idea.png"
                alt="idea"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="our-projects" id="projects" v-if="projectImages.length">
        <div class="container">
          <div class="row mb-5">
            <div class="col-sm-12">
              <div
                class="d-sm-flex justify-content-between align-items-center mb-2"
              >
                <h3 class="font-weight-medium text-dark explore-heavern">
                  Let's Explore The Heaven
                </h3>
                <div>
                  <NuxtLink to="imageGallery" class="btn btn-outline-primary"
                    >View more</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-5" data-aos="fade-up">
          <slick :options="slickOptionstwo">
            <div
              class="item"
              v-for="(item, index) in projectImages.length"
              :key="index"
            >
              <img :src="projectImages[index]" alt="slickder" />
            </div>
          </slick>
        </div>
        <div class="container">
          <div class="row pt-5 mt-5 pb-5 mb-5 project-pd">
            <div class="col-sm-3">
              <div
                class="d-flex py-3 my-3 my-lg-0 justify-content-center"
                data-aos="fade-down"
              >
                <img
                  src="@/static/assets/images/satisfied-client.svg"
                  alt="satisfied-client"
                  class="mr-3"
                />
                <div>
                  <h4 class="font-weight-bold text-dark mb-0">
                    <span class="scVal">0</span>%
                  </h4>
                  <h5 class="text-dark mb-0">Satisfied clients</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div
                class="d-flex py-3 my-3 my-lg-0 justify-content-center"
                data-aos="fade-up"
              >
                <img
                  src="@/static/assets/images/finished-project.svg"
                  alt="satisfied-client"
                  class="mr-3"
                />
                <div>
                  <h4 class="font-weight-bold text-dark mb-0">
                    <span class="fpVal">0</span>
                  </h4>
                  <h5 class="text-dark mb-0">No of rooms</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div
                class="d-flex py-3 my-3 my-lg-0 justify-content-center"
                data-aos="fade-down"
              >
                <img
                  src="@/static/assets/images/team-members.svg"
                  alt="Team Members"
                  class="mr-3"
                />
                <div>
                  <h4 class="font-weight-bold text-dark mb-0">
                    <span class="tMVal">0</span>
                  </h4>
                  <h5 class="text-dark mb-0">Team Members</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div
                class="d-flex py-3 my-3 my-lg-0 justify-content-center"
                data-aos="fade-up"
              >
                <img
                  src="@/static/assets/images/our-blog-posts.svg"
                  alt="Our Blog Posts"
                  class="mr-3"
                />
                <div>
                  <h4 class="font-weight-bold text-dark mb-0">
                    <span class="bPVal">0</span>
                  </h4>
                  <h5 class="text-dark mb-0">Our Blog Posts</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonial">
        <div class="container">
          <div class="row mt-md-0 mt-lg-4">
            <div class="col-sm-12">
              <div>
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contactus" id="contact">
        <div class="container">
          <div class="row contactus-bottom-pd">
            <div class="col-sm-5">
              <img
                src="@/static/assets/images/contact.jpg"
                alt="contact"
                class="img-fluid contact-img"
              />
            </div>
            <div class="col-sm-7">
              <h3 class="font-weight-medium text-dark mt-5 mt-lg-0">
                Got A Problem
              </h3>
              <h5 class="text-dark mb-5">
                No worries, we are here to help you out.
              </h5>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Name*"
                      v-model="user.name"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      type="email"
                      v-model="user.email"
                      required
                      class="form-control"
                      id="mail"
                      placeholder="Email*"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      type="tel"
                      v-model="user.phone"
                      required
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      class="form-control"
                      id="phone"
                      placeholder="phone*"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="user.location"
                      class="form-control"
                      id="location"
                      placeholder="location"
                    />
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <textarea
                      name="message"
                      v-model="user.message"
                      id="message"
                      class="form-control masseage-box"
                      placeholder="Message*"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div class="col-sm-12">
                  <a
                    @click.prevent="sendMail('contact')"
                    href="#"
                    class="btn btn-secondary"
                    >SEND</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="instagram-sectiuon">
        <Instagram />
      </section>
      <section class="google-maps-section mb-1 text-center">
        <div >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1787229.2213991978!2d77.24689132838202!3d28.967152917271093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a0294000001f%3A0x8690100935d5ebe4!2sThe%20Nature%20Roar!5e0!3m2!1sen!2sin!4v1655194410992!5m2!1sen!2sin"
            width="90%"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="border border-primary"
          ></iframe>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
export default {
  components: { Slick },
  name: "home",

  data() {
    return {
      user: { person: "" },
      projectImages: [],
      slickOptionstwo: {
        slidesToShow: 5,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1.5,
              dots: true,
              arrows: false,
              infinite: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 2,
              dots: true,
              autoplay: true,
              infinite: false,
            },
          },
        ],
      },
    };
  },

  head() {
    return {
      script: [
        {
          src: "/assets/vendors/base/vendor.bundle.base.js",
        },
        {
          src: "/assets/vendors/owl.carousel/js/owl.carousel.js",
        },
        {
          src: "/assets/vendors/aos/js/aos.js",
        },
        {
          src: "/assets/vendors/jquery-flipster/js/jquery.flipster.min.js",
        },
        {
          src: "/assets/js/template.js",
        },
      ],
      // seo tags
      title:
        "nature roar | home-stay | birdwatching | eco-tourism | peaceful-living",
      meta: [
        {
          hid: "we are trying to make eco friendly and peaceful living",
          name:
            "Best home stay | Best view | Best birdwatching | Best place to stay | Best mountain",
          content:
            "Best home stay | Best view | Best birdwatching | Best place to stay | Best mountain",
        },
        {
          hid: "og:title",
          content: "nature roar- home-stay | birdwatching",
          property: "og:title",
        },
        {
          hid: "og:description",
          content:
            "Best home stay | Best view | Best birdwatching | Best place to stay | Best mountain",
          property: "og:description",
        },
        {
          hid: "og:url",
          content: this.$store.state.BASE_URL + this.$route.fullPath,
          property: "og:url",
        },
      ],
    };
  },

  jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Natiure roar",
      image: "./logo.png",
      "@id": "randomID",
      url: "http://natureroar.com/",
      telephone: "7466056737",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Village bajun near golu mandir.",
        addressLocality: "Nainital",
        postalCode: "263001",
        addressCountry: "IN",
      },
      sameAs: [" https://www.instagram.com/thenatureroar/"],
    };
  },

  methods: {
    async sendMail(type) {
      let form = {
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        location: this.user.location,
        message: this.user.message,
        emailType: type,
        startDate: this.user.startDate,
        endDate: this.user.endDate,
        person: this.user.person,
      };

      if (!form.phone) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill the form first!",
          timer: 10000,
        });
        return;
      }

      let response = await this.$store.dispatch("ApiCall", {
        method: "post",
        url: `/sendmail`,
        params: form,
      });

      if (response.status) {
        this.$swal.fire({
          icon: "success",
          timer: 10000,
          title: "Voila!",
          text: "Message sent successfully, expect a reply soon",
        });
        this.user = {};
        this.user.person = "";
      } else {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try againy",
          timer: 10000,
        });
      }
    },

    toggleHomePageBannerLoaded() {
      setTimeout(() => {
        this.$store.commit("setHomePageBannerLoaded", {
          status: true,
        });
      }, 0);
    },
  },
  async fetch() {
    function importAll(r) {
      return r.keys().map(r);
    }

    const images = await importAll(
      require.context(
        "@/static/assets/images/hotelPic",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
    this.projectImages = images;
  },
};
</script>
<style scoped>
.date-picker {
  padding: 15px 0px;
  margin-top: 20px;
}
.form-control {
  padding: 10px;
  height: 40px;
}
.date-picker .form-control {
  border-radius: 30px;
  color: #919aa3;
  border: 2px solid #3c37f1;
  font-weight: bold;
}
.date-picker .input {
  color: #3c37f1;
}
/* .btn.btn-primary.btn-block.w-100{background-color: #00d663;} */
.our-services {
  padding: 60px 0px 0px 0px;
}
.main-banner .banner-title {
  width: 100%;
}
.main-banner .banner-title .font-weight-medium {
  font-weight: bold;
  font-size: 45px;
}
.main-banner {
  padding: 4.2rem 0 8rem 0;
}
section {
  padding-top: 60px;
  padding-bottom: 0px;
}
.home {
  padding-bottom: 40px;
}
.instagram-sectiuon {
  padding-left: 15px;
}
.owl-carousel .owl-item .item img {
  border-radius: 0px;
  border: 0px;
}
.owl-carousel .owl-item .item {
  border-radius: 0px;
}
.glob-image {
  width: 248px;
  margin-top: 100px;
}
.glob-content-div {
  padding-right: 80px !important;
}
.slick-slide img {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 10px;
}
.masseage-box {
  height: auto;
}
@media only screen and (max-width: 767px) {
  .glob-image {
    width: 153px;
    float: right;
    margin-top: -104px;
    margin-right: 0px;
  }
  .main-banner {
    padding: initial;
  }
  .date-picker {
    padding: 40px 0px;
  }
  .input-icon-wrap {
    margin-bottom: 11px;
  }
  .services-box img {
    max-width: 110px;
  }
  .project-pd {
    margin: 0px !important;
    padding: 0px !important;
  }
  .contact-img {
    width: 194px;
    margin: 0 auto;
    display: block;
  }
  .contactus-bottom-pd {
    margin-bottom: 0px !important;
  }
  .instagram-sectiuon {
    padding-top: 20px;
  }
  .slick-slide {
    float: right !important;
  }
  .main-banner .banner-title .font-weight-medium {
    font-size: 28px;
    padding-top: 2px;
  }
  .home {
    background-position: 0 -161px;
  }
  .date-picker {
    padding: 0px 0px;
  }
  .date-picker .form-control {
    margin-bottom: 20px;
  }
  .explore-heavern {
    padding-bottom: 20px;
  }
}
</style>
