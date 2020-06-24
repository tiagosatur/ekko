export default function toggleIsFavorite({ characters, data }) {
  const { id } = data;

  const targetFavorite = characters.find((item) => item.id === parseInt(id));

  const newTargetFavorite = {
    ...targetFavorite,
    isFavorite: !targetFavorite.isFavorite || false,
  };
  const updatedCharacters = characters.map((item) =>
    item.id === id ? newTargetFavorite : item
  );

  return updatedCharacters;
}
