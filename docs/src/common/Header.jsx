import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { DxcHeader } from "@dxc-technology/halstack-react";
import githubLogo from "./github-logo.svg";
import githubLogoBlack from "./github-logo-black.svg";

function App() {
  const location = useLocation();
  return (
    <DxcHeader
      padding={{ left: "medium", right: "medium" }}
      content={
        <React.Fragment>
          <HeaderLink isActive={location.pathname.startsWith("/overview")}>
            <Link to="/overview">Overview</Link>
          </HeaderLink>
          <HeaderLink isActive={location.pathname.startsWith("/components")}>
            <Link to="/components">Components</Link>
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
              href="https://github.com/dxc-technology/halstack-react"
            >
              <HeaderLogo alt="GitHub logo" src={githubLogo}></HeaderLogo>
            </a>
          </HeaderLink>
        </React.Fragment>
      }
      responsiveContent={(closeHandler) => (
        <React.Fragment>
          <ResponsiveHeaderLink
            isActive={location.pathname.startsWith("/overview")}
          >
            <Link to="/overview">Overview</Link>
          </ResponsiveHeaderLink>
          <ResponsiveHeaderLink
            isActive={location.pathname.startsWith("/components")}
          >
            <Link to="/components">Components</Link>
          </ResponsiveHeaderLink>
          <ResponsiveHeaderLink>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.dxc.com"
            >
              Design Guidelines
            </a>
          </ResponsiveHeaderLink>
          <ResponsiveHeaderLink>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dxc-technology/halstack-react"
            >
              <HeaderLogo alt="GitHub logo" src={githubLogoBlack}></HeaderLogo>
            </a>
          </ResponsiveHeaderLink>
        </React.Fragment>
      )}
    />
  );
}

const HeaderLink = styled.div`
  & a {
    color: ${({ isActive }) => (isActive && "yellow") || "white"};
    text-decoration: none;
    margin-left: 100px;
    font-size: 14px;
    letter-spacing: 1px;
  }
`;

const HeaderLogo = styled.img`
  height: 32px;
  width: 32px;
`;

const ResponsiveHeaderLink = styled.div`
  margin: 5px 0px;
  & a {
    color: black;
    ${({ isActive }) => isActive && "font-weight: 600;"}
    text-decoration: none;
    font-size: 18px;
    letter-spacing: 1px;
  }
`;

export default App;
