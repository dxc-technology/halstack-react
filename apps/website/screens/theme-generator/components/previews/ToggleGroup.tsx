import { DxcToggleGroup } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const options = [
  {
    value: 1,
    label: "Facebook",
  },
  {
    value: 2,
    label: "X",
  },
  {
    value: 3,
    label: "Linkedin",
  },
];

const disabledOptions = [
  {
    value: 1,
    label: "Wi-fi",
  },
  {
    value: 2,
    label: "Ethernet",
    disabled: true,
  },
  {
    value: 3,
    label: "5G",
  },
];

const optionsWithIcons = [
  {
    value: 1,
    icon: "format_bold",
    title: "Bold",
  },
  {
    value: 2,
    icon: "format_italic",
    title: "Italic",
  },
  {
    value: 3,
    icon: "format_underlined",
    title: "Underlined",
  },
];

const ToggleGroup = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcToggleGroup options={options} />
    </Mode>
    <Mode text="Disabled option">
      <DxcToggleGroup options={disabledOptions} />
    </Mode>
    <Mode text="With icons">
      <DxcToggleGroup defaultValue={[1, 3]} options={optionsWithIcons} multiple />
    </Mode>
  </PreviewContainer>
);

export default ToggleGroup;
