import React from "react";
import {
  DxcSidenav,
  DxcFooter,
  HalstackProvider,
} from "@dxc-technology/halstack-react";

const colors = {
  sidenav: {
    baseColor: "#FABADA",
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
        <HalstackProvider theme={colors}>
          <DxcSidenav padding="medium">
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </DxcSidenav>
          <DxcFooter />
        </HalstackProvider>
      </div>

      <div className="test-case" id="sidenav-menu">
        <h4>Compound components Sidenav</h4>
        <DxcSidenav padding="medium">
          <DxcSidenav.Title>My sidenav</DxcSidenav.Title>
          <p>This is a sidenav.</p>
          <DxcSidenav.Subtitle>My subtitle</DxcSidenav.Subtitle>
          <DxcSidenav.Link href="#">Home</DxcSidenav.Link>
          <DxcSidenav.Link href="/test">Test</DxcSidenav.Link>
          <DxcSidenav.Subtitle>My subtitle2</DxcSidenav.Subtitle>
          <DxcSidenav.Link href="#">Home2</DxcSidenav.Link>
          <DxcSidenav.Link onClick={() => console.log("click")}>
            Test2
          </DxcSidenav.Link>
          <p>This is a sidenav2.</p>
        </DxcSidenav>
        <DxcFooter />
      </div>
    </div>
  );
}

export default App;
