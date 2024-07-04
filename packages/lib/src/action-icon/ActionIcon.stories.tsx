import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcActionIcon from "./ActionIcon";

export default {
  title: "Action Icon ",
  component: DxcActionIcon,
};

const iconSVG = (
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const Chromatic = () => (
  <>
    <Title title="Default" theme="light" level={2} />
    <ExampleContainer>
      <DxcActionIcon icon="favorite" title="Favourite" />
    </ExampleContainer>
    <Title title="Disabled" theme="light" level={2} />
    <ExampleContainer>
      <DxcActionIcon icon="favorite" title="Favourite" disabled />
    </ExampleContainer>
    <Title title="Hover" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-hover">
      <DxcActionIcon icon="filled_favorite" title="Favourite" />
    </ExampleContainer>
    <Title title="Focus" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-focus">
      <DxcActionIcon icon={iconSVG} title="Favourite" />
    </ExampleContainer>
    <Title title="Active" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-active">
      <DxcActionIcon icon={iconSVG} title="Favourite" />
    </ExampleContainer>
  </>
);
