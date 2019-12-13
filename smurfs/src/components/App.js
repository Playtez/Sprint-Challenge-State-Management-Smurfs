import React from "react";
import "./App.css";
import SmurfsDisplayed from "./SmurfsDisplayed";
import Form from "./Form";

const App = () => {
  return (
    <div className="App-adjust">
      <div className="App">
        <Form />
        <SmurfsDisplayed />
      </div>
    </div>
  );
};

export default App;
