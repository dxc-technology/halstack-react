import React from "react";
import { Link, Location } from "@reach/router";
import styled from "styled-components";
import { DxcHeader } from "@diaas/dxc-react-cdk";
import githubLogo from "./github-logo.png";

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
            <HeaderLink>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://developer.dxc.com"
              >
                Design Guidelines
              </a>
            </HeaderLink>
            <HeaderLink>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.dxc.com/DIaaS/diaas-react-cdk"
              >
                <img src={githubLogo} alt="GitHub logo"></img>
              </a>
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
  align-items: center;
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
