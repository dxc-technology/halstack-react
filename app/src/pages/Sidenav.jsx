import React from "react";
import { DxcSidenav } from "@dxc-technology/halstack-react";

function App() {
  return (
    <div>
      <div className="test-case" id="sidenav-menu">
        <DxcSidenav>
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
      </div>
    </div>
  );
}

export default App;
