<template>
  <div>
    <button class="btn btn-success" id="rzp-button1">Confirm booking</button>
  </div>
</template>

<script>
export default {
  props: ["user"],
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
      handler: async () => {
        let statusResponse = await this.$store.dispatch("ApiCall", {
          method: "post",
          url: `/status`,
          type: "protected",
          params: {
            name: this.$store.state.user?.name,
            email: this.$store.state.user?.email,
            contact: this.$store.state.user?.phone,
            numberOfGuest: this.user.numberOfGuest,
            type: this.user.type,
            category: this.user.category,
            paymentID: id,
            dateFrom: this.user.dateFrom,
            dateTo: this.user.dateTo,
            category: this.$store.state.singleRoomData.room_category,
            type: this.$store.state.singleRoomData.room_name,
          },
        });
        if (statusResponse.status) {
          this.$swal.fire({
            text: `Voila!
          Payment succeed, invoice has been sent to your mail.`,
            footer: '<a href="/showStatus">or check your status</a>',
          });
          this.$parent.closeHandler();
        } else {
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="/showStatus">Why do I have this issue?</a>',
          });
        }
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
    rzp1.on("payment.failed", () => {
      this.$swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="/showStatus">Why do I have this issue?</a>',
      });
    });

    document.getElementById("rzp-button1").onclick = (e) => {
      if (this.user && !this.user.dateFrom && !this.user.dateTo) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "please select booking date!",
        });
        return;
      }
      if (this.user && !this.user.numberOfGuest) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please select the number of guest!",
        });
        return;
      }
      rzp1.open();
      e.preventDefault();
    };
  },
};
</script>
