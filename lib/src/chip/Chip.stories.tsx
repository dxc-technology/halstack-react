import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import DxcChip from "./Chip";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Chip",
  component: DxcChip,
};

const iconSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Basic chip" theme="light" level={4} />
      <DxcChip label="Default Chip" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with prefix" theme="light" level={4} />
      <DxcChip label="Chip with prefix" prefixIcon={iconSVG} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with suffix" theme="light" level={4} />
      <DxcChip label="Chip with suffix" suffixIcon={iconSVG} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with prefix and suffix" theme="light" level={4} />
      <DxcChip label="Chip with prefix and suffix" prefixIcon={iconSVG} suffixIcon={iconSVG} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled chip" theme="light" level={4} />
      <DxcChip label="Disabled" disabled prefixIcon={iconSVG} suffixIcon={iconSVG} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with ellipsis" theme="light" level={4} />
      <DxcChip label="With ellipsis asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasd fg ssssssssssss ssss" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with ellipsis and suffix" theme="light" level={4} />
      <DxcChip
        suffixIcon={iconSVG}
        label="With ellipsis asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasd fgsss"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with ellipsis and prefix" theme="light" level={4} />
      <DxcChip
        prefixIcon={iconSVG}
        label="With ellipsis asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasd fgsss"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with ellipsis, suffix and prefix" theme="light" level={4} />
      <DxcChip
        prefixIcon={iconSVG}
        suffixIcon={iconSVG}
        label="With ellipsis asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasdf"
      />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcChip label="xxsmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcChip label="xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcChip label="small" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcChip label="medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcChip label="large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcChip label="xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcChip label="xxlarge" margin="xxlarge" />
    </ExampleContainer>
  </>
);
const ChipPrefixFocused = () => (
  <ExampleContainer>
    <Title title="Chip with prefix" theme="light" level={4} />
    <DxcChip label="Chip with prefix" prefixIcon={iconSVG} onClickPrefix={() => {}} />
  </ExampleContainer>
);
const ChipSuffixFocused = () => (
  <ExampleContainer>
    <Title title="Chip with suffix" theme="light" level={4} />
    <DxcChip label="Chip with suffix" suffixIcon={iconSVG} onClickSuffix={() => {}} />
  </ExampleContainer>
);

export const PrefixFocused = ChipPrefixFocused.bind({});
PrefixFocused.play = async ({ canvasElement }) => {
  await userEvent.tab();
};

export const SuffixFocused = ChipSuffixFocused.bind({});
SuffixFocused.play = async ({ canvasElement }) => {
  await userEvent.tab();
};
