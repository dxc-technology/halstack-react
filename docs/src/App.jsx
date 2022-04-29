import React from "react";
import { HashRouter, Route } from "react-router-dom";
import styled from "styled-components";
import ScrollToTop from "./common/ScrollToTop";
import Components from "./pages/components/Components";
import Overview from "./pages/overview/Overview";
import ThemeBuilder from "./pages/themeBuilder/ThemeBuilder";
import { HalstackProvider } from "@dxc-technology/halstack-react";

function App() {
  return (
    <HalstackProvider>
      <MainContainer>
        <HashRouter>
          <ScrollToTop />
          <Route path="/components/">
            <Components />
          </Route>
          <Route exact path="/overview">
            <Overview />
          </Route>
          <Route exact path={["/themeBuilder/:type", "/themeBuilder"]}>
            <ThemeBuilder></ThemeBuilder>
          </Route>
          <Route exact path="/">
            <Content>
              <Overview />
            </Content>
          </Route>
        </HashRouter>
      </MainContainer>
    </HalstackProvider>
  );
}

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
