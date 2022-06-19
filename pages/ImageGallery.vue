<template>
  <div>
    <main class="main">
      <div class="container">
        <div class="card" v-for="(item, index) in images" :key="index">
          <div class="card-image">
            <a :src="item.image" @click.prevent="showSource(index)">
              <img :src="item.image" alt="Image Gallery" />
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import hotelImage from "@/static/hotelImage.json";

export default {
  data() {
    return {
      newItem: { name: "Name of new IMG", path: "Path to new IMG" },
      images: hotelImage.reverse(),
    };
  },

  methods: {
    shuffle: function () {
      Gallery.images.sort(function (a, b) {
        return 0.5 - Math.random();
      });
    },
    showSource: function (index) {
      this.$swal.fire({
        imageUrl: this.images[index].image,
        button: "Nice",
        // timer: 10000,
        backdrop: `rgba(33, 35, 241, 0.65)`,
        showClass: {
          popup: "popUpClassForImage",
        },
      });
    },
  },
};
</script>

<style scoped>
.sweet-alert {
  width: 90% !important;
  background: red !important;
}

.container {
  max-width: 80rem;
  width: 100%;
  padding: 4rem 2rem;
  margin: 0 auto;
}

.main .container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
}
.main .card {
  color: #252a32;
  border-radius: 2px;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
}
.main .card-image {
  position: relative;
  display: block;
  width: 100%;
  padding-top: 70%;
  background: #ffffff;
}
.main .card-image img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 600px) {
  .main .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
}
</style>
