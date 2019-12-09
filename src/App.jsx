import React from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import { DxcFooter } from "@diaas/dxc-react-cdk";

import Header from "./common/Header";
import Components from "./pages/components/Components";
import Docs from "./pages/docs/Docs";
import Overview from "./pages/overview/Overview";

function App() {
  return (
    <MainContainer>
      <Header></Header>
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

export default App;
