<template>
  <div>
    <div class="container mainContainer" v-if="instaPost.length && false">
      <!-- instagram @ -->
      <div class="instagram-section">
        <h3 class="title">
          <span class="text-black">@</span
          ><span class="text-success">Nature</span
          ><span class="text-pink">Roar</span>
        </h3>
        <div class="slider-wrapper slider_box slider_arrow">
          <VueSlickCarousel ref="slick" :options="settingsInsta">
            <template v-for="(image, imgIndex) in instaPost">
              <div
                class="item"
                v-if="image.media_type === 'IMAGE'"
                :key="imgIndex"
              >
                <div class="img-box">
                  <img :src="image.media_url" alt="img" class="w-100" />
                  <div class="overlaey">
                    <a :href="image.permalink" target="_blank">
                      <span class="insta-icon">
                        <img
                          src="~/static/assets/images/instagram.png"
                          aria-label="instagram"
                          alt="img"
                      /></span>
                    </a>
                  </div>
                </div>
              </div>
            </template>
          </VueSlickCarousel>
        </div>
        <div class="b-flowbox-body">
          <p>
            Tag your pictures with
            <b
              ><a
                href="https://www.instagram.com/explore/tags/natureRoar/"
                target="_blank"
                >#NatureRoar</a
              ></b
            >
            and appear at our feed!
          </p>
        </div>
      </div>
      <!-- instagram @ end -->
    </div>
    <div
      class="embedsocial-hashtag"
      data-ref="3fa21c5447cb455c57e64e882206ff6a5d43f8c1"
    >
     
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      instaPost: [],
      settingsInsta: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        infinite: true,
        autoplay: true,
        dots: false,

        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },

  methods: {
    async getInstaPost() {
      return
      try {
        var authOptions = {
          method: "get",
          url: `https://graph.instagram.com/me/media?fields=media_url,media_type,permalink,thumbnail_url&count=6&access_token=${this.$store.state.INSTA_TOKEN}`,
          headers: {
            "Content-Type": "application/json",
          },
        };
        let response = await this.$axios(authOptions);
        if (response.status == 200) {
          this.instaPost = response.data.data;
        } else {
          throw "encountered error while fetching instagram data";
        }
      } catch (error) {
        console.log("error from get insta post", error);
      }
    },
  },

  mounted() {

    // init third party instagram widget
    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "EmbedSocialHashtagScript");
  },

  async fetch() {
    this.getInstaPost();
  },
};
</script>

<style scoped>
.text-pink {
  color: #f05c90;
}
.text-black {
  color: black;
}
.mainContainer {
  margin-top: 30px;
}
.b-flowbox-body {
  font-weight: 400;
  font-size: 14px;
  color: #666;
  margin: 10px auto;
  text-align: center;
}
/* .b-flowbox-body p {
  margin: 20px 0;
} */
.b-flowbox-body b {
  color: #f44436;
}
.instagram-section .slider-wrapper .slick-initialized .slick-slide {
  padding: 0 10px;
}

.instagram-section .slider-wrapper.slider_box.slider_arrow .slick-arrow {
  width: 50px;
  height: 50px;
}
.instagram-section .slider_box.slider_arrow .slick-arrow.slick-prev {
  left: -15px;
}
.slider_box.slider_arrow .slick-arrow.slick-next {
  border: 0;
  box-shadow: none;
  padding: 0;
  right: 20px;
}
.instagram-section .slider_box.slider_arrow .slick-arrow.slick-next {
  right: -15px;
}
.icon-instagram:before {
  content: "\e912";
}
.instagram-section {
  width: 100%;
  padding: 0px 30px 0px 30px;
}
.instagram-section h3 {
  font-weight: 700;
  font-size: 30px;
  color: #f44436;
  text-align: center;
}
.instagram-section .slider-wrapper {
  width: 100%;
  padding: 20px;
}
.instagram-section .slider-wrapper .item {
  /* width: 20%; */
  border-radius: 8px;
}
.instagram-section .slider-wrapper .item .img-box {
  width: 100%;
  position: relative;
  border-radius: 8px;
  padding: 10px;
}
.instagram-section .slider-wrapper .item .img-box img {
  border-radius: 8px;
}
.instagram-section .slider-wrapper .item .info-insta {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  padding: 12px;
}
.instagram-section .slider-wrapper .item .info-insta .insta-icon {
  width: 15px;
}
.insta-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
.insta-icon img {
  width: 30px;
}

.img-box:hover .insta-icon {
  opacity: 1;
}

@media only screen and (max-width: 767px) {
  .instagram-section .slider-wrapper {
    padding: 0;
  }
  .instagram-section .slider-wrapper.slider_box.slider_arrow .slick-arrow {
    width: 30px;
    height: 30px;
  }

  .slider-carousel_items .slick-dots li button {
    height: 8px;
    width: 8px;
    border: 0px;
    padding: 0px;
    background-color: #fff;
    appearance: none;
    margin-right: 12px;
    background-color: #d8d2d2;
    border-radius: 50%;
    line-height: 0px;
  }
  .slider-carousel_items .slick-dots .slick-active button {
    background-color: #000 !important;
  }
  .slider-carousel_items .slide-dots {
    background-color: transparent !important;
  }
  .tag-picture-list .slick-arrow.slick-prev {
    left: 0;
  }
  .tag-picture-list .slick-arrow {
    top: 29%;
    height: 30px;
    width: 30px;
  }
  .star-re-con {
    color: #a3a3a3;
  }
  .sub-banner-button .button_light {
    max-width: 99px;
    min-width: 99px;
    padding: 8px 5px 7px;
    text-align: center;
  }
  .hp_banner_section .banner-content .content,
  .sub-banner-button {
    padding: 20px;
  }
  .best_sellers .h2-title,
  .h2-title {
    padding-bottom: 0px;
    color: #f44436 !important;
  }
  .shop_section {
    padding: 0px 20px 40px 20px;
  }
  .instagram-section {
    padding: 0px;
  }
  .instagram-section .slider-wrapper .slick-initialized .slick-slide {
    padding: 0px;
  }
  .instagram-section .slider-wrapper.slider_box.slider_arrow .slick-prev {
    left: -4%;
  }
  .instagram-section .slider-wrapper.slider_box.slider_arrow .slick-next {
    right: -4%;
  }

  .iiz__btn.iiz__hint {
    display: none !important;
  }
}

</style>
