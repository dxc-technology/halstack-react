import { DxcParagraph, DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import withContent from "./examples/withContent";
import backgroundClick from "./examples/backgroundClick";
import Code, { TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                children
              </DxcFlex>
            </td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>
              Area within the dialog that can be used to render custom content. We strongly encourage users to not
              change the <Code>tabindex</Code> of the inner components or elements. This can lead to unpredictable
              behaviour for keyboard users, affecting the order of focus and focus locking within the dialog.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the close button will be visible.</td>
            <td>
              <TableCode>true</TableCode>
            </td>
          </tr>
          <tr>
            <td>onBackgroundClick</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks on the background of the modal. The responsibility of hiding the
              dialog lies with the user.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onCloseClick</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks the close button. The responsibility of hiding the
              dialog lies with the user.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>overlay</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the dialog will be displayed over a darker background that covers the content behind.</td>
            <td>
              <TableCode>true</TableCode>
            </td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> applied to the close button. Note that values greater than 0 are
              strongly discouraged. It can lead to unexpected behaviours with the focus within the dialog.
            </td>
            <td>
              <TableCode>0</TableCode>
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
              This is an example of how to use the Dialog to display multiple inputs and buttons to collect information.
            </DxcParagraph>
            <Example example={withContent} defaultIsVisible />
          </>
        ),
      },
      {
        title: "With background click event",
        content: (
          <>
            <DxcParagraph>Example of a dialog that will close when the user clicks anywhere outside it.</DxcParagraph>
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
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/dialog/code/DialogCodePage.tsx" />
    </DxcFlex>
  );
};

export default DialogCodePage;
