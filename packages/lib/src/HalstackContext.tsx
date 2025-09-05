import { createContext, ReactNode, useMemo } from "react";
import { TranslatedLabels, defaultTranslatedComponentLabels } from "./common/variables";

/**
 * This type is used to allow labels objects to be passed to the HalstackProvider.
 * This is an extension of the already existing Partial type, which only allows one level of partiality.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: Partial<T[P]>;
};

const HalstackLanguageContext = createContext<TranslatedLabels>(defaultTranslatedComponentLabels);

const parseLabels = (labels: DeepPartial<TranslatedLabels>): TranslatedLabels => {
  const parsedLabels = defaultTranslatedComponentLabels;
  (Object.keys(labels) as (keyof TranslatedLabels)[]).forEach((component) => {
    if (parsedLabels[component]) {
      const componentLabels = labels[component];
      if (componentLabels != null) {
        (Object.keys(parsedLabels[component]) as (keyof typeof componentLabels)[]).forEach((label) => {
          if (componentLabels[label]) {
            parsedLabels[component][label] = componentLabels[label];
          }
        });
      }
    }
  });
  return parsedLabels;
};

type HalstackProviderPropsType = {
  labels?: DeepPartial<TranslatedLabels>;
  children: ReactNode;
};
const HalstackProvider = ({ labels, children }: HalstackProviderPropsType): JSX.Element => {
  const parsedLabels = useMemo(() => (labels ? parseLabels(labels) : null), [labels]);

  return parsedLabels ? (
    <HalstackLanguageContext.Provider value={parsedLabels}>{children}</HalstackLanguageContext.Provider>
  ) : (
    <>{children}</>
  );
};

export { HalstackProvider, HalstackLanguageContext };
