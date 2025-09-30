import { DxcLink, DxcHeading, DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "What Halstack is",
    content: (
      <DxcParagraph>
        Halstack is an open source Design System built and maintained by DXC Technology with the purpose of providing
        all the necessary tools for designing and implementing accessible, intuitive and consistent user experiences
        with Figma, UXPin and React.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "A tool for designers",
        content: (
          <DxcParagraph>
            Halstack's first goal is to provide product designers with pre-created designs for the most common use-cases
            they will face during the product design stage. Using Halstack, they don't need to reinvent the wheel
            looking for a solution to these mundane problems, and can focus on adding business value. Also, by
            centralizing these efforts in a Design System team, we can pay the right amount of attention to aspects as
            important as usability, accessibility, or consistency.
          </DxcParagraph>
        ),
      },
      {
        title: "A tool for developers",
        content: (
          <DxcParagraph>
            Halstack's second goal is to simplify the handoff process from designers to developers, and facilitate the
            development of the components and patterns that already exist as part of the Design System. This way, we
            speed up the development process and minimize the room for errors when implementing these components.
          </DxcParagraph>
        ),
      },
    ],
  },
  {
    title: "What Halstack is not",
    subSections: [
      {
        title: "A headless component library",
        content: (
          <>
            <DxcParagraph>
              Unlike headless component libraries like Radix UI or Reach UI, which are intentionally agnostic of design
              decisions, Halstack is a highly opinionated Design System, and most of its value resides in its design
              opinions.
            </DxcParagraph>
            <DxcParagraph>
              Halstack React library does expose a themes API that allows developers to override many of these opinions.
              Still, the themes API has its limitations, and it is considered a work around the Design System guidelines
              to allow a restricted level of white-labeling. That means if you are designing an application and you
              already have strong UI/UX opinions, Halstack might not be the right tool for you.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "A business component library",
        content: (
          <>
            <DxcParagraph>
              All the opinions provided by Halstack Design System always remain within the boundaries of the generalist
              UI/UX design domain. Halstack will not get into business-specific elements even if they are reusable. For
              example, Halstack might provide guidelines on using forms within the context of digital applications.
              Still, it doesn't get into the specifics of designing a form for an insurance quote application.
            </DxcParagraph>
            <DxcParagraph>
              This design domain is noticeable by looking at the different configuration parameters in the Halstack
              React library, which resemble the language used by UX designers, without ever getting into the business
              semantics.
            </DxcParagraph>
            <DxcParagraph>
              Although it doesn't get into the business domain, Halstack is currently used for the most part by
              insurance applications. For this reason, many of the decisions taken and the patterns observed might be
              influenced by this reality.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "A replacement for the Product Design stage",
        content: (
          <DxcParagraph>
            Halstack should always be considered as assistance to the product design process, but never as a
            replacement. Product Designers are still a fundamental piece of this process since they will need to add the
            business context, validate the patterns contemplated by the Design System, and contribute back to the design
            system when necessary.
          </DxcParagraph>
        ),
      },
    ],
  },
  {
    title: "Assets",
    subSections: [
      {
        title: "Design guidelines",
        content: (
          <DxcParagraph>
            These are the pre-defined design opinions explained by writing. They are contained on this website and
            describe, with a high level of detail, aspects like usage, existing variants, or design specifications of
            the identified patterns.
          </DxcParagraph>
        ),
      },
      {
        title: "Figma",
        content: (
          <DxcParagraph>
            Halstack Design System is built on top of Figma, a web-based design tool that allows designers to create
            designs and prototypes. The Halstack Figma library contains all the design assets that are part of the
            Design System, and it is the source of truth for all the design decisions made by the Design System team.
          </DxcParagraph>
        ),
      },
      {
        title: "UXPin",
        content: (
          <DxcParagraph>
            UXPin is a low-code solution that can be leveraged to generate React code on top of Halstack components
            directly from the prototypes. This tool is used to generate the React code for the components that are part
            of the Halstack Design System.
          </DxcParagraph>
        ),
        subSections: [
          {
            title: "Prototyping library",
            content: (
              <DxcParagraph>
                The prototyping library is a Halstack CDK component-based design library for fast prototyping, reducing
                the gap between designers and developers. Also,{" "}
                <DxcLink href="https://www.uxpin.com/merge" newWindow>
                  UXPin Merge
                </DxcLink>{" "}
                is a low-code solution that can be leveraged to generate React code on top of Halstack components
                directly from the prototypes.
              </DxcParagraph>
            ),
          },
        ],
      },
      {
        title: "React library",
        content: (
          <DxcParagraph>
            Including tailored development tools that will assist React developers in implementing Halstack
            applications. This library attempts to bring the Design System guidelines to your application, minimizing
            the effort by abstracting developers from the implementation details while taking the design semantics into
            the code.
          </DxcParagraph>
        ),
      },
    ],
  },
  {
    title: "Supported Browsers",
    content: (
      <>
        <DxcParagraph>
          Our design system is optimized to work seamlessly on Firefox and browsers based on the Chromium engine (such
          as Google Chrome, Microsoft Edge, Brave, and Opera).
        </DxcParagraph>
        <DxcParagraph>
          Other browsers are not officially supported, which means some components or features may not behave as
          expected. For the best experience, we recommend using one of the supported browsers.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "How to use this site",
    content: (
      <>
        <DxcParagraph>
          This website contains essential information for both designers and developers. These are two different types
          of users, but they share a significant part of the journey.
        </DxcParagraph>
        <DxcParagraph>
          Some Design Systems decide to organize their documentation following a development-centric approach, mimicking
          the structure of the development libraries. That is not the case for Halstack. Since the design process starts
          with designs, the Halstack documentation site's main navigation structure follows a design-first approach.
        </DxcParagraph>
        <DxcParagraph>
          Content is always presented and arranged by design elements. Each design page contains not only information
          about usage and design specifications but also technical details about the different tools available for
          developers. These tools will help them implement the corresponding design element.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Legacy documentation sites",
    content: (
      <>
        <DxcParagraph>
          Although this is the current and only documentation we recommend reading while using Halstack Design System,
          the old site is still available through the following links for consulting legacy features and components:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.dxc.com/tools/react" newWindow>
              Previous React documentation
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.dxc.com/tools/angular" newWindow>
              Previous Angular documentation
            </DxcLink>
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          <em>Please note that these sites are discontinued and no longer supported.</em>
        </DxcParagraph>
      </>
    ),
  },
];

const IntroductionPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Introduction" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/overview/introduction/IntroductionPage.tsx" />
  </DxcFlex>
);

export default IntroductionPage;
