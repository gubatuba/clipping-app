import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/companies/";

export function getCompanies() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveCompany(company) {
  return fetch(baseUrl + (company.id || ""), {
    method: company.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(company)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCompany(companyId) {
  return fetch(baseUrl + companyId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
