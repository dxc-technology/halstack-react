import React from "react";
import paths from "./../paths";

function App() {
  return (
    <React.Fragment>
      {paths.map(path => (
        <path.component></path.component>
      ))}
    </React.Fragment>
  );
}

export default App;
