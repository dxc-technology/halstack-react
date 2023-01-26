import React from "react";
import { userEvent, within, fireEvent, screen } from "@storybook/testing-library";
import DxcDateInput from "./DateInput";
import DxcDatePicker from "./DatePicker";
import YearPicker from "./YearPicker";
import Calendar from "./Calendar";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import DarkContainer from "../../.storybook/components/DarkSection";
import dayjs from "dayjs";
import useTheme from "../useTheme";
import { ThemeProvider } from "styled-components";

export default {
  title: "Date input",
  component: DxcDateInput,
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Complete date input" theme="light" level={4} />
      <DxcDateInput label="Date input" helperText="Help message" format="dd/mm/yy" placeholder optional />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcDateInput
        label="Disabled date input"
        helperText="Help message"
        defaultValue="06-04-2027"
        clearable
        disabled
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid" theme="light" level={4} />
      <DxcDateInput label="Error date input" error="Error message." placeholder />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Relation between icons" theme="light" level={4} />
      <DxcDateInput label="Error date input" error="Error message." defaultValue="06-04-2027" clearable />
    </ExampleContainer>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <Title title="Dark" theme="dark" level={2} />
        <ExampleContainer>
          <Title title="Complete date input" theme="dark" level={4} />
          <DxcDateInput label="Date input" helperText="Help message" format="yyyy/dd/mm" placeholder optional />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Disabled" theme="dark" level={4} />
          <DxcDateInput
            label="Disabled Date input"
            helperText="Help message"
            defaultValue="06-04-2027"
            clearable
            disabled
          />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Invalid" theme="dark" level={4} />
          <DxcDateInput label="Error date input" error="Error message." placeholder />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Relation between icons" theme="dark" level={4} />
          <DxcDateInput label="Error date input" defaultValue="06-04-2027" error="Error message." clearable />
        </ExampleContainer>
      </DarkContainer>
    </BackgroundColorProvider>
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

const DatePickerButtonStates = () => {
  const colorsTheme: any = useTheme();
  return (
    <>
      <ExampleContainer expanded>
        <Title title="Show date picker over another element with z-index 0" theme="light" level={4} />
        <DxcDateInput label="From" defaultValue="01-12-1995" />
        <DxcDateInput label="To" />
      </ExampleContainer>
      <ThemeProvider theme={colorsTheme}>
        <ExampleContainer pseudoState="pseudo-focus">
          <Title title="Isolated calendar focused" theme="light" level={4} />
          <DxcDatePicker date={dayjs("06-04-1950", "DD-MM-YYYY")} onDateSelect={() => {}} id="test-calendar" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Isolated calendar hovered" theme="light" level={4} />
          <DxcDatePicker date={dayjs("06-04-1950", "DD-MM-YYYY")} onDateSelect={() => {}} id="test-calendar" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Isolated calendar actived" theme="light" level={4} />
          <DxcDatePicker date={dayjs("06-04-1950", "DD-MM-YYYY")} onDateSelect={() => {}} id="test-calendar" />
        </ExampleContainer>
      </ThemeProvider>
    </>
  );
};

export const ShowDatePicker = DatePickerButtonStates.bind({});
ShowDatePicker.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dateBtn = canvas.getAllByTitle("Open calendar")[0];
  await userEvent.click(dateBtn);
};

const YearpickerButtonStates = () => {
  const colorsTheme: any = useTheme();
  return (
    <>
      <ExampleContainer expanded>
        <Title title="Show year picker" theme="light" level={4} />
        <DxcDateInput label="Date input" defaultValue="06-04-1905" />
      </ExampleContainer>
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

export const ShowYearPicker = YearpickerButtonStates.bind({});
ShowYearPicker.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("combobox"));
  await fireEvent.click(screen.getByText("April 1905"));
};

export const DatePickerWithToday = () => {
  const colorsTheme: any = useTheme();
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
