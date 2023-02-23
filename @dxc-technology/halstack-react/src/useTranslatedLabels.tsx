import { useContext } from "react";
import { defaultTranslatedComponentLabels } from "./common/variables";
import { HalstackLanguageContext } from "./HalstackContext";
import TranslatedLabelsContextTypes from "./translatedLabelsType";

const useTranslatedLabels = (): TranslatedLabelsContextTypes => {
  const labels = useContext<TranslatedLabelsContextTypes>(HalstackLanguageContext);
  return labels || defaultTranslatedComponentLabels;
};

export default useTranslatedLabels;
