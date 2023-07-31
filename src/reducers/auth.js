const initState = {
  account: {},
  positionCallApiCheckAuth: false,
  checkLogin: false,
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_POSITION_CALL_API_CHECK_AUTH":
      return {
        ...state,
        positionCallApiCheckAuth: action.status,
      };
    case "UPDATE_PROPERTIES_USER":
      return {
        ...state,
        account: action.account
      }
    case "RESET_AUTH":
      return initState;
    case "CHECK_LOGIN":
      return {
        ...state,
        checkLogin: action.value
      }
    default:
      return state;
  }
};

export default auth;
