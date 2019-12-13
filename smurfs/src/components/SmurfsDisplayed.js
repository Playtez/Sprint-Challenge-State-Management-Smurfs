import React from "react";
import { connect } from "react-redux";

import { getSmurfs } from "./actions/action";

const SmurfsDisplayed = props => {
  // console.log("this props in SmurfsDisplayed.js", props);
  return (
    <div>
      <h1>Click to see all of the smurf village</h1>
      <button onClick={props.getSmurfs}> See Friends</button>
      {props.smurfs.map(smurf => {
        return (
          <div key={smurf.id}>
            <h1> {smurf.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    err: state.err
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfsDisplayed);
