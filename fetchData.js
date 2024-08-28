export default async function fetchData({
  url,
  method = "GET",
  host = import.meta.env.VITE_API_HOST,
  body
}) {
  return fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body
  }).then((response) => {
    const jsonResponse = response.status === 200 ?response.json() : response
    if (response.ok) return jsonResponse;
    throw new Error(JSON.stringify(jsonResponse)); //belum ngerti kenapa harus throw error yang isinya cuma object kosong {}
  });
}
