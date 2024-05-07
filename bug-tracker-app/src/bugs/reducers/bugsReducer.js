const initialState = [];
function bugsReducer(currentState = initialState, action) {
  switch (action.type) {
    case "BUGS_ADD":
      return [...currentState, action.payload];
      break;
    case "BUGS_REMOVE":
      return currentState.filter((bug) => bug.id !== action.payload.id);
    case "BUGS_REPLACE":
      return currentState.map((bug) =>
        bug.id === action.payload.id ? action.payload : bug
      );
    case "BUGS_INIT":
      return action.payload;
    default:
      return currentState;
  }
}

export default bugsReducer;