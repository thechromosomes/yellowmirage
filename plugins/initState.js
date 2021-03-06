export default async (context) => {
  try {
    let userEmail = $cookies.get("nature_roar_user") || null;
    let userToken = $cookies.get("nature_roar_user_token") || null;
    let user = null;

    if (userToken && userEmail) {
      let userData = await context.store.dispatch("ApiCall", {
        method: "get",
        url: `/getUserData`,
        type: "protected",
        params: { userToken, userEmail },
      });

      user = userData.data[0];

      context.store.commit("updateUserCreds", {
        userToken,
        userEmail,
        user,
      });
    }
  } catch (error) {
    console.log("Error from the initState plugin", error);
  }
};
