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

  // google conversion code
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "AW-10833597163");

  gtag("config", "AW-10833597163/ndzLCJzW0MUDEOul7q0o", {
    phone_conversion_number: "9837176793",
  });
})();
