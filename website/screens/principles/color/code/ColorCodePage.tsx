import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import customUse from "./examples/customUse";

const sections = [
  {
    title: "Examples",
    subSections: [
      {
        title: "Internal use",
        content: (
          <>
            <DxcParagraph>
              This is an example of how some components of the Design System use
              internally the <Code>BackgroundColorProvider</Code>, in this case
              the <Code>DxcFooter</Code> knows that its background color is
              black and shows the <Code>DxcTextInput</Code> in its onDark
              version for its correct visualization.
            </DxcParagraph>
            <iframe
              src="https://codesandbox.io/embed/dark-background-jbznwb?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"
              style={{
                width: "100%",
                minHeight: "500px",
                border: "0",
                borderRadius: "4px",
                overflow: "hidden",
              }}
              title="Dark background"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </>
        ),
      },
      {
        title: "Custom use",
        content: (
          <>
            <DxcParagraph>
              If at some point it is necessary that the components of the Design
              System are aware of the color on which they are going to be
              displayed to guarantee their correct visibility, we must wrap the
              container (where the components of the Design System are going to
              be displayed) with the <Code>BackgroundColorProvider</Code> and
              pass it the background color. This way the{" "}
              <Code>BackgroundColorProvider</Code> will evaluate that color and
              if it is dark it will show the onDark version of the components.
            </DxcParagraph>
            <DxcParagraph>
              In this example we see how the same <Code>DxcTextInput</Code>{" "}
              component is shown in a different way, in the first case it is
              shown in its onDark version, since we have wrapped the container
              with the
              <Code>BackgroundColorProvider</Code> as we explained in the
              previous paragraph.
            </DxcParagraph>
            <Example example={customUse} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const ColorCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/principles/color/code/ColorCodePage.tsx" />
    </DxcFlex>
  );
};

export default ColorCodePage;
