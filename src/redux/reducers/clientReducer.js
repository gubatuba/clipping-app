import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function clientReducer(state = initialState.clients, action) {
  switch (action.type) {
    case types.CREATE_CLIENT_SUCCESS:
      return [...state, { ...action.client }];
    case types.UPDATE_CLIENT_SUCCESS:
      return state.map(client =>
        client.id === action.client.id ? action.client : client
      );
    case types.LOAD_CLIENTS_SUCCESS:
      return action.clients;
    case types.DELETE_CLIENT_OPTIMISTIC:
      return state.filter(client => client.id !== action.client.id);
    default:
      return state;
  }
}
