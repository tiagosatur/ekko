import TYPES from "../types";
import mutations from "../mutations";
import api from "../../api";

export const getEpisodesById = (ids) => (dispatch) => {
  dispatch(mutations[TYPES.GET_EPISODES_PENDING]());
  return api.get
    .episodesByIdService(ids)
    .then((res) => {
      if (res.status < 200 || res.status > 299) Promise.reject(res);
      dispatch(mutations[TYPES.GET_EPISODES_SUCCESS](res));
      return res;
    })
    .catch((e) => {
      dispatch(mutations[TYPES.GET_EPISODES_FAIL](e));
    });
};
