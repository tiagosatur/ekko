export default function updateFavorite({ characters, data }) {
  const { id, locationName } = data;

  const targetFavorite = characters.find((item) => item.id === parseInt(id));
  const otherFavorites = characters.filter((item) => item.id !== parseInt(id));
  console.log("targetFavorite.isFavorite", targetFavorite.isFavorite);

  const updatedFavorite = [
    {
      ...targetFavorite,
      location: {
        name: locationName,
        url: targetFavorite.location.url,
      },
      locationName,
      ...data,
      id: parseInt(id),
    },
  ];
  return [...updatedFavorite, ...otherFavorites];
}
