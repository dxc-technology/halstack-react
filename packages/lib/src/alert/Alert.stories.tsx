import { Meta, StoryObj } from "@storybook/react-vite";
import DxcAlert from "./Alert";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcLink from "../link/Link";

export default {
  title: "Alert",
  component: DxcAlert,
} satisfies Meta<typeof DxcAlert>;

const messages = [
  { text: "Message 1", onClose: () => {} },
  { text: "Message 2", onClose: () => {} },
  { text: "Message 3", onClose: () => {} },
  { text: "Message 4", onClose: () => {} },
];

const nonClosableMessages = [
  { text: "Message 1" },
  { text: "Message 2" },
  { text: "Message 3" },
  { text: "Message 4" },
];

const message = {
  text: (
    <>
      Message Message <DxcLink>Message</DxcLink> Message Message Message Message Message Message Message Message
      MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message
      Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message
      Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message
      Message Message MessageMessage Message Message Message Message Message Message Message Message Message
      MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message
      Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message
      Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message
      Message Message MessageMessage Message Message Message Message Message Message Message Message Message
      MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message
      Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message
      Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message
      Message Message MessageMessage Message Message Message Message Message Message Message Message Message
      MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message
      Message Message Message Message Message Message Message Message Message Message Message Message Message Message
      Message Message Message Message Message Message Message
    </>
  ),
  onClose: () => {},
};

const Alert = () => (
  <>
    <Title title="Banner" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Basic" theme="light" level={4} />
      <DxcAlert title="Info" mode="banner" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info with actions" theme="light" level={4} />
      <DxcAlert
        title="Info"
        mode="banner"
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info with actions and message" theme="light" level={4} />
      <DxcAlert
        title="Info"
        mode="banner"
        message={message}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info with actions and list of messages" theme="light" level={4} />
      <DxcAlert
        title="Info"
        mode="banner"
        message={messages}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info with actions, list of messages and non-closable" theme="light" level={4} />
      <DxcAlert
        title="Info"
        mode="banner"
        message={nonClosableMessages}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
        closable={false}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success" theme="light" level={4} />
      <DxcAlert mode="banner" semantic="success" title="Success" message={message} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success with actions" theme="light" level={4} />
      <DxcAlert
        semantic="success"
        title="Success"
        mode="banner"
        message={message}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success with actions and list of messages" theme="light" level={4} />
      <DxcAlert
        semantic="success"
        title="Success"
        mode="banner"
        message={messages}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning" theme="light" level={4} />
      <DxcAlert semantic="warning" title="Warning" mode="banner" message={message} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning with actions" theme="light" level={4} />
      <DxcAlert
        semantic="warning"
        title="Warning"
        mode="banner"
        message={message}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning with actions and list of messages" theme="light" level={4} />
      <DxcAlert
        semantic="warning"
        title="Warning"
        mode="banner"
        message={messages}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" theme="light" level={4} />
      <DxcAlert semantic="error" title="Error" mode="banner" message={message} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error with actions" theme="light" level={4} />
      <DxcAlert
        semantic="error"
        title="Error"
        mode="banner"
        message={message}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error with actions and list of messages" theme="light" level={4} />
      <DxcAlert
        semantic="error"
        title="Error"
        mode="banner"
        message={messages}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <Title title="Inline" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Basic" theme="light" level={4} />
      <DxcAlert title="Info" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info with actions" theme="light" level={4} />
      <DxcAlert
        title="Info"
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info with actions and message" theme="light" level={4} />
      <DxcAlert
        title="Info"
        message={message}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info with actions and list of messages" theme="light" level={4} />
      <DxcAlert
        title="Info"
        message={messages}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info with actions, list of messages and non-closable" theme="light" level={4} />
      <DxcAlert
        title="Info"
        message={nonClosableMessages}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
        closable={false}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success" theme="light" level={4} />
      <DxcAlert title="Success" semantic="success" message={message} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success with actions" theme="light" level={4} />
      <DxcAlert
        title="Success"
        semantic="success"
        message={message}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success with actions and list of messages" theme="light" level={4} />
      <DxcAlert
        title="Success"
        semantic="success"
        message={messages}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning" theme="light" level={4} />
      <DxcAlert title="Warning" mode="banner" semantic="warning" message={message} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning with actions" theme="light" level={4} />
      <DxcAlert
        title="Warning"
        semantic="warning"
        message={message}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning with actions and list of messages" theme="light" level={4} />
      <DxcAlert
        title="Warning"
        semantic="warning"
        message={messages}
        primaryAction={{ label: "Primary", onClick: () => {} }}
        secondaryAction={{ label: "Secondary", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" theme="light" level={4} />
      <DxcAlert title="Error" semantic="error" message={message} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error with actions" theme="light" level={4} />
      <DxcAlert
        title="Error"
        semantic="error"
        message={message}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error with actions and list of messages" theme="light" level={4} />
      <DxcAlert
        title="Error"
        semantic="error"
        message={messages}
        primaryAction={{ label: "Primary action", onClick: () => {} }}
        secondaryAction={{ label: "Secondary action", onClick: () => {} }}
      />
    </ExampleContainer>
  </>
);

const AlertInfo = () => (
  <ExampleContainer>
    <DxcAlert
      title="Info"
      mode="modal"
      message={message}
      primaryAction={{ label: "Primary action", onClick: () => {} }}
      secondaryAction={{ label: "Secondary action", onClick: () => {} }}
    />
  </ExampleContainer>
);

const AlertSuccess = () => (
  <ExampleContainer>
    <DxcAlert
      title="Success"
      semantic="success"
      mode="modal"
      message={message}
      primaryAction={{ label: "Primary action", onClick: () => {} }}
      secondaryAction={{ label: "Secondary action", onClick: () => {} }}
    />
  </ExampleContainer>
);

const AlertWarning = () => (
  <ExampleContainer>
    <DxcAlert
      title="Warning"
      semantic="warning"
      mode="modal"
      message={message}
      primaryAction={{ label: "Primary action", onClick: () => {} }}
      secondaryAction={{ label: "Secondary action", onClick: () => {} }}
    />
  </ExampleContainer>
);

const AlertError = () => (
  <ExampleContainer>
    <DxcAlert
      title="Error"
      semantic="error"
      mode="modal"
      message={message}
      primaryAction={{ label: "Primary action", onClick: () => {} }}
      secondaryAction={{ label: "Secondary action", onClick: () => {} }}
    />
  </ExampleContainer>
);

type Story = StoryObj<typeof DxcAlert>;

export const Chromatic: Story = {
  render: Alert,
};

export const InformationModal: Story = {
  render: AlertInfo,
};

export const SuccessModal: Story = {
  render: AlertSuccess,
};

export const WarningModal: Story = {
  render: AlertWarning,
};

export const ErrorModal: Story = {
  render: AlertError,
};
