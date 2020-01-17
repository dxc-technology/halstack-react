import React from "react";
import { Router } from "@reach/router";
import styled from "styled-components";

import SideNav from "./SideNav";
import AllComponents from "./pages/AllComponents";

import paths from "./paths";

function App() {
  return (
    <MainContainer>
      <SideNav></SideNav>
      <Content id="tests-container">
        <Router>
          {paths.map(path => (
            <path.component path={path.path}></path.component>
          ))}
          <AllComponents path="/all"></AllComponents>
        </Router>
      </Content>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #efefef;
`;

const Content = styled.div`
  margin: 50px;
  background: white;
  flex-grow: 1;
  border: 1px dashed #cccccc;
  overflow: hidden;
`;

export default App;
