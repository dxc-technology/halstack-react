import React from "react";
import DxcSelect from "./Select";

export default {
  title: "Select",
  component: DxcSelect,
  argTypes: {
    multiple: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <DxcSelect {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Label",
  name: "",
  helperText: "Example of helper text",
  placeholder: "Choose an option",
  options: [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
  ],
  searchable: false,
  disabled: false,
  optional: false,
  multiple: false,
  error: "",
  margin: "medium",
  size: "medium",
  tabIndex: 0,
};

export const Grouped = Template.bind({});
Grouped.args = {
  label: "Label",
  name: "",
  helperText: "Example of helper text",
  placeholder: "Choose an option",
  options: [
    {
      label: "Managers",
      options: [
        { label: "Pablo", value: "pablo" },
        { label: "Marcos", value: "marcos" },
        { label: "Rachel", value: "rachel" },
        { label: "Margaret", value: "margaret" },
      ],
    },
    {
      label: "Engineers",
      options: [
        { label: "Yiminghe", value: "yiminghe" },
        { label: "Manuel", value: "manuel" },
        { label: "Bryan", value: "bryan" },
        { label: "Anand", value: "anand" },
        { label: "Jiale", value: "jiale" },
      ],
    },
    {
      label: "Designers",
      options: [
        { label: "Alex", value: "alex" },
        { label: "Tim", value: "tim" },
        { label: "Jairo", value: "Jairo" },
      ],
    },
  ],
  searchable: false,
  disabled: false,
  optional: false,
  multiple: true,
  error: "",
  margin: "medium",
  size: "medium",
  tabIndex: 0,
};