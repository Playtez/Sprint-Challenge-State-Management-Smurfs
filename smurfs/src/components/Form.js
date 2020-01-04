import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { postSmurfs } from "./actions/action";

const Form = props => {
  const [newSmurf, setNewSmurf] = React.useState({
    name: "",
    age: "",
    height: ""
  });
  const dispatch = useDispatch();

  const changeHandler = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    console.log({ newSmurf });
    e.preventDefault();
    dispatch(postSmurfs(newSmurf));
  };

  return (
    <div>
      <h1> Add new Friends to the village</h1>
      <form onSubmit={handleSubmit}>
        <label />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newSmurf.name}
          onChange={changeHandler}
        />
        <label />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={newSmurf.age}
          onChange={changeHandler}
        />
        <label />
        <input
          type="text"
          name="height"
          placeholder="height"
          value={newSmurf.height}
          onChange={changeHandler}
        />
        <button>POST</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isPosting: state.isPosting,
    err: state.err
  };
};

export default connect(mapStateToProps, { postSmurfs })(Form);
