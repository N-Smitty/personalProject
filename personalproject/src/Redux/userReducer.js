//create the initial state
const initialState = {
    user: {}
    };
    
    //action types
    const UPDATE_USER = "UPDATE_USER";
    
    // action builders
    export function updateUser(data) {
        return {
            type: UPDATE_USER,
            payload:data,
        };
    }
    
    //reducer
    export default function reducer(state = initialState, action) {
      switch (action.type) {
        case UPDATE_USER:
          return { ...state, user: action.payload };
        default:
          return state;
      }
    }