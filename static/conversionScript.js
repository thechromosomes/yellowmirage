// meta script
(function () {
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "htps://connect.facebook.net/en_US/fbevents.js"
  );
  fbq("init", "1996440903892483");
  fbq("track", "PageView");

  //   gumlet
  window.GUMLET_CONFIG = {
    hosts: [
      {
        current: "https://natureroar.com",
        gumlet: "natureroar.gumlet.io",
      },
    ],
    lazy_load: true,
  };
  (function () {
    d = document;
    s = d.createElement("script");
    s.src = "https://cdn.gumlet.com/gumlet.js/2.1/gumlet.min.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
})();
