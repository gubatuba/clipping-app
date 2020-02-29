import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/clients/";

export function getClients() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveClient(client) {
  return fetch(baseUrl + (client.id || ""), {
    method: client.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(client)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteClient(clientId) {
  return fetch(baseUrl + clientId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
