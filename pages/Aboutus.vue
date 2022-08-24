<template>
  <div>
    <section class="page-section" id="about">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading">
            Nature roar
          </h2>
          <h3 class="section-subheading text-muted">
            What to be part of Adamant Story
          </h3>
        </div>
        <ul class="timeline">
          <li>
            <div class="timeline-image">
              <img
                class="rounded-circle img-fluid"
                src="@/static/assets/images/rocket.png"
                alt="..."
              />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>2009-2011</h4>
                <h4 class="subheading">Our Humble Beginnings</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  Every big castle was once started with a single block; despise
                  no small beginnings. A little step taken every day builds up
                  the hope of greater accomplishments. Do something every day
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <img
                class="rounded-circle img-fluid"
                src="@/static/assets/images/baby.png"
                alt="..."
              />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>March 2011</h4>
                <h4 class="subheading">An Agency is Born</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  The idea that one can go through life without conflict or
                  issues arising is unrealistic. Some might dream of a
                  frictionless ride through the world as the ideal journey, but
                  without some form of pushback, growth is impossible. It is
                  these problems that we face which build our character, engage
                  our creativity and build humility.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-image">
              <img
                class="rounded-circle img-fluid"
                src="@/static/assets/images/service.png"
                alt="..."
              />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>December 2015</h4>
                <h4 class="subheading">Transition to Full Service</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  A lot of people resist transition and therefore never allow
                  themselves to enjoy who they are. Embrace the change, no
                  matter what it is; once you do, you can learn about the new
                  world you’re in and take advantage of it.
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <h4 style="color: #fff;">
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "About us",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://natureroar.com/aboutus",
      },
      headline: "About Nature Roar",
      description: "We are trying eco-friendly and peaceful living",
      image: "/logo.png",
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
};
</script>

<style scoped>
.timeline {
  position: relative;
  padding: 0;
  list-style: none;
}
.timeline:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40px;
  width: 1px;
  margin-left: -1.5px;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='6' stroke-linecap='square'/%3e%3c/svg%3e");
}
.timeline > li {
  position: relative;
  min-height: 50px;
  margin-bottom: 50px;
}
.timeline > li:after,
.timeline > li:before {
  display: table;
  content: " ";
}
.timeline > li:after {
  clear: both;
}
.timeline > li .timeline-panel {
  position: relative;
  float: right;
  width: 100%;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li .timeline-panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li .timeline-panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li .timeline-image {
  position: absolute;
  z-index: 1;
  left: 0;
  width: 80px;
  height: 80px;
  margin-left: 0;
  text-align: center;
  color: white;
  border: 7px solid #e9ecef;
  border-radius: 100%;
  background-color: #4873f2;
}
.timeline > li .timeline-image h4,
.timeline > li .timeline-image .h4 {
  font-size: 10px;
  line-height: 14px;
  margin-top: 12px;
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li:last-child {
  margin-bottom: 0;
}
.timeline .timeline-heading h4,
.timeline .timeline-heading .h4 {
  margin-top: 0;
  color: inherit;
}
.timeline .timeline-heading h4.subheading,
.timeline .timeline-heading .subheading.h4 {
  text-transform: none;
}
.timeline .timeline-body > ul,
.timeline .timeline-body > p {
  margin-bottom: 0;
}
#about {
  padding-top: 50px;
}
@media (min-width: 768px) {
  .timeline:before {
    left: 50%;
  }
  .timeline > li {
    min-height: 100px;
    margin-bottom: 100px;
  }
  .timeline > li .timeline-panel {
    float: left;
    width: 41%;
    padding: 0 20px 20px 30px;
    text-align: right;
  }
  .timeline > li .timeline-image {
    left: 50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
  }
  .timeline > li .timeline-image h4,
  .timeline > li .timeline-image .h4 {
    font-size: 13px;
    line-height: 18px;
    margin-top: 16px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    float: right;
    padding: 0 30px 20px 20px;
    text-align: left;
  }
}
@media (min-width: 992px) {
  .timeline > li {
    min-height: 150px;
  }
  .timeline > li .timeline-panel {
    padding: 0 20px 20px;
  }
  .timeline > li .timeline-image {
    width: 150px;
    height: 150px;
    margin-left: -75px;
  }
  .timeline > li .timeline-image h4,
  .timeline > li .timeline-image .h4 {
    font-size: 18px;
    line-height: 26px;
    margin-top: 30px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    padding: 0 20px 20px;
  }
}
@media (min-width: 1200px) {
  .timeline > li {
    min-height: 170px;
  }
  .timeline > li .timeline-panel {
    padding: 0 20px 20px 100px;
  }
  .timeline > li .timeline-image {
    width: 170px;
    height: 170px;
    margin-left: -85px;
  }
  .timeline > li .timeline-image h4,
  .timeline > li .timeline-image .h4 {
    margin-top: 40px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    padding: 0 100px 20px 20px;
  }
}

/* .page-section {
  padding: 6rem 0;
} */
.page-section h2.section-heading,
.page-section .section-heading.h2 {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}
.page-section h3.section-subheading,
.page-section .section-subheading.h3 {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  section {
    padding: 9rem 0;
  }
}

.text-center {
  text-align: center !important;
}

.page-section h2.section-heading,
.page-section .section-heading.h2 {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}
.text-uppercase {
  text-transform: uppercase !important;
}

.page-section h3.section-subheading,
.page-section .section-subheading.h3 {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 4rem;
}

.text-muted {
  --bs-text-opacity: 1;
  color: #6c757d !important;
}

p {
  line-height: 1.75;
}
/* @media (min-width: 1400px) .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
  max-width: 1320px;
}
@media (min-width: 1200px) .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
  max-width: 1140px;
}
@media (min-width: 992px) .container-lg,
  .container-md,
  .container-sm,
  .container {
  max-width: 960px;
}
@media (min-width: 768px) .container-md, .container-sm, .container {
  max-width: 720px;
}
@media (min-width: 576px) .container-sm, .container {
  max-width: 540px;
} */
.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
user agent stylesheet div {
  display: block;
}
#about .section-heading {
  color: #000;
  text-transform: capitalize;
  font-weight: bold;
}
#about h4 {
  color: #000;
  font-weight: bold;
  font-size: 20px;
}
</style>
