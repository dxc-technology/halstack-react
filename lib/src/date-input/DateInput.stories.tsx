import React from "react";
import { userEvent, within, fireEvent, screen } from "@storybook/testing-library";
import DxcDateInput from "./DateInput";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import DarkContainer from "../../.storybook/components/DarkSection";

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
        value="06-04-2027"
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
      <DxcDateInput label="Error date input" error="Error message." value="06-04-2027" clearable />
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
            value="06-04-2027"
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
          <DxcDateInput label="Error date input" value="06-04-2027" error="Error message." clearable />
        </ExampleContainer>
      </DarkContainer>
    </BackgroundColorProvider>
  </>
);

const DatePicker = () => (
  <ExampleContainer>
    <Title title="Show date input" theme="light" level={4} />
    <DxcDateInput label="Date input" value="10-06-2023" />
  </ExampleContainer>
);

export const ShowDatePicker = DatePicker.bind({});
ShowDatePicker.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dateBtn = canvas.getByRole("button");
  await userEvent.click(dateBtn);
  await userEvent.tab();
};

const YearPicker = () => (
  <ExampleContainer>
    <Title title="Show date input" theme="light" level={4} />
    <DxcDateInput label="Date input" value="10-06-2023" />
  </ExampleContainer>
);

export const ShowYearPicker = YearPicker.bind({});
ShowYearPicker.play = async () => {
  await fireEvent.click(screen.getByRole("button"));
  await fireEvent.click(screen.getByText("2023"));
};

const YearPickerFocus = () => (
  <ExampleContainer>
    <Title title="Show date input" theme="light" level={4} />
    <DxcDateInput label="Date input" value="10-06-2023" />
  </ExampleContainer>
);

export const ShowYearPickerFocus = YearPickerFocus.bind({});
ShowYearPickerFocus.play = async () => {
  await fireEvent.click(screen.getByRole("button"));
  await fireEvent.click(screen.getByText("2023"));
  await userEvent.tab();
  await userEvent.tab();
  await userEvent.tab();
};
