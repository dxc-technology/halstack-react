import React from "react";
import { DxcSidenav } from "@dxc-technology/halstack-react";

const titleWrapper = () => {
  return <DxcSidenav.Title>My sidenav</DxcSidenav.Title>;
};

function App() {
  console.log(typeof titleWrapper);
  return (
    <div>
      <div className="test-case" id="sidenav-menu">
        <DxcSidenav title={<DxcSidenav.Title>My sidenav</DxcSidenav.Title>}>
          <DxcSidenav.Section>
            <p>Lorem ipsum</p>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Group title="Group title" collapsable>
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
