import React from "react";
import { HashRouter, Route } from "react-router-dom";
import styled from "styled-components";
import { DxcFooter } from "@dxc-technology/halstack-react";

import Header from "./common/Header";
import ScrollToTop from "./common/ScrollToTop";
import Components from "./pages/components/Components";
import Overview from "./pages/overview/Overview";
import ThemeBuilder from "./pages/themeBuilder/ThemeBuilder";

function App() {

  return (
    <MainContainer>
      <HashRouter>
        <ScrollToTop />
        <Route path="/components/">
          <Components></Components>
        </Route>
        <Route exact path="/overview">
          <StyledHeader>
            <Header></Header>
          </StyledHeader>
          <Content>
            <Overview></Overview>
          </Content>
          <DxcFooter
            bottomLinks={[
              { text: "Twitter", href: "http://www.google.com" },
              { text: "Facebook", href: "http://www.google.com" },
              { text: "Instagram", href: "http://www.google.com" },
            ]}
            copyright="© DXC Technology 2020. All rights reserved."
          ></DxcFooter>
        </Route>
        <Route exact path="/themeBuilder">
            <ThemeBuilder></ThemeBuilder>
        </Route>
        <Route exact path="/">
          <StyledHeader>
            <Header></Header>
          </StyledHeader>
          <Content>
            <Overview></Overview>
          </Content>
          <DxcFooter
            bottomLinks={[
              { text: "Twitter", href: "https://twitter.com/DXCTechnology" },
              {
                text: "Facebook",
                href: "https://www.facebook.com/DXCTechnology/",
              },
              {
                text: "Instagram",
                href: "https://www.instagram.com/dxctechnology/",
              },
            ]}
            copyright="© DXC Technology 2020. All rights reserved."
          ></DxcFooter>
        </Route>
      </HashRouter>
    </MainContainer>
  );
}

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
