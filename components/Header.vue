<template>
  <nav class="navbar navbar-expand-lg " :class="[scrollPosition > 30 ? 'fixed' : '']">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img src="@/static/logo.png" alt="nature roar"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"><i class="mdi mdi-menu"> </i></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <div
          class="
            d-lg-none d-flex
            justify-content-between
            px-4
            py-3
            align-items-center
          "
        >
          <img
            src="@/static/logo.png"
            class="logo-mobile-menu"
            alt="logo"
          />
          <a href="javascript:;" class="close-menu"
            ><i class="mdi mdi-close"></i
          ></a>
        </div>
        <ul class="navbar-nav ml-auto align-items-center">
          <li class="nav-item active">
            <a class="nav-link" href="#home"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonial">Testimonial</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn btn-success" href="#contact">174-394-9560</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data(){
    return{
       scrollPosition: null,
    }
  },
  async mounted() {
    // for sticky header
    window.addEventListener("scroll", this.updateScroll);
  },
  methods:{
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  }
}
</script>
<style scoped>
nav.navbar.navbar-expand-lg.fixed {
    top: 0;
    position: fixed;
    z-index: 99;
}
.navbar{ padding: 0px;}
.navbar .navbar-brand img {
    width: 125px;
}
@media only screen and (max-width: 767px) {
.navbar .navbar-brand{ padding: 0px 15px;}
.navbar .navbar-brand img {
    width: 105px;
}
.sidebar-overlay #mobile-menu-overlay{ top: 0;}
.navbar .navbar-nav {
    padding: 0px 0px;}
    .navbar .navbar-nav .nav-item{ padding: 0px 15px;border-bottom: 1px solid #ccc;}
    .navbar .navbar-nav .nav-item:last-child{ margin-top: 30px; border: 0px;}

}
</style>