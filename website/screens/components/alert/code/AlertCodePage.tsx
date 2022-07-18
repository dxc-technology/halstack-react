import { DxcText, DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import basicUsage from "./examples/basicUsage";
import modal from "./examples/modal";
import Example from "@/common/example/Example";
import Code from "@/common/Code";
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
            <td>type: 'info' | 'confirm' | 'warning' | 'error'</td>
            <td>
              <Code>'info'</Code>
            </td>
            <td>Uses on of the available alert types.</td>
          </tr>
          <tr>
            <td>mode: 'inline' | 'modal'</td>
            <td>
              <Code>'inline'</Code>
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
                  clicked. The user has the responsibility of hidding the modal
                  in the onClose function, otherwise the modal will remain
                  visible.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>inlineText: string</td>
            <td></td>
            <td>
              Text to display after icon and alert type and before content.
            </td>
          </tr>
          <tr>
            <td>onClose: function</td>
            <td></td>
            <td>
              This function will be called when the user clicks the close
              button. If there is no function we should close the alert by
              default.
            </td>
          </tr>
          <tr>
            <td>children: node</td>
            <td></td>
            <td>
              The details section of the alert. Can be used to render custom
              content in this area.
            </td>
          </tr>
          <tr>
            <td>margin: string | object</td>
            <td></td>
            <td>
              Size of the margin to be applied to the component ('xxsmall' |
              'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
              You can pass an object with 'top', 'bottom', 'left' and 'right'
              properties in order to specify different margin sizes.
            </td>
          </tr>
          <tr>
            <td>size: string</td>
            <td>
              <Code>'fitContent'</Code>
            </td>
            <td>
              Size of the component ('small' | 'medium' | 'large' | 'fillParent'
              | 'fitContent').
            </td>
          </tr>
          <tr>
            <td>tabIndex: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>Tabindex value given to the close button.</td>
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
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/alert/code/AlertCodePage.tsx" />
    </DxcStack>
  );
};

export default AlertCodePage;
