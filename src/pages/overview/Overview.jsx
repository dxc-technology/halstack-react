import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import DocTitle from "../../common/DocTitle";
import Section from "../components/common/Section";
import githubLogo from "./github-logo.png";

function Install() {
  return (
    <Section>
      <DocTitle size={2}>Install</DocTitle>
      <p>
        DXC React Components is a library made for React. In order to use it,
        you need to include it in an existing React project.
      </p>

      <p>
        If you are creating a React application from scratch, we recommend using{" "}
        <Link target="_blank" href="https://create-react-app.dev/">
          create-react-app
        </Link>{" "}
        to set it up with minimum configuration.
      </p>
      <p>
        DXC React Components is distributed as an npm package. To use it in an
        existing project:
      </p>
      <SyntaxHighlighter language="php" style={docco}>
        {`
  # with npm
  npm install @diaas/dxc-react-cdk

  # with yarn
  yarn add @diaas/dxc-react-cdk
        `}
      </SyntaxHighlighter>
    </Section>
  );
}

function UseComponents() {
  return (
    <Section>
      <DocTitle size={2}>Use Components</DocTitle>
      <p>
        A list of available components is available in the{" "}
        <Link target="_blank" href="https://create-react-app.dev/">
          components screen
        </Link>{" "}
        . The API documentation of every component is available in that screen,
        as well as a set of examples with a live code editor.
      </p>

      <p>
        After having installed the npm package you will be able to import it and
        use it in you application.
      </p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {`
  import { DxcButton } from "@diaas/dxc-react-cdk";

  const MyComponent = () => {
    const onClick = () => {
      console.log("click")
    };
  
    return (
      <DxcButton mode="basic" label="Basic Button" onClick={onClick} />
    );
  };

  export default MyComponent;

`}
      </SyntaxHighlighter>
    </Section>
  );
}

function Support() {
  return (
    <Section>
      <DocTitle size={2}>Support and Feature Request</DocTitle>
      <p>
        For any questions or requests, our main support channel is GitHub
        issues.
      </p>
      <Card>
        <GithubIcon alt="Github logo" src={githubLogo}></GithubIcon>
        <GithubText>GitHub Issues</GithubText>
      </Card>

      <p>
        You are welcome to open an issue there at any time, but before doing it,
        please consider the following.
      </p>
      <ul>
        <li>
          <p>
            Somebody else migh have already created an issue regarding your
            question or feature request. Please use the search functionality and
            avoid the creation of duplicated issues. In case you want to provide
            your input or express your interest in a feature request, please do
            it in the existing issue.
          </p>
        </li>
        <li>
          <p>
            These components are built with the intention of helping developers
            with the most common use cases. But at the same time, we want to
            keep their APIs as simple and intuitive as possible. If you notice a
            missing feature, the team is always happy to discuss about it. But
            please have in mind that we might decide to give it a lower priority
            than what you could expect, or even reject it for the sake of API
            simplicity.
          </p>
        </li>
        <li>
          <p>
            In case you need a missing feature, or modify a component in any
            way, you can always fork the repository or copy a component to your
            application and take it up on your own. If you think this
            modification would be useful as part of the library, we gratefully
            accept contributions via pull request (see next section)
          </p>
        </li>
      </ul>
    </Section>
  );
}

function Contributing() {
  return (
    <Section>
      <DocTitle size={2}>Contributing</DocTitle>
      <p>Our main support channel is GitHub issues.</p>
      <div></div>
    </Section>
  );
}

function Overview() {
  return (
    <Content>
      <DocTitle size={1}>Overview</DocTitle>
      <Introduction>
        <p>
          DXC React Components is a library of reusable elements, made with the
          purpose of helping React developers with the task of implementing User
          Interfaces that follow the{" "}
          <Link href="https://developer.dxc.com" target="_blank">
            DXC Design Guidelines
          </Link>{" "}
          right out of the box.
        </p>
        <ul>
          <li>
            It increases <b>visual and behavioral consistency</b> across the
            applications using the library.
          </li>
          <li>
            It <b>cuts down development</b> time, taking the responsability of
            implementing the Design Guidelines away from the developer, and
            allowing him to focus on providing business value.
          </li>
        </ul>
      </Introduction>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Install",
            section: Install
          },
          {
            tabLabel: "Use Components",
            section: UseComponents
          },
          {
            tabLabel: "Support",
            section: Support
          }
        ]}
      ></DxcTabsForSections>
    </Content>
  );
}

const Content = styled.div`
  max-width: 1120px;
  margin: 0px auto;
  padding: 50px 20px;
`;

const Card = styled.div`
  display: flex;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;

const GithubIcon = styled.img`
  padding: 10px;
`;

const GithubText = styled.div`
  padding: 0px 30px 0px 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Link = styled.a`
  font-weight: bold;
  text-decoration: underline;
  color: black;
  letter-spacing: initial;
`;

const Introduction = styled.div`
  padding: 0px 0px 50px 0px;
  max-width: 800px;

  & li {
    margin-top: 30px;
  }
`;

export default Overview;
