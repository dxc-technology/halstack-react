import React from "react";
import { Link, Location } from "@reach/router";
import styled from "styled-components";
import { DxcHeader } from "@diaas/dxc-react-cdk";

function App() {
  return (
    <DxcHeader>
      <Location>
        {({ location }) => (
          <HeaderLinks>
            <HeaderLink isActive={location.pathname.startsWith("/overview")}>
              <Link to="overview">Overview</Link>
            </HeaderLink>
            <HeaderLink isActive={location.pathname.startsWith("/components")}>
              <Link to="components">Components</Link>
            </HeaderLink>
            <HeaderLink isActive={location.pathname.startsWith("/docs")}>
              <Link to="docs">Docs</Link>
            </HeaderLink>
          </HeaderLinks>
        )}
      </Location>
    </DxcHeader>
  );
}

const HeaderLinks = styled.div`
  display: flex;
  flex-grow: 1;
`;

const HeaderLink = styled.div`
  & a {
    color: ${({ isActive }) => (isActive && "yellow") || "white"};
    text-decoration: none;
    margin-left: 100px;
    font-size: 14px;
    letter-spacing: 1px;
  }
`;

export default App;
