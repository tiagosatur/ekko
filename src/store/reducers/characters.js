import initial from "../initial";
import TYPES from "../types";
import { toggleIsFavorite } from "../../utils";

export default (state = initial.characters, action) => {
  switch (action.type) {
    case TYPES.GET_ALL_CHARACTERS_PENDING:
      return {
        ...state,
        charactersLoading: true,
        list: [],
        info: {},
      };

    case TYPES.GET_ALL_CHARACTERS_SUCCESS:
      return {
        ...state,
        charactersLoading: false,
        list: action.payload.data.results,
        info: action.payload.data.info,
      };
    case TYPES.GET_ALL_CHARACTERS_FAIL:
      return {
        ...state,
        charactersLoading: false,
        error: action.payload,
        list: [],
        info: {},
      };
    case TYPES.TOGGLE_FAVORITE:
      return {
        ...state,
        list: toggleIsFavorite({
          characters: state.list,
          data: action.payload,
        }),
      };
    default:
      return state;
  }
};
