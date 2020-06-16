import { useSelector } from "react-redux";

export default function useStore() {
  const { auth, characters } = useSelector((state) => state);

  return {
    state: {
      auth,
      characters,
    },
  };
}
