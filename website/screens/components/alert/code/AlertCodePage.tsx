import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import basicUsage from "./examples/basicUsage";
import modal from "./examples/modal";
import Example from "@/common/example/Example";
import TableCode from "@/common/TableCode";
import Code from "@/common/Code";

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
            <td>type</td>
            <td>
              <TableCode>'info' | 'confirm' | 'warning' | 'error'</TableCode>
            </td>
            <td>Uses one of the available alert types.</td>
            <td>
              <TableCode>'info'</TableCode>
            </td>
          </tr>
          <tr>
            <td>mode</td>
            <td>
              <TableCode>'inline' | 'modal'</TableCode>
            </td>
            <td>
              Uses one of the available alert modes:
              <ul>
                <li>
                  <b>inline:</b> Renders as a regular component, following the
                  natural order of the elements in the document tree.
                </li>
                <li>
                  <b>modal:</b> The alert will be displayed in the middle of the
                  screen with an overlay layer behind. In this mode, the user
                  has the responsibility of hiding the alert with the{" "}
                  <Code>onClose</Code> event, otherwise the overlaid modal will
                  remain visible.
                </li>
              </ul>
            </td>
            <td>
              <TableCode>'inline'</TableCode>
            </td>
          </tr>
          <tr>
            <td>inlineText</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Message of the alert.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onClose</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              If defined, a close button will be displayed and this function
              will be executed when the action is clicked. When{" "}
              <Code>mode="modal"</Code> this function will also be executed when
              the background overlay is clicked. The user has the responsibility
              of hiding the modal, otherwise it will remain visible.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>children</td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>
              The details section of the alert. Can be used to render custom
              content in this area.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>
                'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
                'xxlarge' | Margin
              </TableCode>
            </td>
            <td>
              Size of the margin to be applied to the component. You can pass an
              object with 'top', 'bottom', 'left' and 'right' properties in
              order to specify different margin sizes.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>
                'small' | 'medium' | 'large' | 'fillParent' | 'fitContent'
              </TableCode>
            </td>
            <td>Size of the component.</td>
            <td>
              <TableCode>'fitContent'</TableCode>
            </td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute applied to the close
              button.
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
        title: "Modal",
        content: <Example example={modal} defaultIsVisible />,
      },
    ],
  },
];

const AlertCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/alert/code/AlertCodePage.tsx" />
    </DxcFlex>
  );
};

export default AlertCodePage;
