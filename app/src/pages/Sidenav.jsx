import React from "react";
import { DxcSidenav, DxcFooter } from "@dxc-technology/halstack-react";

function App() {
  return (
    <div>
      <div className="test-case" id="children">
        <DxcSidenav>
          <DxcSidenav.Section>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </DxcSidenav.Section>
          <DxcSidenav.Section>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </DxcSidenav.Section>
        </DxcSidenav>
        <DxcFooter />
      </div>

      <div className="test-case" id="sidenav-menu">
        <h4>Compound components Sidenav</h4>
        <DxcSidenav padding="medium">
          <DxcSidenav.Title>My sidenav</DxcSidenav.Title>
          <DxcSidenav.Section>
            <p>Lorem ipsum</p>
            <DxcSidenav.Group title="Group title">
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            </DxcSidenav.Group>
            <DxcSidenav.Group title="Group title" collapsable>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            </DxcSidenav.Group>
          </DxcSidenav.Section>

          <DxcSidenav.Section>
            <p>Lorem ipsum</p>
            <DxcSidenav.Group title="Group title">
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            </DxcSidenav.Group>
            <DxcSidenav.Group title="Group title" collapsable>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            </DxcSidenav.Group>
          </DxcSidenav.Section>
        </DxcSidenav>
        <DxcFooter />
      </div>
    </div>
  );
}

export default App;
