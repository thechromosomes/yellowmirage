<template>
  <div data-trustmary-widget="wDAtoNmLK"></div>
</template>
<script>
export default {
  head: {
    script: [
      {
        src: "https://apps.elfsight.com/p/platform.js",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://cdn.rawgit.com/stevenmonson/googleReviews/master/google-places.css",
      },
    ],
  },

  methods: {
    removeAncherTag() {
      let tags = this.$el.querySelectorAll("a");
      for (var i = 0; i < tags.length; i++) {
        console.log(tags[i].getAttribute("href"));
        if (tags[i].getAttribute("href").includes("https://elfsight.com")) {
          console.log("tags", tags[i]);
          tags[i].style.display = "none";
        }
      }
      return;
    },

    renderScript() {
      (function (w, d, s, o, r, js, fjs) {
        w[r] =
          w[r] ||
          function () {
            (w[r].q = w[r].q || []).push(arguments);
          };
        w[r]("app", "7f3AH4QjMm");
        if (d.getElementById(o)) return;
        (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
        js.id = o;
        js.src = "https://embed.trustmary.com/embed.js";
        js.async = 1;
        fjs.parentNode.insertBefore(js, fjs);
      })(window, document, "script", "trustmary-embed", "tmary");
    },
  },

  mounted() {
    this.renderScript();

    let rerender = () => {
      var aTags = this.$el.querySelectorAll("div");
      var searchText = "Powered by";
      var found;
      if (aTags.length > 0) {
        for (var i = 0; i < aTags.length; i++) {
          if (aTags[i].textContent == searchText) {
            found = aTags[i];
            found.style.display = "none";
            break;
          }
        }
        return;
      } else {
        setTimeout(() => {
          rerender();
        }, 1000);
      }
    };
    rerender();
  },
};
</script>
