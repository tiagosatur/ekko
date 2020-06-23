import { useSelector } from "react-redux";

export default function useStore() {
  const { auth, character, characters, favorites } = useSelector(
    (state) => state
  );

  return {
    state: {
      auth,
      character,
      characters,
      favorites,
    },
  };
}
