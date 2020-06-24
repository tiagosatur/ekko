import store from "../store";

export default function setFavoritedResults(arr) {
  return arr?.map((character) => {
    const match = store
      .getState()
      .favorites.characters.some((favorite) => favorite.id === character.id);
    return {
      ...character,
      isFavorite: match,
    };
  });
}
