<template>
  <nav
    class="navbar navbar-expand-lg"
    :class="[scrollPosition > 30 ? 'fixed' : '']"
  >
    <!-- vue loader -->
    <div class="page-loader" v-show="$store.state.pageLoader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="container">
      <a class="navbar-brand" href="/"
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
          class="d-lg-none d-flex justify-content-between px-4 py-3 align-items-center"
        >
          <img src="@/static/logo.png" class="logo-mobile-menu" alt="logo" />
          <a href="javascript:;" class="close-menu"
            ><i class="mdi mdi-close"></i
          ></a>
        </div>
        <ul class="navbar-nav ml-auto align-items-center">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contactus">Contact</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/aboutus">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/imagegallery">Gallery</NuxtLink>
          </li>

          <!-- main-menu -->
          <template v-if="$store.state.userToken != null">
            <li class="nav-item">
              <a class="nav-link" href="/showStatus">Status</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contactus">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/logout">Logout</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <a class="nav-link" href="/login">login</a>
            </li>
          </template>
          <li class="nav-item">
            <NuxtLink class="nav-link btn btn-success" to="/rooms">Book online</NuxtLink>
          </li>
          <li class="nav-item">
            <a class="nav-link btn btn-success" href="tel:7466056737"
              >7466056737</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      scrollPosition: null,
    };
  },
  async mounted() {
    // for sticky header
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>
<style scoped>
nav.navbar.navbar-expand-lg.fixed {
  top: 0;
  position: fixed;
  z-index: 99;
}
.navbar {
  padding: 0px;
}
.navbar .navbar-brand img {
  width: 125px;
}
@media only screen and (max-width: 767px) {
  .navbar .navbar-brand {
    padding: 0px 15px;
  }
  .navbar .navbar-brand img {
    width: 105px;
  }
  .sidebar-overlay #mobile-menu-overlay {
    top: 0;
  }
  .navbar .navbar-nav {
    padding: 0px 0px;
  }
  .navbar .navbar-nav .nav-item {
    padding: 0px 15px;
    border-bottom: 1px solid #ccc;
  }
  .navbar .navbar-nav .nav-item:last-child {
    margin-top: 30px;
    border: 0px;
  }
}

/* loader css */
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
