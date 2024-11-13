import DxcAlert from "./Alert";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Alert",
  component: DxcAlert,
};

const opinionatedTheme = {
  alert: {
    baseColor: "#e6f4ff",
    accentColor: "#0067b3",
    overlayColor: "#000000b3",
  },
};

const messages = [
  { messageText: "Message 1", onClose: () => {} },
  { messageText: "Message 2", onClose: () => {} },
  { messageText: "Message 3", onClose: () => {} },
  { messageText: "Message 4", onClose: () => {} },
];

const message = {
  messageText:
    "Message Message Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message",
};

export const Chromatic = () => (
  <>
    <Title title="Banner" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Info" theme="light" level={4} />
      <DxcAlert title="Info" mode="banner" message={message} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info with actions" theme="light" level={4} />
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
      <Title title="Info" theme="light" level={4} />
      <DxcAlert title="Info" message={message} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info with actions" theme="light" level={4} />
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

export const InfoModal = () => (
  <ExampleContainer>
    <DxcAlert title="Info" mode="modal" message={message} />
  </ExampleContainer>
);

export const InfoActionsModal = () => (
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

export const SuccessModal = () => (
  <ExampleContainer>
    <DxcAlert title="Success" semantic="success" mode="modal" message={message} />
  </ExampleContainer>
);

export const SuccessActionsModal = () => (
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

export const WarningModal = () => (
  <ExampleContainer>
    <DxcAlert title="Warning" semantic="warning" mode="modal" message={message} />
  </ExampleContainer>
);

export const WarningActionsModal = () => (
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

export const ErrorModal = () => (
  <ExampleContainer>
    <DxcAlert title="Error" semantic="error" mode="modal" message={message} />
  </ExampleContainer>
);

export const ErrorActionsModal = () => (
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
