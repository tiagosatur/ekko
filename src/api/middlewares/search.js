import { isEmpty } from "lodash";
import { setFavoritedResults } from "../../utils";

export default function searchMiddleare(res) {
  const { data, status } = res;

  return {
    status,
    data: {
      results: setFavoritedResults(data.results),
      info: data.info,
    },
    error: isEmpty(data) ? true : false,
  };
}
