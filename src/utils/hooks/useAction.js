import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  getAllcharacters,
  getCharacter,
  getEpisodesById,
  addFavorite,
  deleteFavorite,
  updateFavorite,
  searchCharacters,
} from "../../store/actions";

export default function useAction() {
  const dispatch = useDispatch();

  return {
    getAllcharacters: useCallback((data) => dispatch(getAllcharacters(data)), [
      dispatch,
    ]),
    getCharacter: useCallback((data) => dispatch(getCharacter(data)), [
      dispatch,
    ]),

    getEpisodesById: useCallback((data) => dispatch(getEpisodesById(data)), [
      dispatch,
    ]),
    addFavorite: useCallback((data) => dispatch(addFavorite(data)), [dispatch]),
    deleteFavorite: useCallback((data) => dispatch(deleteFavorite(data)), [
      dispatch,
    ]),
    updateFavorite: useCallback((data) => dispatch(updateFavorite(data)), [
      dispatch,
    ]),
    searchCharacters: useCallback((data) => dispatch(searchCharacters(data)), [
      dispatch,
    ]),
  };
}
