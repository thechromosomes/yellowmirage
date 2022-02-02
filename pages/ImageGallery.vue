<template>
  <div>
    <div id="Gallery" v-if="images.length">
      <div id="List">
        <div
          v-for="(img, index) in images"
          id="Item"
          :key="index"
          v-bind:style="{ 'background-image': 'url(' + images[index] + ')' }"
        >
          <h1 v-on:click="showSource(index)"></h1>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      newItem: { name: "Name of new IMG", path: "Path to new IMG" },
      images: [],
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
        title: this.images[index].name,
        imageUrl: this.images[index],
        button: "Nice",
        timer: 10000,
      });
    },
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
/* body {
  background-color: gray;
  margin: 0px;
} */
#List {
  background-color: gray;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 600px;
  margin: 0px;
  margin-top: 100px;
}
#Item {
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: auto;
  height: auto;
  display: block;
  margin: 0px;
  position: relative; /* for #Item button {position: absolute;}*/
}
#Item h1 {
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 50px;
  letter-spacing: 10px;
  text-align: center;
  line-height: 600px;
  background-color: transparent;
  width: 100%;
  height: 600px;
  margin: 0px;
  transition-duration: 0.3s;
  cursor: default;
}
#Item button {
  color: black;
  font-family: "Roboto", sans-serif;
  background-color: white;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  cursor: pointer;
}

#Actions {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  display: flex;
  flex-direction: row;
}
#Shuffle {
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 50px;
  text-align: center;
  background-color: white;
  width: 50%;
  height: 100px;
  border: none;
  cursor: pointer;
  transition-duration: 0.3s;
}
#Add {
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-align: center;
  background-color: gray;
  width: 25%;
  height: 98px;
  border: none;
  cursor: pointer;
  transition-duration: 0.3s;
}

#Shuffle:hover {
  color: white;
  background-color: black;
}
#Item h1:hover {
  letter-spacing: 1px;
  background-color: rgba(0, 0, 0, 0.5);
}

#Item:hover {
  filter: hue-rotate(50deg);
}
</style>