export default function searchMiddleare(res) {
  const { data, status } = res;

  return {
    status,
    success: data.response,
    term: "",
    results: data.results || [],
  };
}
