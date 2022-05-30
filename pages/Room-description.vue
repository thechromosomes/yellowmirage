<template>
  <client-only>
    <div>
      <transition name="bounce">
        <popUpFrom v-if="showPopUp" />
      </transition>

      <div class="main-container overflow-x-hidden" v-if="singleRoom != null">
        <section class="pdp_wraper">
          <div class="slider-all-left-part">
            <div class="image_slider_div">
              <div class="thumbnail-crousal" v-if="$device.isDesktopOrTablet">
                <ul>
                  <li
                    v-for="(item, index) in singleRoom.gallery"
                    :key="index"
                    @click="currentThumnial(index + 1)"
                    :class="{
                      'border border-[#ed5736]': imgIndex == index + 1,
                    }"
                  >
                    <img :src="item" />
                  </li>
                </ul>
              </div>
              <!-- ============ big item slider ======= -->
              <div class="big-item-slider" v-if="$device.isDesktopOrTablet">
                <template>
                  <client-only>
                    <!-- <image-magnifier
                    :src="singleProductList.gallery[imgIndex].image"
                    :zoom-src="singleProductList.gallery[imgIndex].image"
                    width="100%"
                    height="auto"
                    zoom-width="400"
                    zoom-height="400"
                  /> -->
                    <img src="@/static/assets/images/hotelPic/hotelPic2.jpeg" />
                  </client-only>
                </template>
                <!-- custom slider  end-->
              </div>

              <div class="big-slider mobile_only">
                <div id="H_slider" class="slider-item">
                  <VueSlickCarousel v-bind="slickOptions" class="main-slider">
                    <div
                      v-for="(item, index) in singleRoom.gallery"
                      :key="index"
                      class="item"
                    >
                      <img :src="item" class="w-100" />
                    </div>
                  </VueSlickCarousel>
                </div>
              </div>
              <!-- ================ mobile product crousal ============ -->
              <section class="mobile_product_slider" v-if="$device.isMobile">
                <VueSlickCarousel v-bind="mobile_single_product">
                  <template v-for="(item, index) in singleRoom.gallery">
                    <div
                      :key="index"
                      class="item-mobile-product"
                      @click="zoom_mobile = true"
                    >
                      <img :src="item" class="border border-[#ed5736]" />
                    </div>
                  </template>
                </VueSlickCarousel>
              </section>
              <!-- ================= end =========== -->
            </div>
            <!-- =================== import ===== accordians ==== -->
            <pdpAccordians v-if="$device.isDesktop" ref="Open_size_chart" />
            <!-- =================== -->
          </div>
          <!-- ============= content part -->
          <div class="content_part_slider">
            <!-- ============= content part -->
            <h2 class="product-title">{{ singleRoom.room_name }}</h2>
            <h3 class="mrp_price">Price: ₹ {{ singleRoom.price }}</h3>
            <div class="price-with-discount">
              <div v-if="true">
                <span class="cut_price"
                  >MRP:<del>₹ {{ singleRoom.price * 1.3 }}</del></span
                >
                <span class="save_price">Save {{ 30 }}%</span>
              </div>
              <div class="all-income-taxes">
                <p>Price inclusive of all taxes</p>
              </div>
            </div>
            <div v-if="true" class="rating-section flex">
              <div class="rating-group">
                <svg height="0" width="0">
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop
                        offset="0%"
                        style="stop-color: #ffb306; stop-opacity: 1;"
                      />
                      <stop
                        offset="50%"
                        style="stop-color: #ffb306; stop-opacity: 1;"
                      />
                      <stop
                        offset="50%"
                        style="stop-color: transparent; stop-opacity: 1;"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: transparent; stop-opacity: 1;"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span class="ml-1 text-[12px]">
                <u>
                  {{ "100+" }}
                  Reviews
                </u>
              </span>
            </div>

            <!-- ================= add to cart button============ -->
            <div class="add_cart_btn_div">
              <button class="cart_butoon" @click="addToCart">
                Book Now
              </button>
            </div>

            <!-- ---------- discribtion -->
            <div class="discription_div" v-if="true">
              <h4 class="uppercase discription_heding">DESCRIPTION</h4>
              <p class="">
                {{ "thisf dsifsd fsdjfsd fpodsjfdsgfals dglkdsa jgdsfg f" }}
              </p>
            </div>
          </div>
        </section>
        <!-- =================== import ===== accordians ==== -->
        <pdpAccordians v-if="$device.isMobile" ref="Open_size_chart" />

        <!-- =================== -->
        <!-- <div>
        <RelatedProducts heading="Related Products" />
      </div>
      <div>
        <RelatedProducts
          heading="Recent Products"
          :relatedPrd="recentProducts"
        />
      </div> -->
      </div>
      <div v-else>
        <h1>OPS! we are packed, please try again.</h1>
      </div>
    </div>
  </client-only>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import popUpFrom from "@/components/utility-components/popUpForm.vue";
import pdpAccordians from "@/components/utility-components/pdpAccordians.vue";
import hotelData from "@/static/hotelData.json";
// import RelatedProducts from "@/components/RelatedProducts.vue";

export default {
  components: {
    pdpAccordians,
    VueSlickCarousel,
    popUpFrom,
    // RelatedProducts,
  },
  data() {
    return {
      imgIndex: 0,
      showPopUp: false,
      roomWant: 1,
      bookingDate: null,
      zoom_mobile: false,
      singleRoom: null,
      recentProducts: [],
      selectedSizeAttr: "",
      selectedSizeError: "",
      pinCode: "",
      deliveryStatus: "",
      deliveryStatusType: "success",
      sizeData: [],
      footerAtribute: false,
      mobile_single_product: {
        dots: true,
        infinite: true,

        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              autoplay: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              initialSlide: 1,
              slidesToScroll: 1,
              autoplay: true,
            },
          },
        ],
      },
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        fade: false,
        dots: true,
      },
    };
  },
  // head() {
  //   return {
  //     title: this.title,
  //     meta: [
  //       {
  //         hid: "description",
  //         name: "description",
  //         content: this.description,
  //       },
  //       {
  //         hid: "keyword",
  //         name: "keyword",
  //         content: this.singleProductList.meta_keyword,
  //       },
  //       {
  //         hid: "og:title",
  //         content: this.title,
  //         property: "og:title",
  //       },
  //       {
  //         hid: "og:description",
  //         content: this.description,
  //         property: "og:description",
  //       },
  //       {
  //         hid: "og:url",
  //         content: this.url,
  //         property: "og:url",
  //       },
  //       {
  //         hid: "og:image",
  //         content: this.image,
  //         property: "og:image",
  //       },
  //     ],
  //     bodyAttrs: {
  //       class: "footer_mobile_pd",
  //     },
  //   };
  // },

  methods: {
    togglePopUP() {
      this.showPopUp = !this.showPopUp;
    },
    // fetch product data

    fetchRecentViews(sku) {
      var form = {};
      form.service = "recent_views";
      form.store = 1;
      form.recent_views_products = sku;
      this.$store
        .dispatch("pimAjax", {
          method: "post",
          url: `/pimresponse.php`,
          params: form,
        })
        .then((response) => {
          this.recentProducts = response.result;
        })
        .catch((e) => {
          console.log("error form the recent view page >>> ", e);
        });
    },
    currentThumnial(index) {
      this.imgIndex = index;
    },

    async getProductDetail() {
      let room_category = this.$route.query.room_category;
      let room_name = this.$route.query.room_name;

      hotelData.map((item) => {
        if (
          item.room_category == room_category &&
          item.room_name == room_name
        ) {
          return (this.singleRoom = item);
        }
      });

      try {
      } catch (error) {
        console.log("error", error);
      }
    },
    async addToCart() {
      this.showPopUp = true;
      return;
      let type = this.singleRoom.room_category;
      let name = this.singleRoom.room_name;
      let cost = this.singleRoom.price;
      let roomWant = this.roomWant;
      let date = this.bookingDate;

      await this.$store.dispatch("ApiCall", {
        method: "post",
        url: `/status`,
        type: "protected",
        params: { type, name, cost, roomWant, date },
      });
    },

    scrollTo(selector) {
      const yOffset = this.$device.isMobile ? 0 : -60;
      const el = document.querySelector(selector);
      el.scrollIntoView();
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },

  async fetch() {
    await this.getProductDetail();
  },
  //   mounted() {
  //     if (
  //       this.$route.query &&
  //       this.$route.query.query &&
  //       this.$route.query.query == "review"
  //     ) {
  //       if (
  //         this.$store.state.account.customer_session == "" ||
  //         this.$store.state.account.customer_id == ""
  //       ) {
  //         this.$router.push("/login");
  //       } else {
  //         this.$nextTick(function () {
  //           // const yOffset = 360;
  //           // const element = document.getElementById("reviewComponent");
  //           // const y =
  //           //   element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //           // window.scrollTo({ top: y, behavior: "smooth" });
  //           this.scrollTo("#reviewComponent");
  //         });
  //       }
  //     }
  //     setTimeout(() => {
  //       this.sizeGuideOpen();
  //     }, 200);
  //     if ($cookies.isKey("MumbaiIndians_recent_views")) {
  //       let recentV = $cookies.get("MumbaiIndians_recent_views") || "";
  //       this.fetchRecentViews(recentV);
  //     }
  //   },
};
</script>

<style scoped>
@import "~/assets/pages_css/product_detail.css";
</style>
