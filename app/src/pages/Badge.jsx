import React from "react";
import {
  DxcBadge,
  DxcFlex,
  DxcInset,
  DxcHeading,
} from "@dxc-technology/halstack-react";

const icon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M11 17H13V11H11V17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 9H13V7H11V9Z" />
    <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11Z" />
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
);

function App() {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="2rem" direction="column">
        <DxcHeading level={2} text="Notification" />
        <DxcHeading level={3} text="Small" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge mode="notification" size="small" />
          <DxcBadge mode="notification" label={1} size="small" />
          <DxcBadge mode="notification" label={10} size="small" />
          <DxcBadge
            mode="notification"
            label={1000000}
            size="small"
            notificationLimit={9999999}
          />
          <DxcBadge
            mode="notification"
            label={100}
            size="small"
            notificationLimit={99}
          />
        </DxcFlex>
        <DxcHeading level={3} text="Medium" />
        <DxcFlex gap="3rem" alignContent="center" alignItems="center">
          <DxcBadge mode="notification" size="medium" />
          <DxcBadge mode="notification" label={1} size="medium" />
          <DxcBadge mode="notification" label={10} size="medium" />
          <DxcBadge
            mode="notification"
            label={1000000}
            size="medium"
            notificationLimit={99999999}
          />
          <DxcBadge
            mode="notification"
            label={100}
            size="medium"
            notificationLimit={99}
          />
        </DxcFlex>
        <DxcHeading level={3} text="Large" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge mode="notification" size="large" />
          <DxcBadge mode="notification" label={1} size="large" />
          <DxcBadge mode="notification" label={10} size="large" />
          <DxcBadge
            mode="notification"
            label={1000000}
            size="large"
            notificationLimit={99999999}
          />
          <DxcBadge
            mode="notification"
            label={100}
            size="large"
            notificationLimit={99}
          />
        </DxcFlex>
        <DxcHeading level={2} text="Contextual" />
        <DxcHeading level={3} text="Grey" />
        <DxcHeading level={4} text="Small" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge label="Label" size="small" />
          <DxcBadge label="Label" size="small" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Medium" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge label="Label" />
          <DxcBadge label="Label" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Large" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge label="Label" size="large" />
          <DxcBadge label="Label" size="large" icon={icon} />
        </DxcFlex>
        <DxcHeading level={3} text="Blue" />
        <DxcHeading level={4} text="Small" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="blue" label="Label" size="small" />
          <DxcBadge color="blue" label="Label" size="small" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Medium" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="blue" label="Label" />
          <DxcBadge color="blue" label="Label" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Large" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="blue" label="Label" size="large" />
          <DxcBadge color="blue" label="Label" size="large" icon={icon} />
        </DxcFlex>
        <DxcHeading level={3} text="Green" />
        <DxcHeading level={4} text="Small" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="green" label="Label" size="small" />
          <DxcBadge color="green" label="Label" size="small" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Medium" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="green" label="Label" />
          <DxcBadge color="green" label="Label" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Large" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="green" label="Label" size="large" />
          <DxcBadge color="green" label="Label" size="large" icon={icon} />
        </DxcFlex>
        <DxcHeading level={3} text="Orange" />
        <DxcHeading level={4} text="Small" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="orange" label="Label" size="small" />
          <DxcBadge color="orange" label="Label" size="small" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Medium" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="orange" label="Label" />
          <DxcBadge color="orange" label="Label" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Large" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="orange" label="Label" size="large" />
          <DxcBadge color="orange" label="Label" size="large" icon={icon} />
        </DxcFlex>
        <DxcHeading level={3} text="Red" />
        <DxcHeading level={4} text="Small" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="red" label="Label" size="small" />
          <DxcBadge color="red" label="Label" size="small" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Medium" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="red" label="Label" />
          <DxcBadge color="red" label="Label" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Large" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="red" label="Label" size="large" />
          <DxcBadge color="red" label="Label" size="large" icon={icon} />
        </DxcFlex>
        <DxcHeading level={3} text="Yellow" />
        <DxcHeading level={4} text="Small" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="yellow" label="Label" size="small" />
          <DxcBadge color="yellow" label="Label" size="small" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Medium" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="yellow" label="Label" />
          <DxcBadge color="yellow" label="Label" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Large" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="yellow" label="Label" size="large" />
          <DxcBadge color="yellow" label="Label" size="large" icon={icon} />
        </DxcFlex>
        <DxcHeading level={3} text="Purple" />
        <DxcHeading level={4} text="Small" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="purple" label="Label" size="small" />
          <DxcBadge color="purple" label="Label" size="small" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Medium" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="purple" label="Label" />
          <DxcBadge color="purple" label="Label" icon={icon} />
        </DxcFlex>
        <DxcHeading level={4} text="Large" />
        <DxcFlex gap="3rem" alignItems="center">
          <DxcBadge color="purple" label="Label" size="large" />
          <DxcBadge color="purple" label="Label" size="large" icon={icon} />
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}

export default App;
