import DxcTimeInput from "./TimeInput";
import TimePicker from "./TimePicker";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import { Meta, StoryObj } from "@storybook/react-vite";
import preview from "../../.storybook/preview";
import disabledRules from "../../test/accessibility/rules/common/disabledRules";
import { useState } from "react";
import DxcContainer from "../container/Container";
import { userEvent, within } from "storybook/internal/test";

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

const TimeInput = () => {
  const [continentalValue, setContinentalValue] = useState<string>("18:30:20");
  const [value] = useState<string>("6:30:20 AM");
  return (
    <>
      <ExampleContainer>
        <Title title="Default" theme="light" level={2} />
        <DxcTimeInput
          label="Time"
          helperText="Helper text"
          value={value}
          size="small"
          onChange={(val) => {
            console.log(`Value changed: ${val}`);
          }}
          onBlur={(val) => {
            console.log(`Value blurred: ${val.value}`);
          }}
          clearable
        />
        <DxcTimeInput label="Time" helperText="Helper text" defaultValue={value} showSeconds />
        <DxcTimeInput label="Time" helperText="Helper text" timeFormat="24" />
        <DxcTimeInput label="Time" helperText="Helper text" timeFormat="24" showSeconds size="large" />
        <DxcContainer width="175px">
          <DxcTimeInput
            label="Time Input fill parent"
            helperText="Helper text"
            timeFormat="24"
            clearable
            value={continentalValue}
            onChange={(val) => {
              console.log(`Value changed: ${val}`);
              setContinentalValue(val);
            }}
            size="fillParent"
          />
        </DxcContainer>
        <DxcTimeInput label="Time" timeFormat="24" helperText="Helper text" showSeconds value={continentalValue} />
        <DxcTimeInput label="Time" helperText="Helper text" defaultValue={value} showSeconds disabled />
        <DxcTimeInput label="Time" helperText="Helper text" defaultValue={value} showSeconds readOnly />
        <DxcTimeInput
          label="Time"
          helperText="Helper text"
          defaultValue={value}
          showSeconds
          error="This is not a valid time"
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={"pseudo-hover"}>
        <Title title="Hover" theme="light" level={2} />
        <DxcTimeInput label="Time" helperText="Helper text" defaultValue={value} size="small" />
        <DxcTimeInput label="Time" helperText="Helper text" defaultValue={value} showSeconds />
        <DxcTimeInput label="Time" helperText="Helper text" timeFormat="24" />
        <DxcTimeInput label="Time" helperText="Helper text" timeFormat="24" showSeconds size="large" />
        <DxcContainer width="175px">
          <DxcTimeInput
            label="Time"
            helperText="Helper text"
            timeFormat="24"
            clearable
            value={continentalValue}
            onChange={(val) => {
              console.log(`Value changed: ${val}`);
              setContinentalValue(val);
            }}
            size="fillParent"
          />
        </DxcContainer>
        <DxcTimeInput label="Time" timeFormat="24" helperText="Helper text" showSeconds value={continentalValue} />
      </ExampleContainer>
      <ExampleContainer pseudoState={"pseudo-focus"}>
        <Title title="Focus" theme="light" level={2} />
        <DxcTimeInput label="Time" helperText="Helper text" defaultValue={value} size="small" />
        <DxcTimeInput label="Time" helperText="Helper text" defaultValue={value} showSeconds />
        <DxcTimeInput label="Time" helperText="Helper text" timeFormat="24" />
        <DxcTimeInput label="Time" helperText="Helper text" timeFormat="24" showSeconds size="large" />
        <DxcContainer width="175px">
          <DxcTimeInput
            label="Time"
            helperText="Helper text"
            timeFormat="24"
            clearable
            value={continentalValue}
            onChange={(val) => {
              console.log(`Value changed: ${val}`);
              setContinentalValue(val);
            }}
            size="fillParent"
          />
        </DxcContainer>
        <DxcTimeInput label="Time" timeFormat="24" helperText="Helper text" showSeconds value={continentalValue} />
      </ExampleContainer>
      <ExampleContainer pseudoState={"pseudo-active"}>
        <Title title="Active" theme="light" level={2} />
        <DxcTimeInput label="Time" helperText="Helper text" defaultValue={value} size="small" />
        <DxcTimeInput label="Time" helperText="Helper text" defaultValue={value} showSeconds />
        <DxcTimeInput label="Time" helperText="Helper text" timeFormat="24" />
        <DxcTimeInput label="Time" helperText="Helper text" timeFormat="24" showSeconds size="large" />
        <DxcContainer width="175px">
          <DxcTimeInput
            label="Time"
            helperText="Helper text"
            timeFormat="24"
            clearable
            value={continentalValue}
            onChange={(val) => {
              console.log(`Value changed: ${val}`);
              setContinentalValue(val);
            }}
            size="fillParent"
          />
        </DxcContainer>
        <DxcTimeInput label="Time" timeFormat="24" helperText="Helper text" showSeconds value={continentalValue} />
      </ExampleContainer>
    </>
  );
};

const TimePickerExamples = () => {
  return (
    <>
      <ExampleContainer expanded>
        <DxcTimeInput
          label="Time"
          helperText="Helper text"
          defaultValue="6:30:20 PM"
          timeFormat="12"
          onBlur={() => console.log("blur")}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Time Picker 24h format" theme="light" level={3} />
        <DxcContainer width="250px">
          <TimePicker onSelectMinutes={() => {}} onSelecthours={() => {}} timeFormat="24" id="testId" tabIndex={0} />
          <TimePicker
            onSelectMinutes={() => {}}
            onSelecthours={() => {}}
            timeFormat="24"
            id="testId"
            tabIndex={0}
            hourValue={15}
            minuteValue={30}
          />
          <TimePicker
            onSelectMinutes={() => {}}
            onSelecthours={() => {}}
            timeFormat="24"
            id="testId"
            tabIndex={0}
            showSeconds
            hourValue={15}
            minuteValue={30}
            secondValue={10}
          />
        </DxcContainer>
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Time Picker 12h format" theme="light" level={3} />
        <DxcContainer width="250px">
          <TimePicker onSelectMinutes={() => {}} onSelecthours={() => {}} timeFormat="12" id="testId" tabIndex={0} />
          <TimePicker
            onSelectMinutes={() => {}}
            onSelecthours={() => {}}
            timeFormat="12"
            id="testId"
            tabIndex={0}
            hourValue={3}
            minuteValue={30}
            dayPeriod={1}
          />
          <TimePicker
            onSelectMinutes={() => {}}
            onSelecthours={() => {}}
            timeFormat="12"
            id="testId"
            tabIndex={0}
            showSeconds
            hourValue={3}
            minuteValue={30}
            secondValue={10}
            dayPeriod={1}
          />
        </DxcContainer>
      </ExampleContainer>
      <ExampleContainer pseudoState={"pseudo-hover"}>
        <Title title="hover" theme="light" level={3} />
        <DxcContainer width="250px">
          <TimePicker onSelectMinutes={() => {}} onSelecthours={() => {}} timeFormat="12" id="testId" tabIndex={0} />
          <TimePicker
            onSelectMinutes={() => {}}
            onSelecthours={() => {}}
            timeFormat="12"
            id="testId"
            tabIndex={0}
            hourValue={3}
            minuteValue={30}
            dayPeriod={1}
          />
          <TimePicker
            onSelectMinutes={() => {}}
            onSelecthours={() => {}}
            timeFormat="12"
            id="testId"
            tabIndex={0}
            showSeconds
            hourValue={3}
            minuteValue={30}
            secondValue={10}
            dayPeriod={1}
          />
        </DxcContainer>
      </ExampleContainer>
      <ExampleContainer pseudoState={"pseudo-focus"}>
        <Title title="focus" theme="light" level={3} />
        <DxcContainer width="250px">
          <TimePicker onSelectMinutes={() => {}} onSelecthours={() => {}} timeFormat="12" id="testId" tabIndex={0} />
          <TimePicker
            onSelectMinutes={() => {}}
            onSelecthours={() => {}}
            timeFormat="12"
            id="testId"
            tabIndex={0}
            hourValue={3}
            minuteValue={30}
            dayPeriod={1}
          />
          <TimePicker
            onSelectMinutes={() => {}}
            onSelecthours={() => {}}
            timeFormat="12"
            id="testId"
            tabIndex={0}
            showSeconds
            hourValue={3}
            minuteValue={30}
            secondValue={10}
            dayPeriod={1}
          />
        </DxcContainer>
      </ExampleContainer>
      <ExampleContainer pseudoState={"pseudo-active"}>
        <Title title="active" theme="light" level={3} />
        <DxcContainer width="250px">
          <TimePicker onSelectMinutes={() => {}} onSelecthours={() => {}} timeFormat="12" id="testId" tabIndex={0} />
          <TimePicker
            onSelectMinutes={() => {}}
            onSelecthours={() => {}}
            timeFormat="12"
            id="testId"
            tabIndex={0}
            hourValue={3}
            minuteValue={30}
            dayPeriod={1}
          />
          <TimePicker
            onSelectMinutes={() => {}}
            onSelecthours={() => {}}
            timeFormat="12"
            id="testId"
            tabIndex={0}
            showSeconds
            hourValue={3}
            minuteValue={30}
            secondValue={10}
            dayPeriod={1}
          />
        </DxcContainer>
      </ExampleContainer>
    </>
  );
};

type Story = StoryObj<typeof DxcTimeInput>;

export const Chromatic: Story = {
  render: TimeInput,
};

export const TimePickerChromatic: Story = {
  render: TimePickerExamples,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dateBtn = (await canvas.findAllByRole("button"))[0];
    if (dateBtn != null) {
      await userEvent.click(dateBtn);
    }
  },
};
