const initState = {
  userData: {
    isLoggedIn: false,
    token: null,
  },
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default userReducer;
