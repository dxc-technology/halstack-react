import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import SideNav from "./SideNav";
import AllComponents from "./pages/AllComponents";

import paths from "./paths";

function App() {
  return (
    <MainContainer>
      <SideNav></SideNav>

      <Content id="tests-container">
        <Route exact path="/"></Route>
        <Route exact path="/all">
          <AllComponents />
        </Route>
        {paths.map((path) => (
          <Route
            path={`/${path.path}`}
            key={path.path}
            component={path.component}
          />
        ))}
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
  overflow-y: auto;
  overflow-x: hidden;
`;

export default App;
