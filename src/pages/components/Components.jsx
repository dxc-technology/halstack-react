import React from "react";
import { Router, Route } from "react-router-dom";
import styled from "styled-components";

import SideNav from "../../common/SideNav";
import paths from "./paths.js";

function Components() {
  return (
    <ComponentsContainer>
      <SideNav title="React"></SideNav>
      <Content>
        {paths.map(path => (
          <Route path={`/components/${path.path}`}>
            <path.component></path.component>
          </Route>
        ))}
      </Content>
    </ComponentsContainer>
  );
}

const ComponentsContainer = styled.div`
  display: flex;
  height: 100%;
`;

const StyledRouter = styled(Router)`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

export default Components;
