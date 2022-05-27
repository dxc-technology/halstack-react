import { useContext } from "react";
import { defaultTranslatedComponentLabels } from "./common/variables";
import { HalstackLanguageContext } from "./HalstackContext";

const useTranslatedLabels = () => {
  const labels = useContext(HalstackLanguageContext);
  return labels || defaultTranslatedComponentLabels;
};

export default useTranslatedLabels;
