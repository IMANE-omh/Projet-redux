const initialState = {
  count: 0,
};
const compteurReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.n };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.n };
    default:
      return state;
  }
};
export default compteurReducer;
