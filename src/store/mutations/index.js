import TYPES from "../types";

export default {
  [TYPES.GET_CHARACTER_PENDING]: () => ({
    type: TYPES.GET_CHARACTER_PENDING,
  }),
  [TYPES.GET_CHARACTER_SUCCESS]: (data) => ({
    type: TYPES.GET_CHARACTER_SUCCESS,
    payload: data,
  }),
  [TYPES.GET_CHARACTER_FAIL]: (error) => ({
    type: TYPES.GET_CHARACTER_FAIL,
    payload: error,
  }),

  [TYPES.GET_ALL_CHARACTERS_PENDING]: () => ({
    type: TYPES.GET_ALL_CHARACTERS_PENDING,
  }),
  [TYPES.GET_ALL_CHARACTERS_SUCCESS]: (data) => ({
    type: TYPES.GET_ALL_CHARACTERS_SUCCESS,
    payload: data,
  }),
  [TYPES.GET_ALL_CHARACTERS_FAIL]: (error) => ({
    type: TYPES.GET_ALL_CHARACTERS_FAIL,
    payload: error,
  }),

  [TYPES.GET_EPISODES_PENDING]: () => ({
    type: TYPES.GET_EPISODES_PENDING,
  }),
  [TYPES.GET_EPISODES_SUCCESS]: (data) => ({
    type: TYPES.GET_EPISODES_SUCCESS,
    payload: data,
  }),
  [TYPES.GET_EPISODES_FAIL]: (error) => ({
    type: TYPES.GET_EPISODES_FAIL,
    payload: error,
  }),

  [TYPES.GET_ALL_FAVORITES_PENDING]: () => ({
    type: TYPES.GET_ALL_FAVORITES_PENDING,
  }),
  [TYPES.GET_ALL_FAVORITES_SUCCESS]: (data) => ({
    type: TYPES.GET_ALL_FAVORITES_SUCCESS,
    payload: data,
  }),
  [TYPES.GET_ALL_FAVORITES_FAIL]: (error) => ({
    type: TYPES.GET_ALL_FAVORITES_FAIL,
    payload: error,
  }),

  [TYPES.ADD_FAVORITE_PENDING]: () => ({
    type: TYPES.ADD_FAVORITE_PENDING,
  }),
  [TYPES.ADD_FAVORITE_SUCCESS]: (data) => ({
    type: TYPES.ADD_FAVORITE_SUCCESS,
    payload: data,
  }),
  [TYPES.ADD_FAVORITE_FAIL]: (error) => ({
    type: TYPES.ADD_FAVORITE_FAIL,
    payload: error,
  }),

  [TYPES.UPDATE_FAVORITE_PENDING]: () => ({
    type: TYPES.UPDATE_FAVORITE_PENDING,
  }),
  [TYPES.UPDATE_FAVORITE_SUCCESS]: (data) => ({
    type: TYPES.UPDATE_FAVORITE_SUCCESS,
    payload: data,
  }),
  [TYPES.UPDATE_FAVORITE_FAIL]: (error) => ({
    type: TYPES.UPDATE_FAVORITE_FAIL,
    payload: error,
  }),

  [TYPES.DELETE_FAVORITE_PENDING]: () => ({
    type: TYPES.DELETE_FAVORITE_PENDING,
  }),
  [TYPES.DELETE_FAVORITE_SUCCESS]: (data) => ({
    type: TYPES.DELETE_FAVORITE_SUCCESS,
    payload: data,
  }),
  [TYPES.DELETE_FAVORITE_FAIL]: (error) => ({
    type: TYPES.DELETE_FAVORITE_FAIL,
    payload: error,
  }),
};
