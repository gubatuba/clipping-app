export default function empresaReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_EMPRESA":
      return [...state, { ...action.empresa }];

    default:
      return state;
  }
}
