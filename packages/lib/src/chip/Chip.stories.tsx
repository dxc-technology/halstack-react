import { userEvent } from "@storybook/test";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcChip from "./Chip";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Chip",
  component: DxcChip,
} as Meta<typeof DxcChip>;

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

const smallIconSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20">
    <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
  </svg>
);

const Chip = () => (
  <>
    <ExampleContainer>
      <Title title="Basic chip" theme="light" level={4} />
      <DxcChip label="Default Chip" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with prefix SVG (small icon)" theme="light" level={4} />
      <DxcChip label="Chip with prefix" prefixIcon={smallIconSVG} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with suffix SVG (large icon)" theme="light" level={4} />
      <DxcChip label="Chip with suffix" suffixIcon={iconSVG} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with prefix (SVG) and suffix (URL)" theme="light" level={4} />
      <DxcChip label="Chip with prefix and suffix" prefixIcon={iconSVG} suffixIcon="filled_check_circle" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled chip" theme="light" level={4} />
      <DxcChip label="Disabled" disabled prefixIcon={iconSVG} suffixIcon="filled_check_circle" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with ellipsis" theme="light" level={4} />
      <div style={{ width: "200px" }}>
        <DxcChip label="With ellipsis asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasd fg ssssssssssss ssss" />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with ellipsis and suffix" theme="light" level={4} />
      <div style={{ width: "200px" }}>
        <DxcChip
          suffixIcon={iconSVG}
          label="With ellipsis asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasd fgsss"
        />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with ellipsis and prefix" theme="light" level={4} />
      <div style={{ width: "200px" }}>
        <DxcChip
          prefixIcon={iconSVG}
          label="With ellipsis asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasd fgsss"
        />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Chip with ellipsis, suffix and prefix" theme="light" level={4} />
      <div style={{ width: "200px" }}>
        <DxcChip
          prefixIcon={iconSVG}
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
    <DxcChip label="Chip with suffix" suffixIcon="filled_delete" onClickSuffix={() => {}} />
  </ExampleContainer>
);

type Story = StoryObj<typeof DxcChip>;

export const Chromatic: Story = {
  render: Chip,
};

export const PrefixFocused: Story = {
  render: ChipPrefixFocused,
  play: async () => {
    await userEvent.tab();
  },
};

export const SuffixFocused: Story = {
  render: ChipSuffixFocused,
  play: async () => {
    await userEvent.tab();
  },
};
