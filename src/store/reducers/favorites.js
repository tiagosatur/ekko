import initial from "../initial";
import TYPES from "../types";
import { updateFavorite } from "../../utils";

export default (state = initial.favorites, action) => {
  switch (action.type) {
    case TYPES.ADD_FAVORITE_PENDING:
    case TYPES.UPDATE_FAVORITE_PENDING:
    case TYPES.DELETE_FAVORITE_PENDING:
      return {
        ...state,
        favoriteLoading: true,
      };

    case TYPES.ADD_FAVORITE_FAIL:
    case TYPES.UPDATE_FAVORITE_FAIL:
    case TYPES.DELETE_FAVORITE_FAIL:
      return {
        ...state,
        favoriteLoading: false,
        error: action.payload,
      };

    case TYPES.ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        favoriteLoading: false,
        characters: state.characters.concat({
          ...action.payload,
          id: parseInt(action.payload.id),
          isFavorite: true,
        }),
      };

    case TYPES.UPDATE_FAVORITE_SUCCESS:
      return {
        ...state,
        favoriteLoading: false,
        characters: updateFavorite({
          characters: state.characters,
          data: action.payload,
        }),
      };

    case TYPES.DELETE_FAVORITE_SUCCESS:
      return {
        characters: state.characters.filter(
          (item) => parseInt(item.id) !== parseInt(action.payload.id)
        ),
        favoriteLoading: false,
      };
    default:
      return state;
  }
};
