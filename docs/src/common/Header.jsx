import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  DxcHeader,
  DxcDropdown,
  DxcSelect,
} from "@dxc-technology/halstack-react";
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
          label: v.versionNumber,
          value: v.versionNumber,
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

  const selectVersion = (value) => {
    window.location.href = versions.find((v) => v.label === value).url;
  };

  return (
    <DxcHeader
      underlined
      padding={{ left: "medium", right: "medium" }}
      content={
        <React.Fragment>
          <DxcDropdown
            options={versions}
            onSelectOption={selectVersion}
            label={selectedVersion}
            value={selectedVersion}
          ></DxcDropdown>
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
              href="https://developer.dxc.com/design/principles"
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
              href="https://developer.dxc.com/design/principles"
            >
              Design Guidelines
            </a>
          </ResponsiveHeaderLink>
          <DxcSelect
            options={versions}
            onChange={selectVersion}
            size="small"
            value={selectedVersion}
            margin={{ bottom: "small" }}
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

const HeaderLink = styled.div`
  & a {
    color: ${({ isActive }) => (isActive && "#6f2c91") || "black"};
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
