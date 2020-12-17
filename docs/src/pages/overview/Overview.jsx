import React from "react";
import {
  DxcTabsForSections,
  DxcTag,
  DxcHeading,
  DxcLink,
} from "@dxc-technology/halstack-react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Section from "../components/common/Section";
import githubLogo from "./github-logo.png";
import dxcLogo from "./dxc-logo.png";
import reactLogo from "../../common/react-icon.png";

function Install() {
  return (
    <Section>
      <DxcHeading level={3} text="Install" />
      <p>
        DXC React Components is a library made for React. In order to use it,
        you need to include it in an existing React project.
      </p>

      <p>
        If you are creating a React application from scratch, we recommend using{" "}
        <DxcLink
          href="https://create-react-app.dev/"
          inheritColor
          newWindow
          text="create-react-app"
        ></DxcLink>{" "}
        to set it up with minimum configuration.
      </p>
      <p>
        DXC React Components is distributed as an npm package. styled-components
        is a peer dependency, so in order to use it in an existing project:
      </p>
      <SyntaxHighlighter language="php" style={docco}>
        {`
  # with npm
  npm install @dxc-technology/halstack-react styled-components

  # with yarn
  yarn add @dxc-technology/halstack-react styled-components
        `}
      </SyntaxHighlighter>
    </Section>
  );
}

function UseComponents() {
  return (
    <Section>
      <DxcHeading level={3} text="Use Components" />
      <p>
        A list of components is available in the{" "}
        <DxcLink
          href="https://developer.dxc.com/design/components"
          inheritColor
          newWindow
          text="components screen"
        ></DxcLink>{" "}
        . The API documentation of every component is available in that screen,
        as well as a set of examples with a live code editor.
      </p>

      <p>
        After having installed the npm package you will be able to import it and
        use it in you application.
      </p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {`
  import { DxcButton } from "@dxc-technology/halstack-react";

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

function CustomThemes() {
  return (
    <Section>
      <DxcHeading level={3} text="Custom Themes" />
      <p>
        If the colors of a component's theme do not match your wishes or
        requirements, you can modify them in order to customize the component.
      </p>

      <p>
        You will need to create an object with your colors preferences. The
        variables are documented in each component's documentation. You will
        also need to import ThemeContext, and use it to wrap the component and
        pass your colors object as the value property.
      </p>

      <p>This is an example that includes the necessary code:</p>

      <SyntaxHighlighter language="javascript" style={docco}>
        {`
  import { DxcButton, ThemeContext } from "@dxc-technology/halstack-react";

  const colors = {
    button: {
      color: "#FFED00",
      hoverColor: "#000000",

      primaryFontColor: "#000000",
      primaryHoverFontColor: "#FFED00",

      secondaryFontColor: "#000000",
      secondaryHoverFontColor: "#000000",

      textFontColor: "#000000",
      textHoverFontColor: "#FFFFFF"
    },
    checkbox: {
      color: "#FFED00",
      checkColor: "#000000",
      fontColor: "#000000"
    },
    radio: {
      color: "#000000"
    },
    select: {
      selectedOptionBackgroundColor: "#D9D9D9"
    },
    slider: {
      color: "#000000"
    }
  };

  const MyComponent = () => {
    return (
      <ThemeContext.Provider value={colors}>
        <DxcButton mode="basic" label="Basic Button" ></DxcButton>
      </ThemeContext.Provider>
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
      <StyledSupport>
        <DxcHeading level={3} text="Support and Feature request" />
        <p>
          For any questions or requests, our main support channel is GitHub
          issues.
        </p>
        <DxcTag
          margin={{ top: "medium", bottom: "medium", right: "medium" }}
          linkHref="https://github.com/dxc-technology/halstack-react"
          iconSrc={githubLogo}
          label="GitHub Issues"
        ></DxcTag>

        <p>
          You are welcome to open an issue there at any time, but before doing
          it, please consider the following:
        </p>
        <ul>
          <li>
            Somebody else migh have already created an issue regarding your
            question or feature request. Please use the search functionality and{" "}
            <b>avoid the creation of duplicated issues</b>. In case you want to
            provide your input or express your interest in a feature request,
            please do it in the existing issue.
          </li>
          <li>
            These components are built with the intention of helping developers
            with the most common use cases. But at the same time, we want to
            keep their APIs as simple and intuitive as possible. If you notice a
            missing feature, the team is always happy to discuss about it. But
            please have in mind that we might decide to give it a{" "}
            <b>lower priority</b> than what you could expect, or{" "}
            <b>even reject</b> it for the sake of API simplicity.
          </li>
          <li>
            In case you need a <b>missing feature</b>, or modify a component in
            any way, you can always <b>fork</b> the repository or copy a
            component to your application and take it up on your own. If you
            think this modification would be useful as part of the library, we
            gratefully accept contributions via pull request (see next section)
          </li>
        </ul>
      </StyledSupport>
    </Section>
  );
}

function Overview() {
  return (
    <Content>
      <OverviewHeader>
        <ReactLogo src={reactLogo}></ReactLogo>
        <HeaderTitles>
          <Title>Dxc Components</Title>
          <Subtitle>For React</Subtitle>
        </HeaderTitles>
      </OverviewHeader>
      <LinksSection>
        <DxcTag
          margin={{ top: "medium", bottom: "medium", right: "medium" }}
          linkHref="https://developer.dxc.com/design/principles"
          iconSrc={dxcLogo}
          label="Design Guidelines"
        ></DxcTag>
        <DxcTag
          margin={{ top: "medium", bottom: "medium", right: "medium" }}
          linkHref="https://github.com/dxc-technology/halstack-react"
          iconSrc={githubLogo}
          label="GitHub"
        ></DxcTag>
      </LinksSection>
      <Introduction>
        <p>
          DXC React Components is a library of reusable elements, made with the
          purpose of helping React developers with the task of implementing User
          Interfaces that follow the{" "}
          <DxcLink
            href="https://developer.dxc.com"
            inheritColor
            newWindow
            text="DXC Design Guidelines"
          ></DxcLink>{" "}
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
            section: Install,
          },
          {
            tabLabel: "Use Components",
            section: UseComponents,
          },
          {
            tabLabel: "Custom Themes",
            section: CustomThemes,
          },
          {
            tabLabel: "Support",
            section: Support,
          },
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

const OverviewHeader = styled.div`
  display: flex;
  margin: 40px 0px;
`;

const ReactLogo = styled.img`
  width: 70px;
  height: 70px;
`;

const HeaderTitles = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #000000;
  margin-left: 10px;
`;

const Title = styled.h1`
  margin: 0px;
  font-size: 35px;
  line-height: 40px;
`;

const Subtitle = styled.h2`
  margin: 0px;
  font-size: 25px;
  line-height: 20px;
  color: #474747;
  font-weight: normal;
`;

const LinksSection = styled.div`
  display: flex;
  margin: 70px 0px 50px 0px;
`;

const Introduction = styled.div`
  padding: 0px 0px 100px 0px;
  max-width: 800px;
  & li {
    margin-top: 30px;
  }
`;

const StyledSupport = styled.div`
  & li {
    margin-top: 30px;
  }
`;

export default Overview;
