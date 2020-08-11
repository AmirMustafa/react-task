// auth Reducer will basically check that whether user is logged in or not - use node's /api/current user route
export const authReducer = (state = null, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "GET_USER":
      return action.payload || false; // false when user is not logged in
    default:
      return state;
  }
};
