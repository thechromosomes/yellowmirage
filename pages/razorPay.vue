<template>
  <div>
    <h1>hello from razor pay</h1>
    <!-- <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8B3WCQ&" height="0" width="0"  title="gtm"></iframe> -->
    <button id="rzp-button1">Pay</button>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://checkout.razorpay.com/v1/checkout.js",
        },
      ],
    };
  },
  async mounted() {
    let response = await this.$store.dispatch("ApiCall", {
      method: "post",
      url: `/getrazorpayid`,
      type: "protected",
      params: {
        name: this.$store.state.user?.name,
        email: this.$store.state.user?.email,
        contact: this.$store.state.user?.phone,
      },
    });
    let { id, currency, amount } = response;
    var options = {
      key: this.$store.state.RAZORPAY_KEY,
      amount: amount,
      currency: currency,
      name: "Nature Roar",
      description: "Token money to to confirm booking.",
      image: "/static/logo.png",
      order_id: id,
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        // verify razorpay payment
      },
      prefill: {
        name: this.$store.state.user.name,
        email: this.$store.state.user.email,
        contact: this.$store.state.user.phone,
      },
      notes: {
        address: "Village bajun near golu mandir, district Nainital Uttrakhand",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    document.getElementById("rzp-button1").onclick = function (e) {
      rzp1.open();
      e.preventDefault();
    };
  },
};
</script>
