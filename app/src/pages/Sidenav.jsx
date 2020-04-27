import React from "react";
import { useState } from "react";
import { DxcSidenav, DxcHeader, DxcFooter } from "@diaas/dxc-react-cdk";

function App() {
  return (
    <div>
      <DxcSidenav
        padding="xlarge"
        mode="push"
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
        arrowDistance="20px"
      ></DxcSidenav>
      <DxcFooter></DxcFooter>
      <DxcSidenav
        padding="xlarge"
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
        arrowDistance="20px"
      ></DxcSidenav>
      <DxcFooter></DxcFooter>
      <DxcSidenav
        padding="xlarge"
        mode="push"
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
        arrowDistance="20px"
      ></DxcSidenav>
      <DxcFooter></DxcFooter>
    </div>
  );
}

export default App;
