export const state = () => ({
  BASE_URL: "http://natureroar.com",
//   BASE_URL: "http://localhost:3000",

  pageLoader: false,
});

export const actions = {
  ApiCall(context, payload) {
    if (!payload.params.noLoader) {
      context.commit("updatePageLoader", { display: true });
    }
    let request = payload.params;
    var authOptions = {
      method: payload.method,
      url: context.state.BASE_URL + payload.url,
      headers: {
        "Content-Type": "application/json",
      },
      data: request,
    };

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
};
