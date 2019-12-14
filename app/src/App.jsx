import React from "react";
import { Router } from "@reach/router";
import styled from "styled-components";

import SideNav from "./SideNav";

import paths from "./paths";

function App() {
  return (
    <MainContainer>
      <SideNav></SideNav>
      <Content>
        <Router>
          {paths.map(path => (
            <path.component path={path.path}></path.component>
          ))}
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
`;

export default App;
