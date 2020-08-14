//create the initial state
const initialState = {
  // user: {},
};

//action types
const UPDATE_USER = "UPDATE_USER";

// action builders
export function updateUser(data) {
  console.log(data, "daterrrr");
  return {
    type: UPDATE_USER,
    payload: { user: data },
  };
}

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      console.log(action.payload);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
