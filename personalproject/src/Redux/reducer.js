//create the initial state
const initialState = {
//   name: "",
//   age: "",
//   breed: "",
//   heat: "",
  insemination: "",
  dateTaken: "",
  timeTaken: "",
  nanograms: "",
};

//action types
const UPDATE_INSEMINATION = "UPDATE_INSEMINATION";
const UPDATE_ABOUT_DOG = "UPDATE_ABOUT_DOG";

// action builders
export function updateAboutDog(data) {
    return {
        type: UPDATE_ABOUT_DOG,
        payload:data,
    };
}

export function updateInsemination(data) {
  return {
    type: UPDATE_INSEMINATION,
    payload: data,
  };
}

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INSEMINATION:
      return { ...state, insemination: action.payload };
    // case UPDATE_ABOUT_DOG:
    //   let { name, age, breed, heat } = action.payload;
    //   return { ...state, name, age, breed, heat };
    default:
      return state;
  }
}