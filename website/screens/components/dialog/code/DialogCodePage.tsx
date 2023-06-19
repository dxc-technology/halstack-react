import {
  DxcParagraph,
  DxcFlex,
  DxcTable,
  DxcAlert,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import withContent from "./examples/withContent";
import backgroundClick from "./examples/backgroundClick";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import StatusTag from "@/common/StatusTag";
import Link from "next/link";

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
            <td>tabIndex: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>
              Value of the tabindex given to the close 'x' button. Note that
              values greater than 0 are strongly discouraged.
            </td>
          </tr>
          <tr>
            <td>children: node</td>
            <td></td>
            <td>
              Area within the dialog that can be used to render custom content.
              We strongly encourage users to not change the{" "}
              <Code>tabindex</Code> of the inner components or elements. This
              can lead to unpredictable behaviour for keyboard users, affecting
              the order of focus and focus locking within the dialog.
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
            <DxcParagraph>
              This is an example of how to use the Dialog to display multiple
              inputs and buttons to collect information.
            </DxcParagraph>
            <Example example={withContent} defaultIsVisible />
          </>
        ),
      },
      {
        title: "With background click event",
        content: (
          <>
            <DxcParagraph>
              Example of a dialog that will close when the user clicks anywhere
              outside it.
            </DxcParagraph>
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
