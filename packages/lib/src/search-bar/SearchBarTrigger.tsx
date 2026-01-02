import DxcButton from "../button/Button";
import { SearchBarTriggerProps } from "./types";

const DxcSearchBarTrigger = ({ onTriggerClick }: SearchBarTriggerProps) => (
  <DxcButton
    onClick={onTriggerClick}
    icon="Search"
    mode="tertiary"
    title="Search"
    semantic="default"
    size={{ height: "medium" }}
  />
);

export default DxcSearchBarTrigger;
