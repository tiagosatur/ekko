import TYPES from "../store/types";
import mutations from "../store/mutations";

const reduxMiddlewares = {
  addFavoriteMiddlewareInterceptor: ({ getState, dispatch }) => (
    next
  ) => async (action) => {
    const result = next(action);
    if (
      action.type === TYPES.ADD_FAVORITE_SUCCESS ||
      action.type === TYPES.DELETE_FAVORITE_SUCCESS
    ) {
      dispatch(mutations[TYPES.TOGGLE_FAVORITE](action.payload));
    }
    return Promise.resolve(result);
  },
};

export default reduxMiddlewares;
