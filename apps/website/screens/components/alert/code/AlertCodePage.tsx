import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import basicUsage from "./examples/basicUsage";
import semantic from "./examples/semantic";
import severalMessages from "./examples/severalMessages";
import Example from "@/common/example/Example";
import TableCode, { ExtendedTableCode } from "@/common/TableCode";
import Code from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

const actionTypeString = `{
  icon?: (React.ReactNode 
    & React.SVGProps<SVGSVGElement>); 
  label: string;
  onClick: () => void;
}`;

const messageTypeString = `{
  onClose?: () => void;
  text: React.ReactNode;
}`;

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
            <td>closable</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the alert will have a close button that will remove the message from the alert, only in banner
              and inline modes. The rest of the functionality will depend on the <Code>onClose</Code> event of each
              message (e.g. closing the modal alert).
            </td>
            <td>
              <TableCode>true</TableCode>
            </td>
          </tr>
          <tr>
            <td>message</td>
            <td>
              <td>
                <TableCode>{"Message | Message[]"}</TableCode>
                <p>
                  being <Code>Message</Code> an object with the following properties:
                </p>
                <ExtendedTableCode>{messageTypeString}</ExtendedTableCode>
              </td>
            </td>
            <td>
              List of messages to be displayed. Each message has a close action that will, apart from remove from the
              alert the current message, call the <Code>onClose</Code> if it is defined. If the message is an array, the
              alert will show a navigation bar to move between the messages. <br />
              The <Code>modal</Code> mode only allows one message per alert. In this case, the message must be an object
              and the presence of the <Code>onClose</Code> attribute is mandatory, since the management of the closing
              of the alert relies completely on the user.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>mode</td>
            <td>
              <TableCode>'inline' | 'modal' | 'banner'</TableCode>
            </td>
            <td>
              The mode of the alert. The possible values are:
              <ul>
                <li>
                  <b>inline:</b> The alert must be displayed in the same place where it is declared. The user can
                  navigate between the messages if the message is an array.
                </li>
                <li>
                  <b>modal:</b> The alert will be displayed in the middle of the screen with an overlay layer behind. In
                  this mode, the user has the responsibility of hiding the alert with the <Code>onClose</Code> event of
                  the message, otherwise the overlaid modal will remain visible.
                </li>
                <li>
                  <b>banner:</b> The alert must be displayed at the top of the screen. The user can navigate between the
                  messages if the message is an array.
                </li>
              </ul>
            </td>
            <td>
              <TableCode>'inline'</TableCode>
            </td>
          </tr>
          <tr>
            <td>primaryAction</td>
            <td>
              <ExtendedTableCode>{actionTypeString}</ExtendedTableCode>
            </td>
            <td>Primary action of the alert.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>secondaryAction</td>
            <td>
              <ExtendedTableCode>{actionTypeString}</ExtendedTableCode>
            </td>
            <td>Secondary action of the alert.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>semantic</td>
            <td>
              <TableCode>'error' | 'info' | 'success' | 'warning'</TableCode>
            </td>
            <td>Specifies the semantic meaning of the alert.</td>
            <td>
              <TableCode>'info'</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusBadge status="required" />
                title
              </DxcFlex>
            </td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Title of the alert.</td>
            <td>-</td>
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
        title: "Semantics",
        content: <Example example={semantic} defaultIsVisible />,
      },
      {
        title: "Several messages",
        content: <Example example={severalMessages} defaultIsVisible />,
      },
    ],
  },
];

const AlertCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/alert/code/AlertCodePage.tsx" />
  </DxcFlex>
);

export default AlertCodePage;
