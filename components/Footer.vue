<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <address>
              <p>Village bajun near golu mandir.</p>
              <p class="mb-4">district, Nainital Uttrakhand</p>
              <a href="mailto:support@natureroar.com" class="footer-link"
                >support@natureroar.com</a
              >
              <div class="d-flex-custom align-items-center">
                <p class="mr-4 mb-0">
                  <a href="tel:9837176793" class="Blondie"
                    ><i class="mdi mdi-cellphone-basic"></i>9837176793</a
                  >
                </p>
              </div>
              <div class="d-flex-custom align-items-center">
                <p class="mr-4 mb-0">
                  <a href="tel:7466056737" class="Blondie"
                    ><i class="mdi mdi-cellphone-basic"></i>7466056737</a
                  >
                </p>
              </div>
            </address>
          </div>
          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-6">
                <div class="social-icons">
                  <h6 class="footer-title font-weight-bold">Explore</h6>
                  <div class="d-flex-custom">
                    <NuxtLink to="/" title="home"
                      ><i class="mdi mdi-home-assistant"></i
                    ></NuxtLink>
                    <NuxtLink to="/contactus" title="contact us"
                      ><i class="mdi mdi-email"></i
                    ></NuxtLink>
                    <NuxtLink to="/aboutus" title="about us"
                      ><i class="mdi mdi-information-variant"></i
                    ></NuxtLink>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="social-icons">
                  <h6 class="footer-title font-weight-bold">Social Share</h6>
                  <div class="d-flex-custom">
                    <a href="https://twitter.com/RoarNature" target="_BLANK"><i class="mdi mdi-twitter"></i></a>
                    <a href="https://www.facebook.com/thenatureroar/" target="_BLANK"><i class="mdi mdi-facebook-box"></i></a>
                    <a href="https://www.instagram.com/thenatureroar/" target="_BLANK"><i class="mdi mdi-instagram"></i></a>
                  </div>
                </div>
              </div>
              <section class="bottomStickBotton">
                <a href="https://wa.link/8jqqha" target="blank"
                  ><img src="@/static/assets/images/whatsApp.png" />
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    // scroll to top
    this.$nextTick(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500);
    });
  },
};
</script>

<style scoped>
.bottomStickBotton {
  position: fixed;
  bottom: 0px;
  right: 0;
}

.bottomStickBotton img {
  width: 79px;
  padding: 15px;
}
.Blondie {
  color: #fff;
}
</style>
