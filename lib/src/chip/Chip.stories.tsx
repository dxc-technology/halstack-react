import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import DxcChip from "./Chip";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Chip",
  component: DxcChip,
};

const iconSVG = (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    width="438.536px"
    height="438.536px"
    viewBox="0 0 438.536 438.536"
    fill="currentColor"
  >
    <g>
      <path
        d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
C438.532,59.576,430.49,40.204,414.41,24.123z M373.155,225.548h-49.963V406.84h-74.802V225.548H210.99V163.02h37.401v-37.402
c0-26.838,6.283-47.107,18.843-60.813c12.559-13.706,33.304-20.555,62.242-20.555h49.963v62.526h-31.401
c-10.663,0-17.467,1.853-20.417,5.568c-2.949,3.711-4.428,10.23-4.428,19.558v31.119h56.534L373.155,225.548z"
      />
    </g>
  </svg>
);

const opinionatedTheme = {
  chip: {
    baseColor: "#e6e6e6",
    fontColor: "#000000",
    iconColor: "#4d4d4d",
  },
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcChip label="Default" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With prefix (SVG)" theme="light" level={4} />
      <DxcChip label="Prefix" prefixIcon={iconSVG} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With action prefix (SVG)" theme="light" level={4} />
      <DxcChip label="Action prefix" prefixIcon={iconSVG} onClickPrefix={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled action prefix (SVG)" theme="light" level={4} />
      <DxcChip label="Disabled action prefix" prefixIcon={iconSVG} onClickPrefix={() => {}} disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With suffix (Material icon)" theme="light" level={4} />
      <DxcChip label="Suffix" suffixIcon="filled_check_circle" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With action suffix (Material icon)" theme="light" level={4} />
      <DxcChip label="Action suffix" suffixIcon="filled_check_circle" onClickSuffix={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Action prefix and suffix" theme="light" level={4} />
      <DxcChip
        label="Action prefix and suffix"
        prefixIcon="filled_check_circle"
        onClickPrefix={() => {}}
        suffixIcon={iconSVG}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Prefix and action suffix" theme="light" level={4} />
      <DxcChip
        label="Prefix and action suffix"
        prefixIcon="filled_check_circle"
        suffixIcon={iconSVG}
        onClickSuffix={() => {}}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled action suffix (Material icon)" theme="light" level={4} />
      <DxcChip label="Disabled action suffix" suffixIcon="filled_check_circle" onClickSuffix={() => {}} disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled action prefix and suffix" theme="light" level={4} />
      <DxcChip
        label="Disabled action prefix"
        disabled
        prefixIcon={iconSVG}
        onClickPrefix={() => {}}
        suffixIcon="filled_check_circle"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Prefix and disabled action suffix" theme="light" level={4} />
      <DxcChip
        label="Disabled action suffix"
        prefixIcon={iconSVG}
        suffixIcon="filled_check_circle"
        onClickSuffix={() => {}}
        disabled
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With ellipsis" theme="light" level={4} />
      <div style={{ width: "200px" }}>
        <DxcChip label="With ellipsis asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasd fg ssssssssssss ssss" />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With ellipsis and suffix" theme="light" level={4} />
      <div style={{ width: "200px" }}>
        <DxcChip
          suffixIcon={iconSVG}
          label="With ellipsis asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasd fgsss"
        />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With ellipsis and prefix" theme="light" level={4} />
      <div style={{ width: "200px" }}>
        <DxcChip
          prefixIcon={iconSVG}
          label="With ellipsis asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasd fgsss"
        />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With ellipsis, action prefix and suffix" theme="light" level={4} />
      <div style={{ width: "200px" }}>
        <DxcChip
          prefixIcon={iconSVG}
          onClickPrefix={() => {}}
          suffixIcon={iconSVG}
          label="With ellipsis asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasdf"
        />
      </div>
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
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <Title title="With prefix and suffix" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcChip label="Chip" prefixIcon={iconSVG} onClickPrefix={() => {}} suffixIcon="filled_check_circle" />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With prefix and suffix" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcChip
          label="Disabled"
          disabled
          prefixIcon={iconSVG}
          suffixIcon="filled_check_circle"
          onClickSuffix={() => {}}
        />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcChip label="Chip" prefixIcon={iconSVG} suffixIcon={iconSVG} onClickPrefix={() => {}} />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Actived" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcChip label="Chip" prefixIcon={iconSVG} suffixIcon={iconSVG} onClickPrefix={() => {}} />
      </HalstackProvider>
    </ExampleContainer>
  </>
);

const ChipPrefixFocused = () => (
  <ExampleContainer>
    <Title title="With prefix" theme="light" level={4} />
    <DxcChip label="Prefix" prefixIcon={iconSVG} onClickPrefix={() => {}} />
  </ExampleContainer>
);
const ChipSuffixFocused = () => (
  <ExampleContainer>
    <Title title="With suffix" theme="light" level={4} />
    <DxcChip label="Suffix" suffixIcon="filled_delete" onClickSuffix={() => {}} />
  </ExampleContainer>
);

export const PrefixFocused = ChipPrefixFocused.bind({});
PrefixFocused.play = async () => {
  await userEvent.tab();
};

export const SuffixFocused = ChipSuffixFocused.bind({});
SuffixFocused.play = async () => {
  await userEvent.tab();
};
