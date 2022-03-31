import React from "react";
import {
  DxcTag,
  DxcHeading,
  DxcLink,
  DxcFooter,
  DxcApplicationLayout,
} from "@dxc-technology/halstack-react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Section from "../components/common/Section";
import githubLogo from "./github-logo.png";
import dxcLogo from "./dxc-logo.svg";
import reactLogo from "../../common/react-icon.png";
import Header from "../../common/Header";

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
      <DxcButton mode="primary" label="Primary Button" onClick={onClick} />
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
        You will need to create an object with your colors preferences. In this
        object, you will have as much objects as components you want to
        customize, using the next structure:
        <SyntaxHighlighter language="javascript" style={docco}>
          {`
  componentName: {
    themeInput: "value", 
  }
  
`}
        </SyntaxHighlighter>
        The theme inputs for each component are documented in the themes
        guidelines.
      </p>

      <p>
        You will also need to import ThemeProvider, and use it to wrap the
        component and pass your colors object as the theme property.
      </p>

      <p>This is an example that includes the necessary code:</p>

      <SyntaxHighlighter language="javascript" style={docco}>
        {`
  import { DxcButton, ThemeProvider } from "@dxc-technology/halstack-react";

  const colors = {
      accordion: {
        accentColor: "#6f2c91", // accordion's accent color theme input
        fontColor: "#666666" // accordion's font color theme input
      },
      button: {
        baseColor: "#5f249f", // button's base color theme input
        primaryFontColor: "#ffffff",  // button's primary font color theme input
        secondaryHoverFontColor: "#ffffff", // button's secondary hover font color theme input
      },
      checkbox: {
        baseColor: "#0067b3", // checkbox's base color theme input
        checkColor: "#ffffff", // checkbox's check color theme input
      },
      chip: {
        baseColor: "#e6e6e6", // chip's base color theme input
        fontColor: "#000000", // chip's font color theme input
      },
      dateInput: {
        baseColor: "#6f2c91", // date's base color theme input
        accentColor: "#ffffff", // date's accent color theme input
      },
      dropdown: {
        baseColor: "#ffffff", // dropdown's base color theme input
        fontColor: "#000000", // dropdown's font color theme input
      },
      fileInput: {
        fontColor: "#000000", // file input's font color theme input
      },
      footer: {
        baseColor: "#000000", // footer's base color theme input
        fontColor: "#ffffff", // footer's font color theme input
        accentColor: "#0095ff", // footer's accent color theme input
        logo: "yahooLogo", // footer's logo theme input
      },
      header: {
        baseColor: "#ffffff", // header's base color theme input
        accentColor: "#000000", // header's accent color theme input
        fontColor: "#000000", // header's font color theme input
        menuBaseColor: "#ffffff", // header's menu base color theme input
        hamburguerColor: "#000000", // header's hamburguer color theme input
        logo: "yahooLogo",// header's logo theme input
        logoResponsive: "yahooLogo", // header's logo responsive theme input
        contentColor: "#000000", // header's content color theme input
      },
      paginator: {
        baseColor: "#eeeeee", // paginator's base color theme input
        fontColor: "#000000", // paginator's font color theme input
      },
      progressBar: {
        accentColor: "#5f249f", // progress bar's accent color theme input
        baseColor: "#cecece", // progress bar's base color theme input
      },
      radio: {
        baseColor: "#000000", // radio's base color theme input
      },
      select: {
        baseColor: "#d9d9d9", // select's base color theme input
        fontColor: "#000000", // select's font color theme input
      },
      sidenav: {
        baseColor: "#f8f8f8", // sidenav's base color theme input
        arrowBaseColor: "#f8f8f8", // sidenav's arrow base color theme input
        arrowAccentColor: "#000000", // sidenav's arrow accent color theme input
      },
      slider: {
        baseColor: "#0067b3", // slider's base color theme input
      },
      spinner: {
        accentColor: "#5f249f", // spinner's accent color theme input
        baseColor: "#ffffff", // spinner's base color theme input
      },
      switch: {
        checkedBaseColor: "#5f249f", // switch's checked base color theme input
      },
      table: {
        baseColor: "#5f249f", // table's base color theme input
        fontColor: "#ffffff", // table's font color theme input
      },
      tabs: {
        baseColor: "#5f249f", // tabs' base color theme input
      },
      textInput: {
        baseColor: "#f2f2f2", // text input's base color theme input
      },
      toggleGroup: {
        selectedBaseColor: "#5f249f", // toggle group's selected base color theme input        
        selectedFontColor: "#ffffff", // toggle group's selected font color theme input
        unselectedBaseColor: "#e6e6e6", // toggle group's unselected base color theme input
        unselectedFontColor: "#000000", // toggle group's unselected font color theme input
      },
      wizard: {
        baseColor: "#5f249f", // wizard's base color theme input
        fontColor: "#ffffff", // wizard's font color theme input
      },
  };

  const MyComponent = () => {
    return (
      <ThemeProvider theme={colors}>
        <DxcButton
          mode="primary"
          label="Button"
          onClick={onClick}
          size="large"
          margin="small"
        />
      </ThemeProvider>
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
          icon={githubLogo}
          label="GitHub Issues"
        ></DxcTag>

        <p>
          You are welcome to open an issue there at any time, but before doing
          it, please consider the following:
        </p>
        <ul>
          <li>
            Somebody else might have already created an issue regarding your
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
    <DxcApplicationLayout>
      <DxcApplicationLayout.Header>
        <StyledHeader>
          <Header></Header>
        </StyledHeader>
      </DxcApplicationLayout.Header>
      <DxcApplicationLayout.Main>
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
              linkHref="https://developer.dxc.com/design/guidelines/principles/overview"
              icon={dxcLogo}
              label="Design Guidelines"
            ></DxcTag>
            <DxcTag
              margin={{ top: "medium", bottom: "medium", right: "medium" }}
              linkHref="https://github.com/dxc-technology/halstack-react"
              icon={githubLogo}
              label="GitHub"
            ></DxcTag>
          </LinksSection>
          <Introduction>
            <p>
              DXC React Components is a library of reusable elements, made with
              the purpose of helping React developers with the task of
              implementing User Interfaces that follow the{" "}
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
                It <b>cuts down development</b> time, taking the responsability
                of implementing the Design Guidelines away from the developer,
                and allowing him to focus on providing business value.
              </li>
            </ul>
          </Introduction>
          <Install></Install>
          <UseComponents></UseComponents>
          <CustomThemes></CustomThemes>
          <Support></Support>
        </Content>
      </DxcApplicationLayout.Main>
      <DxcApplicationLayout.Footer>
        <DxcFooter
          bottomLinks={[
            { text: "Twitter", href: "http://www.google.com" },
            { text: "Facebook", href: "http://www.google.com" },
            { text: "Instagram", href: "http://www.google.com" },
          ]}
        ></DxcFooter>
      </DxcApplicationLayout.Footer>
    </DxcApplicationLayout>
  );
}
const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
`;

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
  padding: 0px 0px 30px 0px;
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
