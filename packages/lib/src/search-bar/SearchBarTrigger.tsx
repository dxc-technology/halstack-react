import { useContext } from "react";
import DxcButton from "../button/Button";
import { HalstackLanguageContext } from "../HalstackContext";
import { SearchBarTriggerProps } from "./types";

const DxcSearchBarTrigger = ({ onTriggerClick }: SearchBarTriggerProps) => {
  const translatedLabels = useContext(HalstackLanguageContext);
  return (
    <DxcButton
      onClick={onTriggerClick}
      icon="Search"
      mode="tertiary"
      title={translatedLabels.searchBar.triggerTitle}
      semantic="default"
      size={{ height: "medium" }}
    />
  );
};

export default DxcSearchBarTrigger;
