import request from "./request";
import ENDPOINTS from "./endpoints";
import MIDDLEWARES from "./middlewares";

export default {
  get: {
    searchService: (term) =>
      request({
        url: `${ENDPOINTS.SEARCH}/?name=${term}`,
        method: "GET",
      }).then((res) => MIDDLEWARES.search(res)),
    allCharactersService: () =>
      request({
        url: ENDPOINTS.GET_ALL_CHARACTERS,
        method: "GET",
      }).then((res) => MIDDLEWARES.getAllCharacters(res)),
  },
};
