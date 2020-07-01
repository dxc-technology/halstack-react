import React from "react";
import { HashRouter, Route } from "react-router-dom";
import styled from "styled-components";
import { DxcFooter } from "@diaas/dxc-react-cdk";

import Header from "./common/Header";
import ScrollToTop from "./common/ScrollToTop";
import Components from "./pages/components/Components";
import Overview from "./pages/overview/Overview";

function App() {
  return (
    <MainContainer>
      <HashRouter>
        <ScrollToTop />
        <StyledHeader>
          <Header></Header>
        </StyledHeader>
        <Content>
          <Route path="/components/">
            <Components></Components>
          </Route>
          <Route exact path="/overview">
            <Overview></Overview>
          </Route>
          <Route exact path="/">
            <Overview></Overview>
          </Route>
        </Content>
        <DxcFooter
          bottomLinks={[
            { text: "Twitter", href: "http://www.google.com" },
            { text: "Facebook", href: "http://www.google.com" },
            { text: "Instagram", href: "http://www.google.com" }
          ]}
          copyright="© DXC Technology 2019. All rights reserved."
        ></DxcFooter>
      </HashRouter>
    </MainContainer>
  );
}

const StyledRouter = styled(HashRouter)`
  width: 100%;
`;

const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin-top: 64px;
  display: flex;
  min-height: calc(100vh - 64px - 119px);
`;

export default App;
