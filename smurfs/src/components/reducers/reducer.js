import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  POST_SMURF_START
} from "../actions/action";

export const initialState = {
  smurfs: [],
  isFetching: false,
  err: "",
  isPosting: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        err: action.payload
      };
    case POST_SMURF_START:
      return {
        ...state,
        isPosting: true
      };
    default:
      return state;
  }
};
