import DxcTimeInput from "./TimeInput";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import { Meta, StoryObj } from "@storybook/react-vite";
import preview from "../../.storybook/preview";
import disabledRules from "../../test/accessibility/rules/common/disabledRules";

export default {
  title: "Time Input",
  component: DxcTimeInput,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...(preview?.parameters?.a11y?.config?.rules || []),
          ...disabledRules.map((ruleId) => ({ id: ruleId, reviewOnFail: true })),
        ],
      },
    },
  },
} satisfies Meta<typeof DxcTimeInput>;

const TimeInput = () => (
  <>
    <Title title="Default" theme="light" level={2} />
    <ExampleContainer>
      <DxcTimeInput label="Time" helperText="Helper text" />
      <DxcTimeInput label="Time" helperText="Helper text" showSeconds />
      <DxcTimeInput label="Time" helperText="Helper text" timeFormat="24" />
      <DxcTimeInput label="Time" helperText="Helper text" timeFormat="24" showSeconds />
      <DxcTimeInput
        label="Time"
        helperText="Helper text"
        timeFormat="24"
        clearable
        value="12:00"
        onChange={(val) => console.log(val)}
      />
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcTimeInput>;

export const Chromatic: Story = {
  render: TimeInput,
};
