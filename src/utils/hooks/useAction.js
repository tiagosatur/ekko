import { useDispatch } from "react-redux";

import {
  getAllcharacters,
  getCharacter,
  getEpisodesById,
} from "../../store/actions";

export default function useAction() {
  const dispatch = useDispatch();

  return {
    actions: {
      getAllcharacters: (data) => dispatch(getAllcharacters(data)),
      getCharacter: (data) => dispatch(getCharacter(data)),
      getEpisodesById: (data) => dispatch(getEpisodesById(data)),
    },
  };
}
