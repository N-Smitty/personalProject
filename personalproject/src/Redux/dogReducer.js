//create the initial state
const initialState = {
  dogs: [],
  name: "",
  age: "",
  breed: "",
  heat: "",
  insemination: "",
  dateTaken: "",
  timeTaken: "",
  nanograms: "",
};

//action types
const UPDATE_DOGS = "UPDATE_DOGS";

// action builders
export function updateDogs(data) {
  return {
    type: UPDATE_DOGS,
    payload: data,
  };
}

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DOGS:
      return { ...state, dogs: [...dogs, action.payload] };
    default:
      return state;
  }
}
