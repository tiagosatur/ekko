import TYPES from "../types";
import mutations from "../mutations";
import api from "../../api";

export const getAllcharacters = () => (dispatch) => {
  dispatch(mutations[TYPES.GET_ALL_CHARACTERS_PENDING]());
  return api.get
    .allCharactersService()
    .then((res) => {
      if (res.status < 200 || res.status > 299) return Promise.reject(res);
      dispatch(mutations[TYPES.GET_ALL_CHARACTERS_SUCCESS](res));
      return res;
    })
    .catch((e) => {
      dispatch(mutations[TYPES.GET_ALL_CHARACTERS_FAIL](e));
    });
};

export const searchCharacters = (term) => (dispatch) => {
  dispatch(mutations[TYPES.GET_ALL_CHARACTERS_PENDING]());
  return api.get
    .searchService(term)
    .then((res) => {
      if (res.status < 200 || res.status > 299 || res.error)
        return Promise.reject(res);
      dispatch(mutations[TYPES.GET_ALL_CHARACTERS_SUCCESS](res));
      return res;
    })
    .catch((e) => {
      dispatch(
        mutations[TYPES.GET_ALL_CHARACTERS_FAIL](
          "We did not find any matching results..."
        )
      );
    });
};
