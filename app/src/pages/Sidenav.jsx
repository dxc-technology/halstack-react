import React from "react";
import { useState } from "react";
import { DxcSidenav, DxcHeader, DxcFooter } from "@diaas/dxc-react-cdk";

function App() {
  return (
    <div>
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
      >
      </DxcSidenav>
      <DxcFooter></DxcFooter>
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
  );
}

export default App;
