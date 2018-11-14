const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOG_USER_IN":
      return action.user;
    case "LOG_USER_OUT":
      return null;
    default:
      return state;
  }
};

export default userReducer;
