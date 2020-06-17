export default function getCharacter(res) {
  const { data, status } = res;

  const episodesId = data?.episode.map((item) =>
    item.substr(item.lastIndexOf("/") + 1)
  );

  let dataWithEpisodesId = {
    ...data,
    episode: episodesId,
  };

  return {
    status,
    data: dataWithEpisodesId,
  };
}
