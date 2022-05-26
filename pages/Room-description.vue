<template>
<client-only>
  <div>
    <div class="main-container overflow-x-hidden">
      <section class="pdp_wraper">
        <div class="slider-all-left-part">
          <div class="image_slider_div">
            <div class="thumbnail-crousal" v-if="$device.isDesktopOrTablet">
              <ul>
                <li
                  v-for="(item, index) in 5"
                  :key="index"
                  @click="currentThumnial(index + 1)"
                  :class="{ 'border border-[#ed5736]': imgIndex == index + 1 }"
                >
                  <img
                    src="@/static/assets/images/hotelPic/hotelPic2.jpeg"
                  />
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
                  <img
                    src="@/static/assets/images/hotelPic/hotelPic2.jpeg"
                  />
                </client-only>
              </template>
              <!-- custom slider  end-->
            </div>

            <div
              class="big-slider mobile_only"
            >
              <div
                id="H_slider"
                class="slider-item"
              >
                <VueSlickCarousel
                  v-bind="slickOptions"
                  class="main-slider"
                >
                  <div
                    v-for="(item, index) in 4"
                    :key="index"
                    class="item"
                  >
                    <img
                      src="@/static/assets/images/hotelPic/hotelPic2.jpeg"
                      class="w-100"
                    />
                  </div>
                </VueSlickCarousel>
              </div>
            </div>
            <!-- ================ mobile product crousal ============ -->
            <section class="mobile_product_slider" v-if="$device.isMobile">
              <VueSlickCarousel v-bind="mobile_single_product">
                <template v-for="(item, index) in 6">
                  <div
                    :key="index"
                    class="item-mobile-product"
                    @click="zoom_mobile = true"
                  >
                    <img
                      src="@/static/logo.png"
                      class="border border-[#ed5736]"
                    />
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
          <h2 class="product-title">{{ "singleProductList.name" }}</h2>
          <h3 class="mrp_price">
            Selling Price: ₹ {{ "singleProductList.selling_price" }}
          </h3>
          <div class="price-with-discount">
            <div v-if="true">
              <span class="cut_price"
                >MRP:<del>₹ {{ "singleProductList.price" }}</del></span
              >
              <span class="save_price"
                >Save {{ "singleProductList.discount" }}%</span
              >
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
                {{ "singleProductList.review_and_ratings.total_review" }}
                Reviews
              </u>
            </span>
          </div>

          <!-- ================= add to cart button============ -->
          <div class="add_cart_btn_div">
            <button class="cart_butoon" @click="addToCart">add to cart</button>
            <button class="wish_list_button">
              <img
                src="@/static/logo.png"
                alt="heart"
              />
              <img
                src="@/static/logo.png"
                alt="heart"
              />
            </button>
          </div>
          <!-- ================= check aviblity ====== -->
          <div class="check_aviblity_div">
            <h3>Check pin code serviceability</h3>
            <div class="search_store_input flex">
              <input
                type="text"
                placeholder="Enter your Pincode"
                v-model.number="pinCode"
                class="pinCode-input"
                :maxlength="6"
              />
              <button class="check_button" @click="productPinCode">
                check
              </button>
            </div>
            <p :class="[deliveryStatusType == 'success' ? 'green' : 'red']">
              {{ deliveryStatus }}
            </p>
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

  </div>
  </client-only>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import pdpAccordians from "@/components/utility-components/pdpAccordians.vue";
// import RelatedProducts from "@/components/RelatedProducts.vue";

export default {
  components: {
    pdpAccordians,
    // RelatedProducts,
    VueSlickCarousel,
  },
  data() {
    return {
      imgIndex: 0,
      zoom_mobile: false,
      recentProducts: [],
      addToCartVal: 1,
      currentColorValue: 0,
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
    colorindex(colorValue) {
      this.currentColorValue = colorValue;
    },
    currentSizeget(item) {
      this.selectedSizeError = "";
      this.selectedSizeAttr = item;
    },

    // ----------- change image on click left irght //
    changeMainImage(behave) {
      if (behave == "pre") {
        if (this.imgIndex != 0) {
          this.imgIndex -= 1;
        }
      }
      if (behave == "next") {
        if (this.imgIndex < this.gallery.length - 1) {
          this.imgIndex += 1;
        }
      }
    },

    // end//

    OpenSizeChart() {
      var elmnt = document.getElementById("size_id");
      elmnt.scrollIntoView();
      this.$refs["Open_size_chart"].accordianToggle("sizeGuide", "sizeGuide");
    },
    async getProductDetail() {
      try {
        await this.$store.commit("product/prepareStateForSingleProd", {
          routeParam: this.$route.params.SingleProduct,
        });
        let {
          service,
          store,
          url_key,
        } = this.$store.state.product.singleProductList;
        var form = {};
        form.service = service;
        form.store = store;
        form.url_key = url_key;
        form.noLoader = false;

        if (this.$route.query.filter) {
          form.filter = this.$route.query.filter;
        }
        let response = await this.$store.dispatch("pimAjax", {
          method: "get",
          url: `/pimresponse.php`,
          params: form,
        });

        if (response) {
          this.$store.commit("product/updateSingleProdState", {
            error: null,
            data: response,
          });
        }
        if (response.response.success) {
          this.$gtm.push({
            event: "ProductDetail",
            action: "Product Detail",
            category: this.singleProductList.category || "",
            ecommerce: {
              detail: {
                product: [
                  {
                    name: this.singleProductList.name,
                    id: this.singleProductList.sku,
                    price: this.singleProductList.selling_price,
                    category: this.singleProductList.category,
                  },
                ],
              },
            },
          });
        } else {
          throw `no response from api ${
            response.response.error_message
          }, REQUEST- ${JSON.stringify(form)}`;
        }
      } catch (error) {
        this.$globalError(`error from getProductDetail >>>> ${error}`);
        if (error.message === "Network Error") {
          this.$store.commit("product/updateSingleProdState", {
            error:
              "Oops there seems to be some Network issue, please try again",
          });
        }
      }
    },
    async addToCart() {
      if (Object.keys(this.selectedSizeAttr).length === 0) {
        this.$toast.error("Please select a size");
        this.sizeAlert = true;
        this.selectedSizeError = "Please select size";
        return false;
      }
      // console.log(this.singleProductList);
      await this.addProductToCart(
        this.singleProductList,
        this.selectedSizeAttr
      );
    },

    async productPinCode() {
      if (Object.keys(this.selectedSizeAttr).length === 0) {
        this.$toast.error("Please select a size to check availability");
        this.sizeAlert = true;
        this.selectedSizeError = "Please select size";
        return;
      }
      console.log(this.pinCode);
      if (this.pinCode == "") {
        this.deliveryStatus = "please select valid pin code";
        this.deliveryStatusType = "error";
        return;
      }
      let form = {
        pincode: this.pinCode,
        fynd_uid: this.singleProductList.fynd_uid,
        fynd_size: this.selectedSizeAttr.configrable_atribute_value,
      };

      try {
        let response = await this.$store.dispatch("cart/actCartAjax", {
          method: "post",
          url: `/customer/serviceable`,
          params: form,
        });

        if (response) {
          response.message == "validation error"
            ? ((this.deliveryStatus = "please select valid pin code"),
              (this.deliveryStatusType = "error"))
            : (this.deliveryStatus = response.data);
          if (response.success == false || response.message == "Unsuccessful") {
            this.deliveryStatusType = "error";
          }
        } else {
          throw "no response from api";
        }
      } catch (error) {
        this.$globalError(
          `error from single product page (ProductPinCode) >>>> ${error}`
        );
      }
    },

    //  =================== size guide data ================//
    async sizeGuideOpen() {
      const response = await this.$store.dispatch("pimAjax", {
        method: "get",
        url: "/pimresponse.php",
        params: {
          service: "size_guide",
          store: "1",
          category_id: this.$store.state.product.singleProductList
            .single_prod_data.category,
        },
      });
      if (response.response.success == 1) {
        this.sizeData = response.result;
      }
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
    // await this.getProductDetail();
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
