import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const icon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" fill="currentColor">
    <path d="m7.229 18.5-1.562-2.583-2.938-.667.271-3L1 10l2-2.25-.271-3 2.938-.667L7.229 1.5 10 2.688 12.771 1.5l1.562 2.583 2.938.667-.271 3L19 10l-2 2.25.271 3-2.938.667-1.562 2.583L10 17.312Zm.604-1.896L10 15.688l2.167.916 1.208-2.021 2.292-.521-.209-2.312L17 10l-1.542-1.75.209-2.312-2.292-.521-1.208-2.021L10 4.312l-2.167-.916-1.208 2.021-2.292.5.209 2.333L3 10l1.562 1.75-.229 2.333 2.292.521ZM10 10Zm-1.062 3 4.958-4.938L12.833 7l-3.895 3.875-1.771-1.75-1.063 1.063Z" />
  </svg>
);

const Sidenav = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcApplicationLayout.SideNav
        title={<DxcApplicationLayout.SideNav.Title>Sidenav Title</DxcApplicationLayout.SideNav.Title>}
      >
        <DxcApplicationLayout.SideNav.Section>
          <DxcApplicationLayout.SideNav.Group title="Group title" collapsable icon={icon}>
            <DxcApplicationLayout.SideNav.Link selected>Lorem ipsum</DxcApplicationLayout.SideNav.Link>
            <DxcApplicationLayout.SideNav.Link>Lorem ipsum</DxcApplicationLayout.SideNav.Link>
          </DxcApplicationLayout.SideNav.Group>
          <DxcApplicationLayout.SideNav.Group title="Group title">
            <DxcApplicationLayout.SideNav.Link icon={icon}>Lorem ipsum</DxcApplicationLayout.SideNav.Link>
            <DxcApplicationLayout.SideNav.Link>Lorem ipsum</DxcApplicationLayout.SideNav.Link>
          </DxcApplicationLayout.SideNav.Group>
        </DxcApplicationLayout.SideNav.Section>
        <DxcApplicationLayout.SideNav.Section>
          <DxcApplicationLayout.SideNav.Link>Lorem ipsum</DxcApplicationLayout.SideNav.Link>
          <DxcApplicationLayout.SideNav.Link>Lorem ipsum</DxcApplicationLayout.SideNav.Link>
          <DxcApplicationLayout.SideNav.Group title="Group title" collapsable>
            <DxcApplicationLayout.SideNav.Link>Lorem ipsum</DxcApplicationLayout.SideNav.Link>
          </DxcApplicationLayout.SideNav.Group>
          <DxcApplicationLayout.SideNav.Group title="Group title" collapsable>
            <DxcApplicationLayout.SideNav.Link>Lorem ipsum</DxcApplicationLayout.SideNav.Link>
          </DxcApplicationLayout.SideNav.Group>
        </DxcApplicationLayout.SideNav.Section>
      </DxcApplicationLayout.SideNav>
    </Mode>
  </PreviewContainer>
);

export default Sidenav;
