<template>
  <div>
    <div id="Gallery">
      <div id="List">
        <div
          v-for="(img, index) in images"
          id="Item"
          :key="index"
          v-bind:style="{ 'background-image': 'url(' + img.path + ')' }"
        >
          <h1 v-on:click="showSource(index)">{{ img.name }}</h1>
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
      images: [
        {
          name: "Waterfall",
          path: "https://images.pexels.com/photos/70219/pexels-photo-70219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Cherry",
          path: "https://images.pexels.com/photos/175727/pexels-photo-175727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "City",
          path: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "City",
          path: "https://images.pexels.com/photos/10676/Warsaw-center-free-license-CC0.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Clouds",
          path: "https://images.pexels.com/photos/814449/pexels-photo-814449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Firewatch",
          path: "https://cdn.shazoo.ru/197596_fQS3lAIgE1_firewatch_mod_night_final.jpg",
        },
        {
          name: "Forest",
          path: "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Gaming",
          path: "https://images.pexels.com/photos/929831/pexels-photo-929831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Music",
          path: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Northern Lights",
          path: "https://images.pexels.com/photos/1151262/pexels-photo-1151262.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Strawberry",
          path: "https://images.pexels.com/photos/583840/pexels-photo-583840.jpeg?auto=compress&cs=tinysrgb&h=350",
        },
        {
          name: "Street",
          path: "https://images.pexels.com/photos/239520/pexels-photo-239520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Mountain",
          path: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Mountain",
          path: "http://www.opvakantieblog.nl/wp-content/uploads/2017/09/mountains-clouds-forest-fog.jpg",
        },
        {
          name: "TheVerge",
          path: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/10675419/The_Verge_Singularity_Wallpaper_Landscape.0.png",
        },
        {
          name: "Water",
          path: "https://images.pexels.com/photos/103567/pexels-photo-103567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ],
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
        imageUrl: this.images[index].path,
        button: "Nice",
        timer: 10000,
      });
    },
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