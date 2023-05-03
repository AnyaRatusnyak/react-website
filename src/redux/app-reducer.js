import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = "SET-INITIALIZED-SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: SET_INITIALIZED_SUCCESS,
});
export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData());
    debugger;
    promise.then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
