import React from "react";
import styled from "styled-components";
import DxcQuickNav from "./QuickNav";
import DxcHeading from "../heading/Heading";
import DxcText from "../text/Text";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "QuickNav",
  component: DxcQuickNav,
};

const links = [
  {
    label: "Overview",
    id: "overview",
    links: [
      {
        label: "Introduction",
        id: "introduction",
      },
    ],
  },
  {
    label: "Principles",
    id: "principles",
    links: [
      { label: "Color", id: "color" },
      { label: "Spacing", id: "spacing" },
      { label: "Typography", id: "typography" },
    ],
  },
];

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default" level={4} />
      <QuickNavContainer>
        <DxcQuickNav title="Sections" links={links}></DxcQuickNav>
      </QuickNavContainer>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Link hovered" level={4} />
      <QuickNavContainer>
        <DxcQuickNav title="Sections" links={links}></DxcQuickNav>
      </QuickNavContainer>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="QuickNav with content" level={4} />
      <Container>
        <ContentContainer>
          <Content id="overview">
            <DxcHeading level={1} text="Overview" margin={{ bottom: "small" }} />
            <DxcText>
              Halstack is the DXC Technology's open source design system for insurance products and digital experiences.
              Our system provides all the tools and resources needed to create superior, beautiful but above all,
              functional user experiences. Halstack is the DXC Technology's open source design system for insurance
              products and digital experiences. Our system provides all the tools and resources needed to create
              superior, beautiful but above all, functional user experiences.Halstack is the DXC Technology's open
              source design system for insurance products and digital experiences. Our system provides all the tools and
              resources needed to create superior, beautiful but above all, functional user experiences.Halstack is the
              DXC Technology's open source design system for insurance products and digital experiences. Our system
              provides all the tools and resources needed to create superior, beautiful but above all, functional user
              experiences.Halstack is the DXC Technology's open source design system for insurance products and digital
              experiences. Our system provides all the tools and resources needed to create superior, beautiful but
              above all, functional user experiences.Halstack is the DXC Technology's open source design system for
              insurance products and digital experiences. Our system provides all the tools and resources needed to
              create superior, beautiful but above all, functional user experiences.Halstack is the DXC Technology's
              open source design system for insurance products and digital experiences. Our system provides all the
              tools and resources needed to create superior, beautiful but above all, functional user experiences.
            </DxcText>
            <Content id="introduction">
              <DxcHeading level={2} text="Introduction" margin={{ top: "xsmall", bottom: "xsmall" }} />
              <DxcText>
                Design principles Halstack design principles are the fundamental part of DXC Technology's approach to
                provide guidance for development teams in order to deliver delightful and consistent user experiences to
                our customers: Balance Consistency Visual hierarchy All our components, design tokens, accessibility
                guidelines, responsive design techniques, and layout proposals have been carefully curated by DXC design
                and engineering teams with the objective of creating a unique visual language and ecosystem for our
                applications. This is the DXC way of creating User Experiences. Open Source Halstack is an open source
                design system, this means that we work towards DXC Technology bussines needs, but it is open for anyone
                to use and contribute back to. We are charmed to receive external contributions to help us find bugs,
                design new features, or help us improve the project documentation. If you're interested, definitely
                check out our contribution guidelines.Design principles Halstack design principles are the fundamental
                part of DXC Technology's approach to provide guidance for development teams in order to deliver
                delightful and consistent user experiences to our customers: Balance Consistency Visual hierarchy All
                our components, design tokens, accessibility guidelines, responsive design techniques, and layout
                proposals have been carefully curated by DXC design and engineering teams with the objective of creating
                a unique visual language and ecosystem for our applications. This is the DXC way of creating User
                Experiences. Open Source Halstack is an open source design system, this means that we work towards DXC
                Technology bussines needs, but it is open for anyone to use and contribute back to. We are charmed to
                receive external contributions to help us find bugs, design new features, or help us improve the project
                documentation. If you're interested, definitely check out our contribution guidelines.Design principles
                Halstack design principles are the fundamental part of DXC Technology's approach to provide guidance for
                development teams in order to deliver delightful and consistent user experiences to our customers:
                Balance Consistency Visual hierarchy All our components, design tokens, accessibility guidelines,
                responsive design techniques, and layout proposals have been carefully curated by DXC design and
                engineering teams with the objective of creating a unique visual language and ecosystem for our
                applications. This is the DXC way of creating User Experiences. Open Source Halstack is an open source
                design system, this means that we work towards DXC Technology bussines needs, but it is open for anyone
                to use and contribute back to. We are charmed to receive external contributions to help us find bugs,
                design new features, or help us improve the project documentation. If you're interested, definitely
                check out our contribution guidelines.
              </DxcText>
            </Content>
          </Content>
          <Content id="principles">
            <DxcHeading level={1} text="Principles" margin={{ top: "small", bottom: "xsmall" }} />
            <Content id="color">
              <DxcHeading level={2} text="Color" margin={{ top: "xsmall", bottom: "xsmall" }} />
              <DxcText>
                The color palette is an essential asset as a communication resource of our design system. Halstack color
                palette brings a unified consistency and helps in guiding the user's perception order. Our color palette
                is based in the HSL model . All our color families are calculated using the lightness value of the
                standard DXC palette colors. Color Tokens Halstack uses tokens to manage color. Appart from a
                multi-purpose greyscale family, purple and blue are the core color families used in our set of
                components. Additional families as red, green and yellow help as feedback role-based color palettes and
                must not be used outside this context.The color palette is an essential asset as a communication
                resource of our design system. Halstack color palette brings a unified consistency and helps in guiding
                the user's perception order. Our color palette is based in the HSL model . All our color families are
                calculated using the lightness value of the standard DXC palette colors. Color Tokens Halstack uses
                tokens to manage color. Appart from a multi-purpose greyscale family, purple and blue are the core color
                families used in our set of components. Additional families as red, green and yellow help as feedback
                role-based color palettes and must not be used outside this context.The color palette is an essential
                asset as a communication resource of our design system. Halstack color palette brings a unified
                consistency and helps in guiding the user's perception order. Our color palette is based in the HSL
                model . All our color families are calculated using the lightness value of the standard DXC palette
                colors. Color Tokens Halstack uses tokens to manage color. Appart from a multi-purpose greyscale family,
                purple and blue are the core color families used in our set of components. Additional families as red,
                green and yellow help as feedback role-based color palettes and must not be used outside this
                context.The color palette is an essential asset as a communication resource of our design system.
                Halstack color palette brings a unified consistency and helps in guiding the user's perception order.
                Our color palette is based in the HSL model . All our color families are calculated using the lightness
                value of the standard DXC palette colors. Color Tokens Halstack uses tokens to manage color. Appart from
                a multi-purpose greyscale family, purple and blue are the core color families used in our set of
                components. Additional families as red, green and yellow help as feedback role-based color palettes and
                must not be used outside this context.The color palette is an essential asset as a communication
                resource of our design system. Halstack color palette brings a unified consistency and helps in guiding
                the user's perception order. Our color palette is based in the HSL model . All our color families are
                calculated using the lightness value of the standard DXC palette colors. Color Tokens Halstack uses
                tokens to manage color. Appart from a multi-purpose greyscale family, purple and blue are the core color
                families used in our set of components. Additional families as red, green and yellow help as feedback
                role-based color palettes and must not be used outside this context.
              </DxcText>
            </Content>
            <Content id="spacing">
              <DxcHeading level={2} text="Spacing" margin={{ top: "xsmall", bottom: "xsmall" }} />
              <DxcText>
                In the search of consistent alignment between the elements we provide a spacing scale based on a root
                values of 8px and 4px. The numbers 4 and 8 are easily multiplied, they provide flexible and consistent,
                yet distinct enough, steps between them.In the search of consistent alignment between the elements we
                provide a spacing scale based on a root values of 8px and 4px. The numbers 4 and 8 are easily
                multiplied, they provide flexible and consistent, yet distinct enough, steps between them.In the search
                of consistent alignment between the elements we provide a spacing scale based on a root values of 8px
                and 4px. The numbers 4 and 8 are easily multiplied, they provide flexible and consistent, yet distinct
                enough, steps between them.In the search of consistent alignment between the elements we provide a
                spacing scale based on a root values of 8px and 4px. The numbers 4 and 8 are easily multiplied, they
                provide flexible and consistent, yet distinct enough, steps between them.In the search of consistent
                alignment between the elements we provide a spacing scale based on a root values of 8px and 4px. The
                numbers 4 and 8 are easily multiplied, they provide flexible and consistent, yet distinct enough, steps
                between them.In the search of consistent alignment between the elements we provide a spacing scale based
                on a root values of 8px and 4px. The numbers 4 and 8 are easily multiplied, they provide flexible and
                consistent, yet distinct enough, steps between them.In the search of consistent alignment between the
                elements we provide a spacing scale based on a root values of 8px and 4px. The numbers 4 and 8 are
                easily multiplied, they provide flexible and consistent, yet distinct enough, steps between them.
              </DxcText>
            </Content>
            <Content id="typography">
              <DxcHeading level={2} text="Typography" margin={{ top: "xsmall", bottom: "xsmall" }} />
              <DxcText>
                Our selected typography helps in structuring our user's experience based on the visual impact that it
                has on the user interface content. It defines what is the first noticeable piece of information or data
                based on the font shape, size, color, or type and it highlights some pieces of text over the rest. Some
                typographic elements used in Halstack Design System include headers, body, taglines, captions, and
                labels. Make sure you include all the different typographic variants in order to enhance the
                application's content structure, including the Heading component which defines different levels of page
                and section titles.Our selected typography helps in structuring our user's experience based on the
                visual impact that it has on the user interface content. It defines what is the first noticeable piece
                of information or data based on the font shape, size, color, or type and it highlights some pieces of
                text over the rest. Some typographic elements used in Halstack Design System include headers, body,
                taglines, captions, and labels. Make sure you include all the different typographic variants in order to
                enhance the application's content structure, including the Heading component which defines different
                levels of page and section titles.Our selected typography helps in structuring our user's experience
                based on the visual impact that it has on the user interface content. It defines what is the first
                noticeable piece of information or data based on the font shape, size, color, or type and it highlights
                some pieces of text over the rest. Some typographic elements used in Halstack Design System include
                headers, body, taglines, captions, and labels. Make sure you include all the different typographic
                variants in order to enhance the application's content structure, including the Heading component which
                defines different levels of page and section titles.Our selected typography helps in structuring our
                user's experience based on the visual impact that it has on the user interface content. It defines what
                is the first noticeable piece of information or data based on the font shape, size, color, or type and
                it highlights some pieces of text over the rest. Some typographic elements used in Halstack Design
                System include headers, body, taglines, captions, and labels. Make sure you include all the different
                typographic variants in order to enhance the application's content structure, including the Heading
                component which defines different levels of page and section titles.Our selected typography helps in
                structuring our user's experience based on the visual impact that it has on the user interface content.
                It defines what is the first noticeable piece of information or data based on the font shape, size,
                color, or type and it highlights some pieces of text over the rest. Some typographic elements used in
                Halstack Design System include headers, body, taglines, captions, and labels. Make sure you include all
                the different typographic variants in order to enhance the application's content structure, including
                the Heading component which defines different levels of page and section titles.
              </DxcText>
            </Content>
          </Content>
        </ContentContainer>
        <QuickNavContainer>
          <DxcQuickNav title="Sections" links={links}></DxcQuickNav>
        </QuickNavContainer>
      </Container>
    </ExampleContainer>
  </>
);

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
