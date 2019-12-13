import React from "react";
import "./App.css";
import SmurfsDisplayed from "./SmurfsDisplayed";
import Form from "./Form";

const App = () => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <Form />
      <SmurfsDisplayed />
    </div>
  );
};

export default App;
