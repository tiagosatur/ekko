import { useDispatch } from "react-redux";

import { getAllcharacters } from "../../store/actions";

export default function useAction() {
  const dispatch = useDispatch();

  return {
    actions: {
      getAllcharacters: (data) => dispatch(getAllcharacters(data)),
    },
  };
}
