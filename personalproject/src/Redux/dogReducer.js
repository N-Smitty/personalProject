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
const UPDATE_INSEM = "UPDATE_INSEM";
// action builders
export function updateAboutDog(data) {
  console.log(data)
  return {
    type: UPDATE_DOGS,
    payload: data
  };
}
export function updateInsemination(data) {
  return {
    type: UPDATE_INSEM,
    payload:data
  }
}

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DOGS:
      return { ...state, dogs: [action.payload] };
    default:
      return state;
  }
}

// return { ...state, dogs: [...dogs, action.payload] };

