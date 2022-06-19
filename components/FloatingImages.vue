<template>
  <div class="slider-container">
    <div class="left-slide">
      <div
        v-for="(item, index) in mainSlider"
        :key="index"
        :style="`background-color:${random_bg_color()}; `"
        class="mainBannerString"
      >
        <div class="rotateText" v-html="renderString(item.title)"></div>
      </div>
    </div>
    <div class="right-slide">
      <template v-if="!$device.isMobileOrTablet">
        <div
          class="mainSliderImage"
          v-for="(item, index) in mainSlider"
          :key="index"
        >
          <img :src="item.image" @load="toggleHomePageBannerLoaded()" />
        </div>
      </template>
      <template v-else>
        <infinityVerticalLoop :mainSliderData="mainSlider" />
      </template>
    </div>
    <div class="action-buttons">
      <button class="down-button">
        <i class="arrow-left-bold"
          ><svg style="width: 24px; height: 24px;" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z"
            />
          </svg>
        </i>
      </button>
      <button class="up-button">
        <i class="material-icons">
          <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z"
            />
          </svg>
        </i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSlideIndex: 0,
      mainSlider: [
        {
          image: require("@/static/assets/images/mainSlider/mainSlider1.jpg"),
          title:
            "The certain pathway to all things that you want is through the corridor of joy.",
          button: "Find out more",
        },

        {
          image: require("@/static/assets/images/mainSlider/mainSlider2.jpg"),
          title: "Try the best view of the world with our amazing location.",
          button: "Find out more",
        },
        {
          image: require("@/static/assets/images/mainSlider/mainSlider3.jpg"),
          title: "Hospitality should have no other nature than love.",
          button: "Find out more",
        },
        {
          image: require("@/static/assets/images/mainSlider/mainSlider4.jpg"),
          title: "My definition of a good hotel is a place I’d stay at.",
          button: "Find out more",
        },
        {
          image: require("@/static/assets/images/mainSlider/mainSlider5.jpg"),
          title: "Consumers are statistics. Visitors are people.",
          button: "Find out more",
        },
        {
          image: require("@/static/assets/images/mainSlider/mainSlider6.jpg"),
          title:
            "Quality is never an accident. It is always the result of an intelligent effort.",
          button: "Find out more",
        },
        {
          image: require("@/static/assets/images/mainSlider/mainSlider7.jpg"),
          title:
            "Nature Roar relieve travelers of their insecurity and loneliness. It make them feel warm and cozy.",
          button: "Find out more",
        },
        {
          image: require("@/static/assets/images/mainSlider/mainSlider8.jpg"),
          title:
            "A soul of hospitality and a heart of humanity is a house of love, peace, freedom, liberty, and justice.",
          button: "Find out more",
        },
      ],
    };
  },

  methods: {
    toggleHomePageBannerLoaded() {
      setTimeout(() => {
        this.$store.commit("setHomePageBannerLoaded", {
          status: true,
        });
      }, 0);
    },
    renderComponent() {
      const sliderContainer = document.querySelector(".slider-container");
      const slideRight = document.querySelector(".right-slide");
      const slideLeft = document.querySelector(".left-slide");
      const upButton = document.querySelector(".up-button");
      const downButton = document.querySelector(".down-button");
      const slidesLength = this.mainSlider.length;

      slideLeft.style.top = `-${(slidesLength - 1) * 92}vh`;

      upButton.addEventListener("click", () => changeSlide("up"));
      downButton.addEventListener("click", () => changeSlide("down"));

      const changeSlide = (direction) => {
        const sliderHeight = sliderContainer.clientHeight;
        if (direction === "up") {
          this.activeSlideIndex++;
          if (this.activeSlideIndex > slidesLength - 1) {
            this.activeSlideIndex = 0;
          }
        } else if (direction === "down") {
          this.activeSlideIndex--;
          if (this.activeSlideIndex < 0) {
            this.activeSlideIndex = slidesLength - 1;
          }
        }

        if (!this.$device.isMobileOrTablet) {
          slideRight.style.transform = `translateY(-${
            this.activeSlideIndex * sliderHeight
          }px)`;
        }

        slideLeft.style.transform = `translateY(${
          this.activeSlideIndex * sliderHeight
        }px)`;
      };
    },
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
      // if (this.$device.isMobile) {
      //   return "";
      // }
      return `<span style="color: #d10475">${s1}</span> <span style="color: #9dea05">${s2}</span>`;
    },
    random_bg_color() {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";

      return bgColor;
    },
  },
  computed: {
    // random_bg_color() {
    //   var x = Math.floor(Math.random() * 256);
    //   var y = Math.floor(Math.random() * 256);
    //   var z = Math.floor(Math.random() * 256);
    //   var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    //   return bgColor;
    // },
  },
  mounted() {
    this.renderComponent();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.mainSliderImage img {
  width: 100% !important;
  height: 100% !important;
}

.mainBannerString {
  padding: 10px;
  font-size: 40px;
  font-weight: bold;
}

body {
  font-family: "Lato", sans-serif;
  height: 100vh;
}

.slider-container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 92vh;
  border-radius: 100% / 0 0 30% 30%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.left-slide {
  height: 100%;
  width: 35%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
  /* top: 0px !important`; */
}

.left-slide > div {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.left-slide h1 {
  font-size: 40px;
  margin-bottom: 10px;
  margin-top: -30px;
}

.right-slide {
  height: 100%;
  position: absolute;
  top: 0;
  left: 35%;
  width: 65%;
  transition: transform 0.5s ease-in-out;
}

.rotateText {
  background: #383232;
  border-radius: 12px;
  padding: 18px;
  border-radius: 0 100px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

.right-slide > div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
}

button {
  background-color: #fff;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
  padding: 15px;
}

button:hover {
  color: #222;
}

button:focus {
  outline: none;
}

.slider-container .action-buttons button {
  position: absolute;
  left: 35%;
  top: 50%;
  /* z-index: 100; */
}

.slider-container .action-buttons .down-button {
  transform: translateX(-100%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.slider-container .action-buttons .up-button {
  transform: translateY(-100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

@media (max-width: 768px) {
  .mainBannerString {
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
  }

  .rotateText {
    transform: rotate(270deg);
    width: 600px;
    margin-left: -24px;
    background: white;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;
  }
  .slider-container {
    border-radius: 220% / 0 0 30% 30%;
  }
}
</style>
