import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE
} from "../actions/action";

export const initialState = {
  smurfs: [],
  isFetching: false,
  err: "",
  isPosting: false
};

export const reducer = (state = initialState, action) => {
  console.log({ state, action });
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
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isPosting: false
      };
    case POST_SMURF_FAILURE:
      return {
        ...state,
        isPosting: false,
        err: action.payload
      };
    default:
      return state;
  }
};
