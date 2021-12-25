<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <address>
              <p>143 castle road 517</p>
              <p class="mb-4">district, kiyev port south Canada</p>
              <div class="d-flex align-items-center">
                <p class="mr-4 mb-0">+3 123 456 789</p>
                <a href="mailto:info@yourmail.com" class="footer-link"
                  >info@yourmail.com</a
                >
              </div>
              <div class="d-flex align-items-center">
                <p class="mr-4 mb-0">+1 222 345 342</p>
                <a href="mailto:Marshmallow@yourmail.com" class="footer-link"
                  >Marshmallow@yourmail.com</a
                >
              </div>
            </address>
          </div>
          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-6">
                <div class="social-icons">
                  <h6 class="footer-title font-weight-bold">Explore</h6>
                  <div class="d-flex">
                    <NuxtLink to="/" title="home"
                      ><i class="mdi mdi-home-assistant"></i
                    ></NuxtLink>
                    <NuxtLink to="/contact" title="contact us"
                      ><i class="mdi mdi-email"></i
                    ></NuxtLink>
                    <NuxtLink to="/abouttus" title="about us"
                      ><i class="mdi mdi-information-variant"></i
                    ></NuxtLink>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="social-icons">
                  <h6 class="footer-title font-weight-bold">Social Share</h6>
                  <div class="d-flex">
                    <a href="#"><i class="mdi mdi-github-circle"></i></a>
                    <a href="#"><i class="mdi mdi-facebook-box"></i></a>
                    <a href="#"><i class="mdi mdi-twitter"></i></a>
                    <a href="#"><i class="mdi mdi-dribbble"></i></a>
                  </div>
                </div>
              </div>
              <section class="bottomStickBotton">
                <a href="https://wa.me/message/9988998898" target="blank"
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
</style>