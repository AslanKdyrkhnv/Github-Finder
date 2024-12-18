const GithubReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_USERS":
      return {
        ...state,
        loading: false,
        users: [],
      };
    // case "GET_USER":
    //   return {
    //     ...state,
    //     loading: false,
    //     user: action.payload,
    //   };
    // case "GET_REPO":
    //   return {
    //     ...state,
    //     loading: false,
    //     repos: action.payload,
    //   };

    case "GET_USER_AND_REPOS":
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        repos: action.payload.repos,
      };
    case "SET_LOAD":
      return {
        ...state,
        loading: true,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default GithubReducer;
