import React, { useState } from "react";
import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import basicUsage from "./examples/basicUsage";
import banner from "./examples/banner";
import modal from "./examples/modal";
import semantic from "./examples/semantic";
import actions from "./examples/actions";
import severalMessages from "./examples/severalMessages";
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
            <td>title</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Title of the alert.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>message</td>
            <td>
              <td>
                <TableCode>{"{ text: string; onClose: () => void }"}</TableCode>
              </td>
            </td>
            <td>
              Object used to define the message of the alert and the onClose function related to it. If defined, a close
              button will be displayed and this function will be executed when the action is clicked. (When{" "}
              <Code>mode="modal"</Code> this function will also be executed when the background overlay is clicked. The
              user has the responsibility of hiding the modal, otherwise it will remain visible.???)
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>semantic</td>
            <td>
              <TableCode>'success' | 'info' | 'warning' | 'error'</TableCode>
            </td>
            <td>Uses one of the available alert semantic types.</td>
            <td>
              <TableCode>'info'</TableCode>
            </td>
          </tr>
          <tr>
            <td>mode</td>
            <td>
              <TableCode>'inline' | 'modal' | 'banner'</TableCode>
            </td>
            <td>
              Uses one of the available alert modes:
              <ul>
                <li>
                  <b>inline:</b>
                </li>
                <li>
                  <b>modal:</b> The alert will be displayed in the middle of the screen with an overlay layer behind. In
                  this mode, the user has the responsibility of hiding the alert with the <Code>onClose</Code> event,
                  otherwise the overlaid modal will remain visible.
                </li>
                <li>
                  <b>banner:</b>
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
              <TableCode>{"{ label: string; icon?: string | SVG; onClick: () => void; }"}</TableCode>
            </td>
            <td>Primary action.</td>
            <td>- </td>
          </tr>
          <tr>
            <td>secondaryAction</td>
            <td>
              <TableCode>{"{ label: string; icon?: string | SVG; onClick: () => void; }"}</TableCode>
            </td>
            <td>Secondary action.</td>
            <td>- </td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute applied to the close button.
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
        title: "Banner",
        content: <Example example={banner} defaultIsVisible />,
      },
      {
        title: "Modal",
        content: <Example example={modal} defaultIsVisible />,
      },
      {
        title: "Semantic",
        content: <Example example={semantic} defaultIsVisible />,
      },
      {
        title: "Actions",
        content: <Example example={actions} defaultIsVisible />,
      },
      {
        title: "Several messages",
        content: <Example example={severalMessages} defaultIsVisible />,
      },
    ],
  },
];

const AlertCodePage = () => {
  const [messages, setMessages] = useState([
    {
      text:
        "Message 1, Message 1,  Message 1, Message 1, Message 1, Message 1, Message 1, Message 1, Message 1, Message 1, Message 1, Message 1,",
      onClose: () => handleAlertClose(0),
    },
    {
      text: "Message 2, Message 2, Message 2, Message 2, Message 2, Message 2, ",
      onClose: () => handleAlertClose(1),
    },
    {
      text:
        "Message 3, Message 3,  Message 3, Message 3, Message 3, Message 3, Message 3, Message 3, Message 3, Message 3, Message 3, Message 3,",
      onClose: () => handleAlertClose(0),
    },
    {
      text:
        "Message 4, Message 4,  Message 4, Message 4, Message 4, Message 4, Message 4, Message 4, Message 4, Message 4, Message 4, Message 4,",
      onClose: () => handleAlertClose(0),
    },
  ]);

  const handleAlertClose = (index) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.filter((_, i) => i !== index);
      return updatedMessages;
    });
  };

  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/alert/code/AlertCodePage.tsx" />
    </DxcFlex>
  );
};

export default AlertCodePage;
