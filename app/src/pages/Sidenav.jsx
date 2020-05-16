import React from "react";
import { DxcSidenav, DxcFooter, ThemeContext } from "@diaas/dxc-react-cdk";

const colors = {
  black: "blue",
  mediumBlack: "red",
  lightBlack: "grey",
  white: "black",
  darkWhite: "beige",
  yellow: "aquamarine",
  darkGrey: "brown",
  lightGrey: "azure",
  lighterGrey: "red",
  darkRed: "coral",
  lightRed: "aqua",
  lightBlue: "green",
  lightYellow: "white",
  lightPink: "red",
  lightGreen: "blue",
};

function App() {
  return (
    <div>
      <div className="test-case" id="no-children">
        <DxcSidenav
          mode="push"
          padding="medium"
          navContent={
            <div>
              <p>Amazon</p>
            </div>
          }
          pageContent={
            <div>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </div>
          }
        ></DxcSidenav>
        <DxcFooter></DxcFooter>
      </div>

      <div className="test-case" id="children">
        <DxcSidenav
          navContent={
            <div>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </div>
          }
          pageContent={
            <div>
              <p>This is the content in the main area</p>
            </div>
          }
        ></DxcSidenav>
        <DxcFooter></DxcFooter>
      </div>

      <div className="test-case" id="no-arrow">
        <DxcSidenav
          mode="push"
          padding="medium"
          displayArrow={false}
          navContent={
            <ul>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>
          }
          pageContent={
            <div>
              <p>This is the content in the main area</p>
            </div>
          }
        ></DxcSidenav>
        <DxcFooter></DxcFooter>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Sidenav</h4>
        <ThemeContext.Provider value={colors}>
          <DxcSidenav
            mode="push"
            padding="medium"
            navContent={
              <div>
                <p>Amazon</p>
              </div>
            }
            pageContent={
              <div>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </div>
            }
          ></DxcSidenav>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
