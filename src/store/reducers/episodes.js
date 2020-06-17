import initial from "../initial";
import TYPES from "../types";

export default (state = initial.episodes, action) => {
  switch (action.type) {
    case TYPES.GET_EPISODES_PENDING:
      return {
        ...state,
        episodesLoading: true,
        list: [],
      };

    case TYPES.GET_EPISODES_SUCCESS:
      return {
        ...state,
        episodesLoading: false,
        list: action.payload.data,
      };
    case TYPES.GET_EPISODES_FAIL:
      return {
        ...state,
        episodesLoading: false,
        error: action.payload,
        list: [],
      };
    default:
      return state;
  }
};
