import React from "react";
import styled from "styled-components";
import {
  DxcQuickNav,
  DxcHeading,
  DxcText,
} from "@dxc-technology/halstack-react";

const links = [
  {
    label: "Overview",
  },
  {
    label: "Principles",
    links: [
      { label: "Color" },
      { label: "Spacing" },
      { label: "Typography" },
      { label: "Layout" },
      {
        label: "Themes",
        links: [{ label: "Light" }, { label: "Dark" }],
      },
    ],
  },
];

function App() {
  return (
    <Container>
      <ContentContainer>
        <DxcHeading level={1} text="QuickNav" margin={{ bottom: "small" }} />
        <Content id="overview">
          <DxcHeading level={2} text="Overview" margin={{ bottom: "small" }} />
          <DxcText>
            Halstack is the DXC Technology's open source design system for
            insurance products and digital experiences. Our system provides all
            the tools and resources needed to create superior, beautiful but
            above all, functional user experiences.
          </DxcText>
        </Content>
        <Content id="principles">
          <DxcHeading
            level={2}
            text="Principles"
            margin={{ top: "small", bottom: "xsmall" }}
          />
          <Content id="color">
            <DxcHeading
              level={3}
              text="Color"
              margin={{ top: "xsmall", bottom: "xsmall" }}
            />
            <DxcText>
              The color palette is an essential asset as a communication
              resource of our design system. Halstack color palette brings a
              unified consistency and helps in guiding the user's perception
              order. Our color palette is based in the HSL model . All our color
              families are calculated using the lightness value of the standard
              DXC palette colors. Color Tokens Halstack uses tokens to manage
              color. Appart from a multi-purpose greyscale family, purple and
              blue are the core color families used in our set of components.
              Additional families as red, green and yellow help as feedback
              role-based color palettes and must not be used outside this
              context.
            </DxcText>
          </Content>
          <Content id="spacing">
            <DxcHeading
              level={3}
              text="Spacing"
              margin={{ top: "xsmall", bottom: "xsmall" }}
            />
            <DxcText>
              In the search of consistent alignment between the elements we
              provide a spacing scale based on a root values of 8px and 4px. The
              numbers 4 and 8 are easily multiplied, they provide flexible and
              consistent, yet distinct enough, steps between them.
            </DxcText>
          </Content>
          <Content id="typography">
            <DxcHeading
              level={3}
              text="Typography"
              margin={{ top: "xsmall", bottom: "xsmall" }}
            />
            <DxcText>
              Our selected typography helps in structuring our user's experience
              based on the visual impact that it has on the user interface
              content. It defines what is the first noticeable piece of
              information or data based on the font shape, size, color, or type
              and it highlights some pieces of text over the rest. Some
              typographic elements used in Halstack Design System include
              headers, body, taglines, captions, and labels. Make sure you
              include all the different typographic variants in order to enhance
              the application's content structure, including the Heading
              component which defines different levels of page and section
              titles
            </DxcText>
          </Content>
          <Content id="layout">
            <DxcHeading
              level={3}
              text="Layout"
              margin={{ top: "xsmall", bottom: "xsmall" }}
            />
            <DxcText>
              The grid provides the foundation for consistently positioning
              elements onscreen. The 8x Grid is the geometric foundation of all
              the visual elements of Halstack Design System components and
              spacing. It provides structure and guidance for all creative
              decision-making.The grid provides the foundation for consistently
              positioning elements onscreen. The 8x Grid is the geometric
              foundation of all the visual elements of Halstack Design System
              components and spacing. It provides structure and guidance for all
              creative decision-making.The grid provides the foundation for
              consistently positioning elements onscreen. The 8x Grid is the
              geometric foundation of all the visual elements of Halstack Design
              System components and spacing. It provides structure and guidance
              for all creative decision-making.The grid provides the foundation
              for consistently positioning elements onscreen. The 8x Grid is the
              geometric foundation of all the visual elements of Halstack Design
              System components and spacing. It provides structure and guidance
              for all creative decision-making.The grid provides the foundation
              for consistently positioning elements onscreen. The 8x Grid is the
              geometric foundation of all the visual elements of Halstack Design
              System components and spacing. It provides structure and guidance
              for all creative decision-making.The grid provides the foundation
              for consistently positioning elements onscreen. The 8x Grid is the
              geometric foundation of all the visual elements of Halstack Design
              System components and spacing. It provides structure and guidance
              for all creative decision-making.The grid provides the foundation
              for consistently positioning elements onscreen. The 8x Grid is the
              geometric foundation of all the visual elements of Halstack Design
              System components and spacing. It provides structure and guidance
              for all creative decision-making.
            </DxcText>
          </Content>
          <Content id="themes">
            <DxcHeading
              level={3}
              text="Themes"
              margin={{ top: "xsmall", bottom: "xsmall" }}
            />
            <DxcText>
              In order to understand what a theme is, we need to understand
              first that the definition of colors, sizes, shapes... is an
              intrinsic part of a design system. Since these parameters are
              essential for guaranteeing accessibility and a good user
              experience, having the ability of changing them, might go
              frontally against the intentions of the design system. This is
              precisely what themes are, just custom defined objects that allow
              users to override fundamental decisions of Halstack Design System.
              They are a way of escaping the restrictions imposed by the Design
              System, and using themes could result in applications not being
              compliant with the Halstack guidelines, or even introducing many
              different types of accessibility issues if not used carefully.
              Typically, you would create a Halstack Design System application,
              and after that, only if there is a white-labeling requirement, we
              would apply a theme on top of the base application. This, and only
              this, is the whole purpose of using themes.In order to understand
              what a theme is, we need to understand first that the definition
              of colors, sizes, shapes... is an intrinsic part of a design
              system. Since these parameters are essential for guaranteeing
              accessibility and a good user experience, having the ability of
              changing them, might go frontally against the intentions of the
              design system. This is precisely what themes are, just custom
              defined objects that allow users to override fundamental decisions
              of Halstack Design System. They are a way of escaping the
              restrictions imposed by the Design System, and using themes could
              result in applications not being compliant with the Halstack
              guidelines, or even introducing many different types of
              accessibility issues if not used carefully. Typically, you would
              create a Halstack Design System application, and after that, only
              if there is a white-labeling requirement, we would apply a theme
              on top of the base application. This, and only this, is the whole
              purpose of using themes.In order to understand what a theme is, we
              need to understand first that the definition of colors, sizes,
              shapes... is an intrinsic part of a design system. Since these
              parameters are essential for guaranteeing accessibility and a good
              user experience, having the ability of changing them, might go
              frontally against the intentions of the design system. This is
              precisely what themes are, just custom defined objects that allow
              users to override fundamental decisions of Halstack Design System.
              They are a way of escaping the restrictions imposed by the Design
              System, and using themes could result in applications not being
              compliant with the Halstack guidelines, or even introducing many
              different types of accessibility issues if not used carefully.
              Typically, you would create a Halstack Design System application,
              and after that, only if there is a white-labeling requirement, we
              would apply a theme on top of the base application. This, and only
              this, is the whole purpose of using themes.In order to understand
              what a theme is, we need to understand first that the definition
              of colors, sizes, shapes... is an intrinsic part of a design
              system. Since these parameters are essential for guaranteeing
              accessibility and a good user experience, having the ability of
              changing them, might go frontally against the intentions of the
              design system. This is precisely what themes are, just custom
              defined objects that allow users to override fundamental decisions
              of Halstack Design System. They are a way of escaping the
              restrictions imposed by the Design System, and using themes could
              result in applications not being compliant with the Halstack
              guidelines, or even introducing many different types of
              accessibility issues if not used carefully. Typically, you would
              create a Halstack Design System application, and after that, only
              if there is a white-labeling requirement, we would apply a theme
              on top of the base application. This, and only this, is the whole
              purpose of using themes.
            </DxcText>
          </Content>
        </Content>
      </ContentContainer>
      <QuickNavContainer>
        <DxcQuickNav links={links}></DxcQuickNav>
      </QuickNavContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  margin: 0 auto;
  width: 800px;
`;

const Content = styled.div``;

const QuickNavContainer = styled.div`
  max-height: calc(100vh - 100px);
  position: sticky;
  top: 100px;
  width: 300px;
`;

export default App;
