<template>
  <div class="section sec-instagram" v-if="images.length">
    <div class="container mb-5">
      <div class="row">
        <div class="col-lg-3" data-aos="fade-up">
          <h2 class="heading">Instagram</h2>
        </div>
        <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
          <p>
            Just hold your breath, rub your eyes and be ready to explore the
            world of heaven. Over every mountain there is a path, although it
            may not be seen from the valley.
          </p>
        </div>
      </div>
    </div>
    <div class="instagram-slider-wrap" data-aos="fade-up" data-aos-delay="200">
      <div class="instagram-slider" id="instagram-slider">
        <slick :options="slickOptions">
          <div
            class="item instagramCarouselID"
            v-for="(item, index) in images.length"
            :key="index"
          >
            <a class="instagram-item">
              <span class="icon-instagram"></span>
              <img :src="images[index]" alt="Image" class="img-fluid" />
            </a>
          </div>
        </slick>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
export default {
  components: { Slick },
  data() {
    return {
      images: "",
      slickOptions: {
        slidesToShow: 5,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,

        // Any other options that can be got from plugin documentation
      },
    };
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
    this.images = images;
  },
};
</script>

<style scoped>
.instagram-item {
  position: relative;
  display: block;
  cursor: pointer;
  overflow: hidden;
}
.instagram-item img {
  position: relative;
  z-index: -1;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.instagram-item:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.instagram-item [class^="icon-"] {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 30px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  color: #fff;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.instagram-item:hover img {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}
.instagram-item:hover:before {
  opacity: 1;
  visibility: visible;
}
.instagram-item:hover [class^="icon-"] {
  opacity: 1;
  visibility: visible;
}
</style>