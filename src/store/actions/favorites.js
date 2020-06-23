import { isEmpty } from "lodash";
import TYPES from "../types";
import mutations from "../mutations";

export const getAllFavorites = () => (dispatch) => {
  dispatch(mutations[TYPES.GET_ALL_FAVORITES_PENDING]());
  try {
    dispatch(mutations[TYPES.GET_ALL_FAVORITES_SUCCESS]());
  } catch (e) {
    dispatch(mutations[TYPES.GET_ALL_FAVORITES_FAIL](e));
  }
};

export const addFavorite = (data) => (dispatch) => {
  dispatch(mutations[TYPES.ADD_FAVORITE_PENDING]());
  try {
    dispatch(mutations[TYPES.ADD_FAVORITE_SUCCESS](data));
    return data;
  } catch (e) {
    dispatch(mutations[TYPES.ADD_FAVORITE_FAIL](e));
  }
};

export const updateFavorite = (data) => async (dispatch, getState) => {
  dispatch(mutations[TYPES.UPDATE_FAVORITE_PENDING]());
  const state = await getState();
  const doesFavoriteExist = state.favorites.characters?.find(
    (item) => parseInt(item.id) === parseInt(data.id)
  );

  try {
    if (isEmpty(doesFavoriteExist))
      return Promise.reject("We couldn't update the favorite :( ");
    else dispatch(mutations[TYPES.UPDATE_FAVORITE_SUCCESS](data));
    return data;
  } catch (e) {
    dispatch(mutations[TYPES.UPDATE_FAVORITE_FAIL](e));
  }
};

export const deleteFavorite = (id) => (dispatch) => {
  dispatch(mutations[TYPES.DELETE_FAVORITE_PENDING]());
  try {
    dispatch(mutations[TYPES.DELETE_FAVORITE_SUCCESS]({ id }));
    return id;
  } catch (e) {
    dispatch(mutations[TYPES.DELETE_FAVORITE_FAIL](e));
    return e;
  }
};
