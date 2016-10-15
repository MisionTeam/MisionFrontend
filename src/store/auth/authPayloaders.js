export const authUser = (response) => {
  return {
    isLoggedIn: response.isLoggedIn,
    facebookLogin: {
      status: response.status,
      authResponse: {
        accessToken: response.accessToken,
        expiresIn: response.expiresIn,
        signedRequest: response.signedRequest,
        userID: response.userID
      }
    }
  };
};
