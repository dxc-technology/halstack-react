import { useContext } from "react";
import { fireEvent, screen, userEvent, within } from "@storybook/test";
import dayjs from "dayjs";
import { ThemeProvider } from "styled-components";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import preview from "../../.storybook/preview";
import disabledRules from "../../test/accessibility/rules/specific/date-input/disabledRules";
import DxcContainer from "../container/Container";
import { HalstackProvider } from "../HalstackContext";
import HalstackContext from "../HalstackContext";
import Calendar from "./Calendar";
import DxcDateInput from "./DateInput";
import DxcDatePicker from "./DatePicker";
import YearPicker from "./YearPicker";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Date Input",
  component: DxcDateInput,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...disabledRules.map((ruleId) => ({ id: ruleId, enabled: false })),
          ...preview?.parameters?.a11y?.config?.rules,
        ],
      },
    },
  },
} as Meta<typeof DxcDateInput>;

const opinionatedTheme = {
  dateInput: {
    baseColor: "#5f249f",
    selectedFontColor: "#ffffff",
  },
};

const DateInputChromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Year picker" theme="light" level={4} />
      <DxcContainer height="500px">
        <DxcDateInput label="Date input" defaultValue="06-04-1905" error="Error message" />
      </DxcContainer>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Complete date input" theme="light" level={4} />
      <DxcDateInput label="Date input" helperText="Help message" format="dd/mm/yy" placeholder optional />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcDateInput
        label="Disabled date input"
        helperText="Help message"
        defaultValue="06-04-2007"
        clearable
        disabled
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Read only" theme="light" level={4} />
      <DxcDateInput label="Example label" helperText="Help message" defaultValue="06-04-2007" clearable readOnly />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid" theme="light" level={4} />
      <DxcDateInput label="Error date input" error="Error message." placeholder />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Relation between icons" theme="light" level={4} />
      <DxcDateInput label="Error date input" error="Error message." defaultValue="06-04-2007" clearable />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcDateInput label="Xxsmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcDateInput label="Xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcDateInput label="Small" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcDateInput label="Medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcDateInput label="Large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcDateInput label="Xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcDateInput label="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small size" theme="light" level={4} />
      <DxcDateInput label="Small" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size" theme="light" level={4} />
      <DxcDateInput label="Medium" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size" theme="light" level={4} />
      <DxcDateInput label="Large" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent size" theme="light" level={4} />
      <DxcDateInput label="FillParent" size="fillParent" />
    </ExampleContainer>
  </>
);

const DateInputOpinionatedTheme = () => (
  <>
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Enabled" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcDateInput
          label="Date input"
          helperText="Help message"
          format="dd/mm/yy"
          placeholder
          optional
          defaultValue="10-10-2022"
        />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcDateInput label="Date input" helperText="Help message" format="dd/mm/yy" placeholder optional />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcDateInput label="Error date input" error="Error message." placeholder />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Date picker" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <div style={{ display: "flex", height: "400px", alignItems: "flex-end" }}>
          <DxcDateInput label="Date input" defaultValue="06-04-1905" error="Error message" />
        </div>
      </HalstackProvider>
    </ExampleContainer>
  </>
);

const YearPickerOpinionatedTheme = () => (
  <ExampleContainer expanded>
    <Title title="Year picker" theme="light" level={4} />
    <HalstackProvider theme={opinionatedTheme}>
      <DxcDateInput label="Date input" defaultValue="06-04-1905" />
    </HalstackProvider>
  </ExampleContainer>
);

const DatePickerButtonStates = () => {
  const colorsTheme: any = useContext(HalstackContext);
  return (
    <>
      <ExampleContainer>
        <Title title="Show date picker over another element with z-index 0" theme="light" level={4} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            height: "200px",
            width: "500px",
            marginBottom: "250px",
            padding: "20px",
            border: "1px solid black",
            borderRadius: "4px",
            overflow: "auto",
            zIndex: "130",
            position: "relative",
          }}
        >
          <DxcDateInput label="From" defaultValue="01-12-1995" />
          <DxcDateInput label="To" />
          <button style={{ zIndex: "1", width: "100px" }}>Submit</button>
        </div>
      </ExampleContainer>
      <ThemeProvider theme={colorsTheme}>
        <ExampleContainer pseudoState="pseudo-focus">
          <Title title="Isolated calendar focused" theme="light" level={4} />
          <DxcDatePicker date={dayjs("06-04-1950", "DD-MM-YYYY")} onDateSelect={() => {}} id="test-calendar1" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Isolated calendar hovered" theme="light" level={4} />
          <DxcDatePicker date={dayjs("06-04-1950", "DD-MM-YYYY")} onDateSelect={() => {}} id="test-calendar2" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Isolated calendar actived" theme="light" level={4} />
          <DxcDatePicker date={dayjs("06-04-1950", "DD-MM-YYYY")} onDateSelect={() => {}} id="test-calendar3" />
        </ExampleContainer>
      </ThemeProvider>
    </>
  );
};

const YearPickerButtonStates = () => {
  const colorsTheme: any = useContext(HalstackContext);
  return (
    <>
      <ThemeProvider theme={colorsTheme}>
        <ExampleContainer pseudoState="pseudo-focus">
          <Title title="Isolated year picker focused" theme="light" level={4} />
          <YearPicker
            selectedDate={dayjs("06-04-1905", "DD-MM-YYYY")}
            onYearSelect={() => {}}
            today={dayjs("1904-04-03", "YYYY-MM-DD")}
          />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Isolated year picker hovered" theme="light" level={4} />
          <YearPicker
            selectedDate={dayjs("06-04-1905", "DD-MM-YYYY")}
            onYearSelect={() => {}}
            today={dayjs("1904-04-03", "YYYY-MM-DD")}
          />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Isolated year picker actived" theme="light" level={4} />
          <YearPicker
            selectedDate={dayjs("06-04-1905", "DD-MM-YYYY")}
            onYearSelect={() => {}}
            today={dayjs("1904-04-03", "YYYY-MM-DD")}
          />
        </ExampleContainer>
      </ThemeProvider>
    </>
  );
};

const DatePickerToday = () => {
  const colorsTheme: any = useContext(HalstackContext);
  return (
    <ThemeProvider theme={colorsTheme}>
      <ExampleContainer>
        <Title title="Isolated calendar with today" theme="light" level={4} />
        <Calendar
          selectedDate={dayjs("06-04-1904", "DD-MM-YYYY")}
          today={dayjs("1904-04-03", "YYYY-MM-DD")}
          onInnerDateChange={() => {}}
          onDaySelect={() => {}}
          innerDate={dayjs("06-04-1904", "DD-MM-YYYY")}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Isolated year picker with today" theme="light" level={4} />
        <YearPicker
          selectedDate={dayjs("06-04-1905", "DD-MM-YYYY")}
          onYearSelect={() => {}}
          today={dayjs("1904-04-03", "YYYY-MM-DD")}
        />
      </ExampleContainer>
    </ThemeProvider>
  );
};

const Tooltip = () => {
  const colorsTheme: any = useContext(HalstackContext);
  return (
    <ThemeProvider theme={colorsTheme}>
      <Title title="Default tooltip" theme="light" level={2} />
      <ExampleContainer>
        <DxcDatePicker date={dayjs("06-04-1950", "DD-MM-YYYY")} onDateSelect={() => {}} id="test-calendar-tooltip" />
      </ExampleContainer>
    </ThemeProvider>
  );
};

type Story = StoryObj<typeof DxcDateInput>;

export const Chromatic: Story = {
  render: DateInputChromatic,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstDateInput = canvas.getAllByRole("combobox")[0];
    firstDateInput != null && (await userEvent.click(firstDateInput));
    await fireEvent.click(screen.getByText("April 1905"));
  },
};

export const DateInputOpinionated: Story = {
  render: DateInputOpinionatedTheme,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dateInput = canvas.getAllByRole("combobox")[3];
    dateInput != null && (await userEvent.click(dateInput));
  },
};

export const YearPickerOpinionated: Story = {
  render: YearPickerOpinionatedTheme,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("combobox"));
    await fireEvent.click(screen.getByText("April 1905"));
  },
};

export const DatePickerStates: Story = {
  render: DatePickerButtonStates,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dateBtn = canvas.getAllByRole("combobox")[0];
    dateBtn != null && (await userEvent.click(dateBtn));
  },
};

export const YearPickerStates: Story = {
  render: YearPickerButtonStates,
};

export const DatePickerWithToday: Story = {
  render: DatePickerToday,
};

export const DatePickerTooltipPrevious: Story = {
  render: Tooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const previousMonthButton = canvas.getAllByRole("button")[0];
    previousMonthButton != null && (await userEvent.hover(previousMonthButton));
  },
};

export const DatePickerTooltipAfter: Story = {
  render: Tooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const afterMonthButton = canvas.getAllByRole("button")[2];
    afterMonthButton != null && (await userEvent.hover(afterMonthButton));
  },
};
