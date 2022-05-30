<template>
  <div>
    <div class="wrapper" v-for="(item, index) in hotelData" :key="index">
      <nuxt-link
        :to="{
          path: '/room-description',
          query: {
            room_name: item.room_name,
            room_category: item.room_category,
          },
        }"
      >
        <h4>{{ item.room_name }}</h4>
        <div class="image i1">
          <img :src="item.image" />
        </div>
        <div class="details">
          <h1>
            <em>{{ item.room_category }}</em>
          </h1>
          <h5>Nature Roar</h5>
          <p>1 Day - 1 Night</p>
        </div>
        <h3>₹ {{ item.price }}</h3>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import hotelData from "@/static/hotelData.json";

export default {
  data() {
    return {
      hotelData: hotelData,
    };
  },

  head() {
    return {
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
};
</script>

<style scoped>
.wrapper {
  float: left;
  width: 30%;
  min-width: 300px;
  background-color: #f1f1f1;
  margin: 1.5%;
  padding: 2em 1em;
  box-sizing: border-box;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.24);
  text-align: center;
}
.wrapper > h1 {
  font-family: "Lato", sans-serif;
  font-weight: 200;
  font-size: 1.5em;
  letter-spacing: 0.15em;
  color: #333;
}
.details {
  width: 95%;
  margin: 0 auto 2em;
  padding-top: 10.5em;
  padding-bottom: 1em;
  background-color: #ffebc8;
  color: #333;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
  transition: all ease-in 0.15s;
}

.wrapper:hover .details {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 5px rgba(0, 0, 0, 0.22);
  transform: translate(0px, -2px) scale(1.01);
}

.details > h1 {
  font-family: "Playfair Display";
  font-size: 1em;
}
.details > h2 {
  font-family: sans-serif;
  font-size: 1.4em;
  font-weight: 200;
  letter-spacing: 0.1em;
}
.details > p {
  font-family: sans-serif;
  font-size: 1em;
  font-weight: 200;
}

.image {
  position: relative;
  z-index: 2;
  width: 85%;
  height: 250px;
  margin: 0 auto -10em;
  background-size: cover;
  background-position: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.24);
  transition: all ease-in 0.15s;
}
.wrapper:hover .image {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transform: translate(0px, -3px) scale(1.02);
}

@media screen and (max-width: 1000px) {
  .wrapper {
    width: 47%;
  }
}
@media screen and(max-width:700px) {
  .wrapper {
    float: none;
    width: 70%;
    margin: 1em auto;
  }
}
@media screen and(max-width:700px) {
  .wrapper {
    float: none;
    width: 70%;
    margin: 1em auto;
  }
}
</style>
