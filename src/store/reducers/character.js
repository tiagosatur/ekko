import initial from "../initial";
import TYPES from "../types";

export default (state = initial.character, action) => {
  switch (action.type) {
    case TYPES.GET_CHARACTER_PENDING:
      return {
        ...state,
        characterLoading: true,
        info: {},
      };

    case TYPES.GET_CHARACTER_SUCCESS:
      return {
        ...state,
        characterLoading: false,
        info: action.payload.data,
      };
    case TYPES.GET_CHARACTER_FAIL:
      return {
        ...state,
        characterLoading: false,
        error: action.payload,
        info: {},
      };
    default:
      return state;
  }
};
