<template>
  <div>
    <main class="main">
      <div class="container">
        <div class="card" v-for="(item, index) in images" :key="index">
          <div class="card-image">
            <a :src="item.image" @click.prevent="showSource(index)">
              <img :src="item.image" :alt="item.image" />
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

    head() {
    return {
      // seo tags
      title:
        "nature roar image gallery | home-stay | birdwatching | eco-tourism | peaceful-living",
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
        {
          hid: "og:image",
          property: "og:image",
          content: "/logo.png",
        },
      ],
    };
  },

    jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "Gallery",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://natureroar.com/ImageGallery",
      },
      headline: "Nature Roar Image Gallery",
      description: "We are trying eco-friendly and peaceful living",
      image: this.images,
      author: {
        "@type": "Person",
        name: "Nature Roar",
      },
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
