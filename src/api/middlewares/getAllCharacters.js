import { setFavoritedResults } from "../../utils";

export default function getAllCharacters(res) {
  const { data, status } = res;

  return {
    status,
    data: {
      results: setFavoritedResults(data.results),
      info: data.info,
    },
  };
}
