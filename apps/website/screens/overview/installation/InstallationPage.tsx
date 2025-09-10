import Example from "@/common/example/Example";
import { DxcFlex, DxcHeading, DxcLink, DxcParagraph } from "@dxc-technology/halstack-react";
import building from "./examples/building";
import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import QuickNavContainer from "@/common/QuickNavContainer";
import CodeBlock from "@/common/CodeBlock";
import Code from "@/common/Code";

const sections = [
  {
    title: "How to install halstack-react",
    content: (
      <>
        <DxcParagraph>
          The Halstack component library is available as an{" "}
          <DxcLink href="https://www.npmjs.com/package/@dxc-technology/halstack-react" newWindow>
            npm package
          </DxcLink>
          , making it simple to install and integrate into your project using your preferred package manager (npm, yarn,
          pnpm, bun, etc.).
        </DxcParagraph>
        <DxcParagraph>
          Setting up and initializing a new project is beyond the scope of this documentation. However, we highly
          recommend using{" "}
          <DxcLink href="https://vite.dev/guide/#scaffolding-your-first-vite-project" newWindow>
            Vite
          </DxcLink>{" "}
          to bootstrap your projects for an optimized development experience.
        </DxcParagraph>
        <DxcParagraph>
          If needed, the official{" "}
          <DxcLink href="https://react.dev/learn/start-a-new-react-project" newWindow>
            React documentation
          </DxcLink>{" "}
          provides a comprehensive guide to help you get started.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: `Before you start`,
        content: (
          <>
            <DxcParagraph>
              As the name suggests, <Code>halstack-react</Code> is built on top of <Code>React</Code>, so make sure you
              have it as dependency of your project. Additionally, ensure that the <Code>styled-components</Code>{" "}
              library is also installed, as it is required by the Halstack components.
            </DxcParagraph>
            <CodeBlock>{`npm i react react-dom styled-components`}</CodeBlock>
          </>
        ),
      },
      {
        title: `First step: Install the package`,
        content: (
          <>
            <DxcParagraph>Run the following command in your terminal:</DxcParagraph>
            <CodeBlock>{`npm i @dxc-technology/halstack-react`}</CodeBlock>
          </>
        ),
      },
      {
        title: "Second step: Import the components",
        content: (
          <>
            <DxcParagraph>Import the components you want to use in your project:</DxcParagraph>
            <CodeBlock>
              {`import { DxcButton, DxcFlex, DxcHeading, DxcParagraph } from "@dxc-technology/halstack-react";`}
            </CodeBlock>
          </>
        ),
      },
      {
        title: "Third step: Start building",
        content: (
          <>
            <DxcParagraph>
              Now you can start building using Halstack components. Here's a simple example to get you started:
            </DxcParagraph>
            <Example defaultIsVisible example={building} />
          </>
        ),
      },
    ],
  },
  {
    title: "What's next?",
    content: (
      <DxcParagraph>
        Before you continue developing your project with Halstack, we encourage you to read our principles. This will
        help you understand the design foundations behind the components and how to use them effectively.
      </DxcParagraph>
    ),
  },
];

const InstallationPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Installation" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/overview/installation/InstallationPage.tsx" />
  </DxcFlex>
);

export default InstallationPage;
