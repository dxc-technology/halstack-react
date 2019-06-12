import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./common/Header";
import SideMenu from "./common/SideMenu";

import componentsList from "./componentsList";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Content>
          <Route exact path="/" component={SideMenu} />
          <Route path="/:screen" component={SideMenu} />
          <ExamplePageContainer>
            <Route exact path="/" component={componentsList[0].component} />
            {componentsList.map(({ component, route }) => (
              <Route key={component} path={`/${route}/`} component={component} />
            ))}
          </ExamplePageContainer>
        </Content>
      </Router>
    </React.Fragment>
  );
}

const Content = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
`;

const ExamplePageContainer = styled.div`
  flex-grow: 1;
  padding: 30px 100px;
`;

export default App;
