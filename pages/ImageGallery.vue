<template>
  <div>
    <link
      href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!------ Include the above in your HEAD tag ---------->

    <!--www.ebubekirbastama.com-->
    <div id="css3dimageslider" class="transparency">
      <ul>
        <li>
          <img
            style="width: 100%; height: 100%"
            src="https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625_960_720.jpg"
          />
        </li>
        <li>
          <img
            style="width: 100%; height: 100%"
            src="https://picsum.photos/id/31/500/500"
          />
        </li>
        <li>
          <img
            style="width: 100%; height: 100%"
            src="https://picsum.photos/id/3/500/500"
          />
        </li>
        <li>
          <img
            style="width: 100%; height: 100%"
            src="https://picsum.photos/id/32/500/500"
          />
        </li>
      </ul>
    </div>
    <ul id="css3dimagePager">
      <li class="list-group-item list-group-item-success">
        Güvenli İşletim Sistemi
      </li>
      <li class="list-group-item list-group-item-danger">Solid Works</li>
      <li class="list-group-item list-group-item-warning">Akıllı Ev sistemi</li>
      <li class="list-group-item list-group-item-primary">Türkiye</li>
    </ul>
  </div>
</template>
<script>
export default {
  mounted() {
    $(document).ready(function () {
      $("#css3dimagePager li").click(function () {
        var rotateY = $(this).index() * -90;
        $("#css3dimageslider ul").css({
          "-webkit-transform": "rotateY(" + rotateY + "deg)",
          "-moz-transform": "rotateY(" + rotateY + "deg)",
          "-ms-transform": "rotateY(" + rotateY + "deg)",
          transform: "rotateY(" + rotateY + "deg)",
        });
        $("#css3dimagePager li").removeClass("active");
        $(this).addClass("active");
      });
      $("#css3dtransparency").click(function () {
        $("#css3dimageslider").toggleClass("transparency");
        $(this).toggleClass("active");
      });
    });
  },
};
</script>

<style scoped>
#css3dimagePager,
#css3dtransparency {
  text-align: center;
  position: relative;
  z-index: 11;
  padding: 0 0 10px;
  margin: 0;
}
#css3dimagePager li {
  padding-right: 2em;
  display: inline-block;
  cursor: pointer;
}
#css3dimagePager li.active,
#css3dtransparency.active {
  font-weight: bold;
}
#css3dimageslider {
  -webkit-perspective: 1000;
  -moz-perspective: 1000px;
  -ms-perspective: 1000;
  perspective: 1000;
  -webkit-perspective-origin: 50% 100px;
  -moz-perspective-origin: 50% 100px;
  -ms-perspective-origin: 50% 100px;
  perspective-origin: 50% 100px;
  margin: 40px auto 20px auto;
  width: 100%;
  height: 350px;
}
#css3dimageslider ul {
  position: relative;
  margin: 0 auto;
  height: 281px;
  width: 450px;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 50% 100px 0;
  -moz-transform-origin: 50% 100px 0;
  -ms-transform-origin: 50% 100px 0;
  transform-origin: 50% 100px 0;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
#css3dimageslider ul li {
  position: absolute;
  height: 281px;
  width: 450px;
  padding: 0px;
}
#css3dimageslider ul li:nth-child(1) {
  -webkit-transform: translateZ(225px);
  -moz-transform: translateZ(225px);
  -ms-transform: translateZ(225px);
  transform: translateZ(225px);
}
#css3dimageslider ul li:nth-child(2) {
  -webkit-transform: rotateY(90deg) translateZ(225px);
  -moz-transform: rotateY(90deg) translateZ(225px);
  -ms-transform: rotateY(90deg) translateZ(225px);
  transform: rotateY(90deg) translateZ(225px);
}
#css3dimageslider ul li:nth-child(3) {
  -webkit-transform: rotateY(180deg) translateZ(225px);
  -moz-transform: rotateY(180deg) translateZ(225px);
  -ms-transform: rotateY(180deg) translateZ(225px);
  transform: rotateY(180deg) translateZ(225px);
}
#css3dimageslider ul li:nth-child(4) {
  -webkit-transform: rotateY(-90deg) translateZ(225px);
  -moz-transform: rotateY(-90deg) translateZ(225px);
  -ms-transform: rotateY(-90deg) translateZ(225px);
  transform: rotateY(-90deg) translateZ(225px);
}
#css3dimageslider.transparency img {
  opacity: 0.7;
}
</style>