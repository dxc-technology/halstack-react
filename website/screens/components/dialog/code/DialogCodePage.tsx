import { DxcText, DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import withContent from "./examples/withContent";
import backgroundClick from "./examples/backgroundClick";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Default</th>
            <HeaderDescriptionCell>Description</HeaderDescriptionCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>isCloseVisible: boolean</td>
            <td>
              <Code>true</Code>
            </td>
            <td>If true, the close 'x' button will be visible.</td>
          </tr>
          <tr>
            <td>onCloseClick: function</td>
            <td></td>
            <td>
              This function will be called when the user clicks the close 'x'
              button. The responsibility of hiding the dialog lies with the
              user.
            </td>
          </tr>
          <tr>
            <td>onBackgroundClick: function</td>
            <td></td>
            <td>
              This function will be called when the user clicks background. The
              responsibility of hiding the dialog lies with the user.
            </td>
          </tr>
          <tr>
            <td>overlay: boolean</td>
            <td>
              <Code>true</Code>
            </td>
            <td>
              If true, the dialog will be displayed over a darker background
              that covers the content behind.
            </td>
          </tr>
          <tr>
            <td>padding: string | object</td>
            <td>
              <Code>'small'</Code>
            </td>
            <td>
              Size of the padding to be applied to the component ('xxsmall' |
              'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
              You can pass an object with 'top', 'bottom', 'left' and 'right'
              properties in order to specify different padding sizes.
            </td>
          </tr>
          <tr>
            <td>tabIndex: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>Value of the tabindex given to the close 'x' button.</td>
          </tr>
          <tr>
            <td>children: node</td>
            <td></td>
            <td>
              The area inside the dialog. This area can be used to render custom
              content.
            </td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "With content",
        content: (
          <>
            <DxcText as="p">
              This is an example of how to use the Dialog to display multiple
              inputs and buttons to collect information.
            </DxcText>
            <Example example={withContent} defaultIsVisible />
          </>
        ),
      },
      {
        title: "With background click event",
        content: (
          <>
            <DxcText as="p">
              Example of a dialog that will close when the user clicks anywhere
              outside it.
            </DxcText>
            <Example example={backgroundClick} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const DialogCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/dialog/code/DialogCodePage.tsx" />
    </DxcFlex>
  );
};

export default DialogCodePage;
