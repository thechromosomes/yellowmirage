export const state = () => ({
  BASE_URL: "http://natureroar.com",
  // BASE_URL: "http://localhost:3000",
  INSTA_TOKEN:
    "IGQVJVM3hhVl9ud0t6b2pHa1RUSlZAobnFEWnIwVnRmdFJsS0xGNE1hQXpGZAExaQjdERVMxWFlnVk4wZAlM2WkRDeGpZAcUFUUkhDd3lXLTA0ZA0EyeUdwbmdRX0ctRUN5OTRiQW1BMTRoVy03NC1nV0llMQZDZD",

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
