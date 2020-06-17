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
};
