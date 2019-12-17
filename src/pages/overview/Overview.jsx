import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";
import styled from "styled-components";

import DocTitle from "../../common/DocTitle";
import Section from "../components/common/Section";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

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

function Overview() {
  return (
    <div>
      <Content>
        <DocTitle size={1}>Overview</DocTitle>
        <Introduction>
          <p>
            DXC React Components is a library of reusable elements, made with
            the purpose of helping React developers with the task of
            implementing User Interfaces that follow the{" "}
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
            }
          ]}
        ></DxcTabsForSections>
      </Content>
    </div>
  );
}

const Content = styled.div`
  max-width: 1120px;
  margin: 0px auto;
  padding: 0px 20px;
`;

const Link = styled.a`
  font-weight: bold;
  text-decoration: underline;
  color: black;
  letter-spacing: initial;
`;

const Title = styled.h3`
  border-bottom: 1px solid black;
`;

const CodeBlock = styled.h3`
  font-family: Monaco, Menlo, Consolas, "Droid Sans Mono", Inconsolata,
    "Courier New", monospace;
  line-height: 1.6;
  background: gray;
  padding: 10px;
`;

const Introduction = styled.div`
  padding: 0px 0px 50px 0px;
  color: gray;
  font-size: 16px;
  letter-spacing: 1px;
  max-width: 800px;

  & li {
    margin-top: 30px;
  }
`;

export default Overview;
