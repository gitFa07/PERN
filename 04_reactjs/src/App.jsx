import React from "react";
import Car from "./components/car";

const App = () => {
  return (
    <div>
      <h1>Welcome to the cars store!</h1>

      <ul>
        <Car />
        <Car />
        <Car />
      </ul>
    </div>
  );
};

export default App;
