import React from "react";
import DxcSidenav from "./Sidenav";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Sidenav",
  component: DxcSidenav,
};

const iconSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const TitleComponent = () => {
  return <DxcSidenav.Title>Dxc technology</DxcSidenav.Title>;
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default sidenav" theme="light" level={4} />
      <DxcSidenav title={<TitleComponent />}>
        <DxcSidenav.Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper consectetur mollis. Suspendisse
            vitae lacinia libero.
          </p>
        </DxcSidenav.Section>
        <DxcSidenav.Section>
          <DxcSidenav.Link>Single Link</DxcSidenav.Link>
          <DxcSidenav.Group collapsable={false} title="Single Group" icon={iconSVG}>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
        </DxcSidenav.Section>
        <DxcSidenav.Section>
          <DxcSidenav.Group collapsable={true} title="Section Group" icon={iconSVG}>
            <DxcSidenav.Link selected>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link icon={iconSVG}>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
          <DxcSidenav.Link icon={iconSVG}>Single Link</DxcSidenav.Link>
          <DxcSidenav.Link>Single Link</DxcSidenav.Link>
          <DxcSidenav.Group collapsable={false} title="Section Group">
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
        </DxcSidenav.Section>
      </DxcSidenav>
    </ExampleContainer>
  </>
);

export const FocusedSidenav = () => (
  <ExampleContainer pseudoState="pseudo-focus">
    <Title title="Default sidenav" theme="light" level={4} />
    <DxcSidenav title={<TitleComponent />}>
      <DxcSidenav.Section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper consectetur mollis. Suspendisse vitae
          lacinia libero.
        </p>
      </DxcSidenav.Section>
      <DxcSidenav.Section>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Group collapsable={true} title="Collapsable Group">
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>
      </DxcSidenav.Section>
      <DxcSidenav.Section>
        <DxcSidenav.Group collapsable={true} title="Collapsable Group">
          <DxcSidenav.Link selected>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Group collapsable={false} title="Section Group">
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>
      </DxcSidenav.Section>
    </DxcSidenav>
  </ExampleContainer>
);

const CollapsedGroup = () => (
  <>
    <ExampleContainer>
      <Title title="Default sidenav" theme="light" level={4} />
      <DxcSidenav title={<TitleComponent />}>
        <DxcSidenav.Section>
          <DxcSidenav.Group collapsable={true} title="Collapsable Group" icon={iconSVG}>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
        </DxcSidenav.Section>
        <DxcSidenav.Section>
          <DxcSidenav.Group collapsable={true} title="Collapsable Group">
            <DxcSidenav.Link selected>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
          <DxcSidenav.Group collapsable={false} title="Section Group">
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
        </DxcSidenav.Section>
      </DxcSidenav>
    </ExampleContainer>
  </>
);

const HoverSidenav = () => (
  <ExampleContainer pseudoState="pseudo-hover">
    <Title title="Default sidenav" theme="light" level={4} />
    <DxcSidenav title={<TitleComponent />}>
      <DxcSidenav.Section>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Group collapsable={true} title="Collapsable Group">
          <DxcSidenav.Link selected>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>
      </DxcSidenav.Section>
      <DxcSidenav.Section>
        <DxcSidenav.Group collapsable={true} title="Not Collapsed Group">
          <DxcSidenav.Link selected>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Group collapsable={true} title="Collapsable Group">
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>

        <DxcSidenav.Group collapsable={true} title="Collapsable Group">
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>
      </DxcSidenav.Section>
    </DxcSidenav>
  </ExampleContainer>
);

export const CollapseGroup = CollapsedGroup.bind({});
CollapseGroup.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const collapsableGroups = canvas.getAllByText("Collapsable Group");
  collapsableGroups.forEach((group) => {
    userEvent.click(group);
  });
};

export const CollapseHoverGroup = HoverSidenav.bind({});
CollapseHoverGroup.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const collapsableGroups = canvas.getAllByText("Collapsable Group");
  collapsableGroups.forEach((group) => {
    userEvent.click(group);
  });
};
