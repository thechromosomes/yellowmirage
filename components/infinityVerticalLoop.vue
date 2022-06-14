<template>
  <div>
    <div class="gallery">
      <div class="block-33 display--inline-top">
        <div class="gutter relative">
          <div class="gallery-h">
            <div
              class="gallery-image relative"
              v-for="(item, index) in renderMainSliderData"
              :key="index"
            >
              <div class="gallery-image__img relative">
                <div class="fill-dimensions cover-img">
                  <img :src="item.image"
                  @load="$parent.toggleHomePageBannerLoaded()"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mainSliderData"],
  computed: {
    renderMainSliderData() {
      var newArr = [].concat(...Array(12).fill(this.mainSliderData));
      return newArr;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.gallery {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.block-33 {
  width: 100%;
}
.display--inline-top {
  display: inline-block;
  vertical-align: top;
}
.fill-dimensions {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.relative {
  position: relative;
}
.cover-img img {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100% !important;
  height: 100%;
  object-fit: cover;
}
.gallery-h {
  animation: marqueeTop 1220s linear infinite;
}

.gallery-image__img {
  padding-top: 50vh;
  max-width: 35vh;
  margin: 0 auto;
}

.gallery-h {
  overflow: hidden;
}

@keyframes marqueeTop {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, calc(-100% + 100vh), 0);
  }
}

@keyframes marqueeBottom {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
