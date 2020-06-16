import TYPES from "../types";

export default {
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
};
