import React from "react";
import { connect } from "react-redux";

import { postSmurfs } from "./actions/action";

const Form = props => {
  const [textName, setTextName] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    e.preventDefault();
    setTextName(e.target.value);
  };

  return (
    <div>
      <h1> this is where the form is at</h1>
      <form onSubmit={handleSubmit}>
        <label />
        <input placeholder="Name" onChange={handleChange} />
        <label />
        <input placeholder="Age" />
        <label />
        <input placeholder="height" />
        <button onClick={props.postSmurfs}>POST</button>
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
