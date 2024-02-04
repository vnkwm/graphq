export async function apiCallFetch(url = 'http://localhost:9000', method = 'POST', headers, body) {
  console.log('body is', body);

  const response = await fetch(url, {
    method,
    headers: headers ?? { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: body })
  })

  return await response.json()
}