<template>
  <div>
    <div id="flex-container">
      <!-- slider items -->
      <ul class="slider-items">
        <li
          class="slider-item"
          v-for="(item, index) in mainSlider"
          :key="index"
        >
          <img :src="item.image" />
          <div class="slider-content">
            <div class="flex-column">
              <h2>
                <span v-html="renderString(item.title)"></span>
              </h2>
            </div>
          </div>
        </li>
      </ul>
      <!-- slider controls -->

      <div class="slider-control">
        <button class="prev font-14">
          <i class="arrow-left-bold"
            ><svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z"
              />
            </svg>
          </i>
        </button>
        <button class="next font-14">
          <i class="material-icons">
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z"
              />
            </svg>
          </i>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      mainSlider: [
        {
          image: require("@/static/assets/images/mainSlider/drowingRoon.JPG"),
          title: "We try to your best home stay in the city ",
          button: "Find out more",
        },

        {
          image: require("@/static/assets/images/mainSlider/exterior.JPG"),
          title: "Try the best view of the world with our amazing location",
          button: "Find out more",
        },
      ],
    };
  },
  head() {
    return {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js",
        },
      ],
    };
  },
  methods: {
    renderString(string) {
      var s = string;

      var middle = Math.floor(s.length / 2);
      var before = s.lastIndexOf(" ", middle);
      var after = s.indexOf(" ", middle + 1);

      if (middle - before < after - middle) {
        middle = before;
      } else {
        middle = after;
      }

      var s1 = s.substr(0, middle);
      var s2 = s.substr(middle + 1);
      if (this.$device.isMobile) {
        return "";
      }
      return `<div> <span style="color: #d10475">${s1}</span> <span style="color: #9dea05">${s2}</span> </div>`;
    },
    renderComponent() {
      $(".slider-items").slick({
        // autoplay: true,
        prevArrow: ".prev",
        nextArrow: ".next",
        slidesToShow: 1,
        fade: true,
        centerMode: true,
        centerPadding: "1px",
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              fade: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },
  },
  mounted() {
    this.renderComponent();
  },
};
</script>
<style scoped>
.slick-slider {
  position: relative;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.slick-list:focus {
  outline: 0;
}
.slick-list.dragging {
  cursor: pointer;
}
.slick-slider .slick-list,
.slick-slider .slick-track {
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.slick-track:after,
.slick-track:before {
  display: table;
  content: "";
}
.slick-track:after {
  clear: both;
}
.slick-loading .slick-track {
  visibility: hidden;
}
.slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}
[dir="rtl"] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}

.slick-next,
.slick-prev {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 50%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  border: none;
  outline: 0;
  background: 0 0;
}
.slick-next:focus,
.slick-next:hover,
.slick-prev:focus,
.slick-prev:hover {
  color: transparent;
  outline: 0;
  background: 0 0;
}
.slick-next:focus:before,
.slick-next:hover:before,
.slick-prev:focus:before,
.slick-prev:hover:before {
  opacity: 1;
}
.slick-next.slick-disabled:before,
.slick-prev.slick-disabled:before {
  opacity: 0.25;
}
.slick-next:before,
.slick-prev:before {
  font-family: slick;
  font-size: 20px;
  line-height: 1;
  opacity: 0.75;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slick-prev {
  left: -25px;
}
[dir="rtl"] .slick-prev {
  right: -25px;
  left: auto;
}
.slick-prev:before {
  content: "←";
}
[dir="rtl"] .slick-prev:before {
  content: "→";
}
.slick-next {
  right: -25px;
}
[dir="rtl"] .slick-next {
  right: auto;
  left: -25px;
}
.slick-next:before {
  content: "→";
}
[dir="rtl"] .slick-next:before {
  content: "←";
}
.slick-dotted.slick-slider {
  margin-bottom: 30px;
}
.slick-dots {
  position: absolute;
  bottom: -25px;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}
.slick-dots li {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}
.slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 20px;
  height: 20px;
  padding: 5px;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: 0;
  background: 0 0;
}
.slick-dots li button:focus,
.slick-dots li button:hover {
  outline: 0;
}
.slick-dots li button:focus:before,
.slick-dots li button:hover:before {
  opacity: 1;
}
.slick-dots li button:before {
  font-family: slick;
  font-size: 6px;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  content: "•";
  text-align: center;
  opacity: 0.25;
  color: #000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: #000;
}
/*********** FLEX GRID ************************/
.flex-container {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 1em;
}
@media (min-width: 540px) {
  .flex-container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .flex-container {
    max-width: 768px;
  }
}
@media (min-width: 992px) {
  .flex-container {
    max-width: 992px;
  }
}
@media (min-width: 1200px) {
  .flex-container {
    max-width: 1200px;
  }
}
/************** SLIDER  ****************************/
#flex-container {
  position: relative;
  width: 100%;
}

.slider-item img {
  width: 100%;
  opacity: 0.6;
  height: 500px;
}

.slider-item .slider-content {
  z-index: 2;
  position: absolute;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.slider-item h2 {
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5rem;
  opacity: 0;
  color: #ffffff;
  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
  -o-transition: opacity 0.5s, transform 0.5s;
  transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, transform 0.5s;
  transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
  -webkit-transform: translateX(-100px);
  -ms-transform: translateX(-100px);
  transform: translateX(-100px);
}

.slider-item h3 {
  margin-bottom: 10px;
  font-size: 1.3rem;
  color: #ffffff;
  opacity: 0;
  -webkit-transition: opacity 0.8s, -webkit-transform 0.8s;
  -o-transition: opacity 0.8s, transform 0.8s;
  transition: opacity 0.8s, -webkit-transform 0.8s;
  transition: opacity 0.8s, transform 0.8s;
  transition: opacity 0.8s, transform 0.8s, -webkit-transform 0.8s;
  -webkit-transform: translateX(-100px);
  -ms-transform: translateX(-100px);
  transform: translateX(-100px);
}

.slider-item .button {
  display: inline-block;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  padding: 10px 20px;
  border: 2px solid transparent;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  opacity: 0;
  background-color: #93c04d;
  -webkit-transition: opacity 0.9s, -webkit-transform 0.9s;
  -o-transition: opacity 0.9s, transform 0.9s;
  transition: opacity 0.9s, -webkit-transform 0.9s;
  transition: opacity 0.9s, transform 0.9s;
  transition: opacity 0.9s, transform 0.9s, -webkit-transform 0.9s;
  -webkit-transform: translateX(-100px);
  -ms-transform: translateX(-100px);
  transform: translateX(-100px);
}

.slider-item .button:hover {
  border-color: #93c04d;
  color: #93c04d;
  background-color: #fff;
}

.slick-slider {
  margin: 0;
  padding: 0 !important;
}

.slick-active h2,
.slick-active h3,
.slick-active .button,
.slick-active p {
  z-index: 9999;
  opacity: 1;
  -webkit-transform: translateX(0px);
  -ms-transform: translateX(0px);
  transform: translateX(0px);
}

.slick-active .button {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}

.slider-control {
  z-index: 9;
  position: absolute;
  right: 0;
  bottom: 5px;
}

.slider-control .next,
.slider-control .prev {
  display: inline-block;
  padding: 10px 15px;
  border: none;
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
}

.slider-control .prev {
  border: none;
  background: #d3237e;
}

.slider-control .next {
  border: none;
  background: #53d53f;
}

@media all and (min-width: 992px) {
  .slider-item h2 {
    margin-bottom: 40px;
    font-size: 2.8125rem;
    line-height: 2.8125rem;
  }

  .slider-item h3 {
    margin-bottom: 50px;
  }

  .slider-item .button {
    padding: 20px 35px;
  }

  .slider-control .next,
  .slider-control .prev {
    padding: 30px 43px;
  }

  .slider-item .slider-content {
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
}
</style>