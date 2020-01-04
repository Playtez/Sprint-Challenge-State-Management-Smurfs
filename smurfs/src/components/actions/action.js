import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      // console.log(res.data);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("this is the error", err);
      dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response });
    });
};

/// ==== POSTS =====

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";

export const postSmurfs = newSmurf => dispatch => {
  dispatch({ type: POST_SMURF_START });
  console.log("postSmurfs here");
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      dispatch({ type: POST_SMURF_SUCCESS, payload: newSmurf });
    })
    .catch(err => {
      dispatch({ type: POST_SMURF_FAILURE, payload: err.error });
    });
};

// ==== Delete ====

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const deleteSmurfs = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  console.log("postSmurfs here");
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: id });
    })
    .catch(err => {
      dispatch({ type: DELETE_SMURF_FAILURE, payload: err.error });
    });
};
