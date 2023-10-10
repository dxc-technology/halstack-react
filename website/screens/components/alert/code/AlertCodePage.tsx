import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import basicUsage from "./examples/basicUsage";
import modal from "./examples/modal";
import Example from "@/common/example/Example";
import TableCode from "@/common/TableCode";

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
            <td>Uses on of the available alert types.</td>
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
              Uses on of the available alert modes:
              <ul>
                <li>
                  <strong>inline:</strong> If onClose function is received,
                  close button will be visible and the function will be executed
                  when it's clicked. There is no overlay layer. Position should
                  be decided by the user.
                </li>
                <li>
                  <strong>modal:</strong> The alert will be displayed in the
                  middle of the screen with an overlay layer behind. The onClose
                  function will be executed when the X button or the overlay is
                  clicked. The user has the responsibility of hiding the modal
                  in the onClose function, otherwise the modal will remain
                  visible.
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
            <td>
              Text to display after icon and alert type and before content.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onClose</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks the close
              button. If there is no function we should close the alert by
              default.
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
            <td>Tabindex value given to the close button.</td>
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
