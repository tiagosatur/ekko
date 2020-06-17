export default function getAllCharacters(res) {
  const { data, status } = res;
  return {
    data: !Array.isArray(data) ? [{ ...data }] : data,
    status: status,
  };
}
