import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { DxcHeader, DxcSelect } from "@dxc-technology/halstack-react";
import axios from "axios";
import portal from "./portal.json";
import githubLogo from "./github-logo-black.svg";
import githubLogoBlack from "./github-logo-black.svg";

function App() {
  const location = useLocation();
  const [versions, setVersions] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState(null);

  useEffect(() => {
    const fetchVersions = async () => {
      const versionsResp = await axios({
        method: "get",
        url: portal.url,
      });
      setVersions(
        versionsResp.data.map((v) => ({
          label: v.versionNumber.toString(),
          value: v.versionNumber.toString(),
          url: v.versionURL,
        }))
      );
      const versionUrl = window.location.pathname;
      const currentSelectedVersion =
        versionUrl.split("/")[3] ||
        versionsResp.data.find((v) => v.current).versionNumber;
      setSelectedVersion(currentSelectedVersion);
    };

    fetchVersions();
  }, []);

  const selectVersion = ({ value }) => {
    window.location.href = versions.find((v) => v.label === value).url;
  };

  return (
    <DxcHeader
      underlined
      padding={{ left: "small" }}
      content={
        <React.Fragment>
          <HeaderSelect>
            <DxcSelect
              options={versions}
              onChange={selectVersion}
              value={selectedVersion}
              size="fillParent"
            ></DxcSelect>
          </HeaderSelect>
          <HeaderLink
            isActive={
              location.pathname.startsWith("/overview") ||
              location.pathname === "/"
            }
          >
            <Link to="/overview">Overview</Link>
          </HeaderLink>
          <HeaderLink isActive={location.pathname.startsWith("/components")}>
            <Link to="/components">Components</Link>
          </HeaderLink>
          <HeaderLink>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.dxc.com/design/guidelines/principles/overview"
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
              href="https://developer.dxc.com/design/guidelines/principles/overview"
            >
              Design Guidelines
            </a>
          </ResponsiveHeaderLink>
          <DxcSelect
            options={versions}
            onChange={selectVersion}
            value={selectedVersion}
            size="small"
          ></DxcSelect>
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

const HeaderSelect = styled.div`
  width: 100px;
`;

const HeaderLink = styled.div`
  display: flex;
  padding: 0 1.25rem;
  & a {
    color: ${({ isActive }) => (isActive && "#5f249f") || "black"};
    text-decoration: none;
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
