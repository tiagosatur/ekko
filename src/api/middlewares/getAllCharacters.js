export default function getAllCharacters(res) {
  const { data, status } = res;

  return {
    status,
    data,
  };
}
