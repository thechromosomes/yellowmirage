export const state = () => ({
  BASE_URL: "https://natureroar.com",
  // BASE_URL: "http://localhost:3001",
  // BASE_URL: "http://nature-roar-staging.ml",

  homePageBannerLoaded: false,

  RAZORPAY_KEY: "rzp_test_vfDjnIFxp14DhZ",
  INSTA_TOKEN:
    "IGQVJXM2N6NGp4dkdpSDdZAaFRISnptZAmwxYUpBWkw3MHBCbnNqR0pzNGtXNjBYMXItZAnVWT2dUTXNZAcWRNOTRuaWFZAQkx6bFhISC1PUzh6M2JZAWlpQV2tNQW83WDVsOF9nTGJvR2xjektzbnNZAZAldrawZDZD",

  pageLoader: false,
  userEmail: null,
  userToken: null,
  user: null,
  singleRoomData: null,
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
  setHomePageBannerLoaded(state, data) {
    state.homePageBannerLoaded = data.status;
  },
  // update loader status
  updatePageLoader(state, { display }) {
    state.pageLoader = display;
  },

  updateUserCreds(state, payload) {
    state.userToken = payload.userToken;
    state.userEmail = payload.userEmail;
    state.user = payload.user;
  },

  // update single room data
  updateSingleRoomDate(state, { payload }) {
    state.singleRoomData = payload;
  },
};
