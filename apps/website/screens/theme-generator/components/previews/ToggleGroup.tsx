import { DxcToggleGroup } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";
import linkedinIcon from "../../images/LinkedinIcon";
import xIcon from "../../images/XIcon";
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

const optionsWithIcons = [
  {
    value: 1,
    label: "Facebook",
    icon: facebookIcon,
  },
  {
    value: 2,
    label: "Linkedin",
    icon: linkedinIcon,
  },
  {
    value: 3,
    label: "X",
    icon: xIcon,
  },
];

const ToggleGroup = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcToggleGroup options={options} />
    </Mode>
    <Mode text="Disabled">
      <DxcToggleGroup disabled options={options} />
    </Mode>
    <Mode text="Multiple with icons">
      <DxcToggleGroup options={optionsWithIcons} multiple />
    </Mode>
  </PreviewContainer>
);

export default ToggleGroup;
