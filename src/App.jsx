import React from "react";
import { Router, Link } from "@reach/router";
import styled from "styled-components";
import { DxcFooter, DxcHeader } from "@diaas/dxc-react-cdk";

import Components from "./pages/components/Components";
import Docs from "./pages/docs/Docs";
import Overview from "./pages/overview/Overview";

function App() {
  return (
    <MainContainer>
      <DxcHeader>
        <HeaderLinks>
          <Link to="overview">Overview</Link>
          <Link to="components">Components</Link>
          <Link to="docs">Docs</Link>
        </HeaderLinks>
      </DxcHeader>
      <Content>
        <StyledRouter>
          <Components path="/components/*"></Components>
          <Docs path="/docs"></Docs>
          <Overview path="/overview"></Overview>
        </StyledRouter>
      </Content>
      <DxcFooter
        bottomLinks={[
          { text: "Twitter", href: "http://www.google.com" },
          { text: "Facebook", href: "http://www.google.com" },
          { text: "Instagram", href: "http://www.google.com" }
        ]}
        copyright="© DXC Technology 2019. All rights reserved."
      ></DxcFooter>
    </MainContainer>
  );
}

const StyledRouter = styled(Router)`
  width: 100%;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  min-height: calc(100vh - 64px - 119px);
`;

const HeaderLinks = styled.div`
  display: flex;
  flex-grow: 1;

  & a {
    color: white;
    text-decoration: none;
    margin-left: 100px;
    font-size: 14px;
    letter-spacing: 1px;
  }
`;

export default App;
