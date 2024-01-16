<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <address>
              <p>Village bajun near golu mandir.</p>
              <p class="mb-4">district, Nainital Uttrakhand</p>
              <a href="mailto:thenatureroar@gmail.com" class="footer-link"
                >thenatureroar@gmail.com</a
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
          <div class="col-sm-8">
            <div class="row">
              <div class="col-sm-6">
                <div class="social-icons">
                  <h6 class="footer-title font-weight-bold">Explore</h6>
                  <div class="d-flex-custom mainFooterLinks">
                    <NuxtLink to="/" title="home">Home</NuxtLink>
                    <NuxtLink to="/contactus" title="contact us"
                      >Contact us</NuxtLink
                    >
                    <NuxtLink to="/aboutus" title="about us">About us</NuxtLink>

                    <NuxtLink to="/faq" title="FAQ(s)">FAQs</NuxtLink>

                    <NuxtLink to="/privacy-policy" title="Privacy policy"
                      >Privacy policy</NuxtLink
                    >
                    <NuxtLink to="/GuestAndCancellation" title="Guest policy"
                      >Guest & cancellation policy</NuxtLink
                    >
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="social-icons">
                  <h6 class="footer-title font-weight-bold">Social Share</h6>
                  <div class="d-flex-custom">
                    <a href="https://twitter.com/TheNatureRoar/" target="_BLANK"
                      ><i class="mdi mdi-twitter"></i
                    ></a>
                    <a
                      href="https://www.facebook.com/natureroar.official/"
                      target="_BLANK"
                      ><i class="mdi mdi-facebook-box"></i
                    ></a>
                    <a
                      href="https://www.instagram.com/thenatureroar/"
                      target="_BLANK"
                      ><i class="mdi mdi-instagram"></i
                    ></a>
                  </div>
                </div>
              </div>
              <section class="bottomStickBotton">
                <a href="https://wa.me/message/237LPBBAGNCUE1" target="blank"
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
  bottom: 85px;
  right: 8px;
}

.bottomStickBotton img {
  width: 90px;
  padding: 15px;
}
.Blondie {
  color: #fff;
}
.mainFooterLinks a {
  color: #fff;
  display: block;
  text-decoration: none;
  padding: 2px;
}

@media only screen and (max-width: 768px) {
  .bottomStickBotton {
    position: fixed;
    bottom: 60px;
    right: 0px;
  }
  .bottomStickBotton img {
    width: 80px;
  }
}
</style>
