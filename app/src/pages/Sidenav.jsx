import React from "react";
import {
  DxcSidenav,
  DxcFooter,
  ThemeContext,
} from "@dxc-technology/halstack-react";

const colors = {
  sidenav: {
    backgroundColor: "#FABADA",
    arrowContainerColor: "#D0011B",
    arrowColor: "pink",
  },
};

function App() {
  return (
    <div>
      <div className="test-case" id="children">
        <DxcSidenav padding="medium">
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </DxcSidenav>
        <DxcFooter />
      </div>

      <div className="test-case" id="custom-colors">
        <h4>Custom Sidenav</h4>
        <ThemeContext.Provider value={colors}>
          <DxcSidenav padding="medium">
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </DxcSidenav>
          <DxcFooter />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
