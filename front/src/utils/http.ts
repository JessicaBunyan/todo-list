export function get(url: string, signal?) {
  return fetch(url, {
    method: "GET",
    signal: signal,
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

export function patch(url: string) {
  return fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}
export function post(url: string, body: any) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}

export function del(url: string) {
  return fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}
