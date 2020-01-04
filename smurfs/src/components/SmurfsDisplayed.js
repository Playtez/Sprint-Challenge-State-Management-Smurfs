import React from "react";
import { connect } from "react-redux";

import { getSmurfs } from "./actions/action";
import "./App.css";

const SmurfsDisplayed = props => {
  // console.log("this props in SmurfsDisplayed.js", props);
  return (
    <div>
      <h1>Click to see all of the smurf village</h1>
      <button onClick={props.getSmurfs}> See Friends</button>
      <div className="card">
        {props.smurfs.map(smurf => {
          return (
            <div key={smurf.id} className="smurf-card">
              <p> Name: {smurf.name}</p>
              <p> Age: {smurf.age}</p>
              <p> height: {smurf.height}</p>
            </div>
          );
        })}
      </div>
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
