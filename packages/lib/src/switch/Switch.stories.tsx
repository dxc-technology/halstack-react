import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import disabledRules from "../../test/accessibility/rules/specific/switch/disabledRules";
import Title from "../../.storybook/components/Title";
import preview from "../../.storybook/preview";
import DxcSwitch from "./Switch";

export default {
  title: "Switch",
  component: DxcSwitch,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...(preview?.parameters?.a11y?.config?.rules || []),
          ...disabledRules.map((ruleId) => ({ id: ruleId, enabled: false })),
        ],
      },
    },
  },
} satisfies Meta<typeof DxcSwitch>;

const Switch = () => (
  <>
    <ExampleContainer>
      <Title title="With label after" theme="light" level={4} />
      <DxcSwitch label="Switch" labelPosition="after" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Without label" theme="light" level={4} />
      <DxcSwitch />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <DxcSwitch label="Switch" labelPosition="after" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Checked" theme="light" level={4} />
      <DxcSwitch label="Switch" defaultChecked />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Optional" theme="light" level={4} />
      <DxcSwitch label="Switch" optional />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcSwitch label="Switch" disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled optional" theme="light" level={4} />
      <DxcSwitch label="Switch" disabled optional labelPosition="after" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled checked" theme="light" level={4} />
      <DxcSwitch label="Switch" disabled defaultChecked labelPosition="after" />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcSwitch label="Xxsmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcSwitch label="Xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcSwitch label="Small" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcSwitch label="Medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcSwitch label="Large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcSwitch label="Xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcSwitch label="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small size" theme="light" level={4} />
      <DxcSwitch label="Small" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size (with long label)" theme="light" level={4} />
      <DxcSwitch label="Very very very large label or even huge" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size (with long label + optional label)" theme="light" level={4} />
      <DxcSwitch
        label="Large texttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
        labelPosition="after"
        size="medium"
        optional
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size" theme="light" level={4} />
      <DxcSwitch label="Large" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent size" theme="light" level={4} />
      <DxcSwitch label="FillParent" size="fillParent" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FitContent size" theme="light" level={4} />
      <DxcSwitch label="FitContent" size="fitContent" />
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcSwitch>;

export const Chromatic: Story = {
  render: Switch,
};
