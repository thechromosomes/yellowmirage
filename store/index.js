export const state = () => ({
  // BASE_URL: "https://natureroar.com",
  BASE_URL: "http://localhost:3000",
  // BASE_URL: "https://cry-chris-civic-multi.trycloudflare.com",

  RAZORPAY_KEY: "rzp_test_vfDjnIFxp14DhZ",
  INSTA_TOKEN:
    "IGQVJVM3hhVl9ud0t6b2pHa1RUSlZAobnFEWnIwVnRmdFJsS0xGNE1hQXpGZAExaQjdERVMxWFlnVk4wZAlM2WkRDeGpZAcUFUUkhDd3lXLTA0ZA0EyeUdwbmdRX0ctRUN5OTRiQW1BMTRoVy03NC1nV0llMQZDZD",

  pageLoader: false,
  userEmail: null,
  userToken: null,
  user: null,
});

export const actions = {
  ApiCall(context, payload) {
    if (!payload.params.noLoader) {
      context.commit("updatePageLoader", { display: true });
    }
    var authOptions = {
      method: payload.method,
      url: context.state.BASE_URL + payload.url,
      headers: {
        "Content-Type": "application/json",
      },
      data: payload.params,
    };

    // add headers for protected routes
    if (payload && payload.type && payload.type == "protected") {
      authOptions.headers[
        "authorization"
      ] = `bearer ${payload.params.userToken}`;
    }

    return new Promise((resolve, reject) => {
      this.$axios(authOptions)
        .then((response) => {
          context.commit("updatePageLoader", { display: false });
          resolve(response.data);
        })
        .catch((error) => {
          context.commit("updatePageLoader", { display: false });
          reject(error);
        });
    });
  },
};

export const mutations = {
  // update loader status
  updatePageLoader(state, { display }) {
    state.pageLoader = display;
  },

  updateUserCreds(state, payload) {
    state.userToken = payload.userToken;
    state.userEmail = payload.userEmail;
    state.user = payload.user;
  },
};
