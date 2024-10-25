import Example from "@/common/example/Example";
import { DxcFlex, DxcHeading, DxcLink, DxcParagraph } from "@dxc-technology/halstack-react";
import building from "./examples/building";
import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import CodeBlock from "@/common/CodeBlock";
import Code from "@/common/Code";

const sections = [
  {
    title: "How to install halstack-react",
    content: (
      <>
        <DxcParagraph>
          The Halstack React component library is distributed as a{" "}
          <DxcLink href="https://www.npmjs.com/package/@dxc-technology/halstack-react" newWindow>
            npm package
          </DxcLink>
          , so you can easily install it in your project and start building with it, using your favorite package
          manager.
        </DxcParagraph>
        <DxcParagraph>
          The creation and initialization of a new project is out of the scope of this documentation. But, we strongly
          recommend our users to use{" "}
          <DxcLink href="https://vite.dev/guide/#scaffolding-your-first-vite-project" newWindow>
            Vite
          </DxcLink>{" "}
          to bootstrap their projects.
        </DxcParagraph>
        <DxcParagraph>
          In any case, React documentation provides a{" "}
          <DxcLink href="https://react.dev/learn/start-a-new-react-project" newWindow>
            guide
          </DxcLink>{" "}
          to help you get started.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: `Before you start`,
        content: (
          <>
            <DxcParagraph>
              Halstack is built on top of <Code>React</Code>, so make sure you have it installed. Also, make sure you
              have <Code>styled-components</Code> installed, as it is a dependency of Halstack too:
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
              Now you can start building your project using Halstack components. Here's a simple example to get you
              started:
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
        You can now start building your project using the Halstack Design System. But, before you do so, we recommend
        you read our design foundations. This will help you understand the principles behind the components and how to
        use them effectively.
      </DxcParagraph>
    ),
  },
];

export default function Installation() {
  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading level={1} text="Installation" weight="bold"></DxcHeading>
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/overview/installation/InstallationPage.tsx" />
    </DxcFlex>
  );
}
