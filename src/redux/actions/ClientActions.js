import * as types from "./actionTypes";
import * as clientApi from "../../api/clientApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadClientsSuccess(clients) {
  return { type: types.LOAD_CLIENTS_SUCCESS, clients };
}

export function updateClientSuccess(client) {
  return { type: types.UPDATE_CLIENT_SUCCESS, client };
}

export function createClientSuccess(client) {
  return { type: types.CREATE_CLIENT_SUCCESS, client };
}

export function deleteClientOptimistic(client) {
  return { type: types.DELETE_CLIENT_OPTIMISTIC, client };
}

export function loadClients() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return clientApi
      .getClients()
      .then(clients => {
        dispatch(loadClientsSuccess(clients));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveClient(client) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return clientApi
      .saveClient(client)
      .then(savedClient => {
        client.id
          ? dispatch(updateClientSuccess(savedClient))
          : dispatch(createClientSuccess(savedClient));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteClient(client) {
  return function(dispatch) {
    dispatch(deleteClientOptimistic(client));
    return clientApi.deleteClient(client.id);
  };
}
