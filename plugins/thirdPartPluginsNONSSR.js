// main.js
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";

import lightgallery from "lightgallery.js";
import "lightgallery.js/dist/css/lightgallery.min.css";
import "lg-zoom.js";

// Vue.use(lightgallery);
Vue.component("lightgallery",lightgallery);

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);
