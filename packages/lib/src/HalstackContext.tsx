import { createContext, ReactNode, useMemo } from "react";
import { AdvancedTheme, componentTokens, TranslatedLabels, defaultTranslatedComponentLabels } from "./common/variables";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { aliasTokens, coreTokens } from "./styles/tokens";

/**
 * This type is used to allow partial themes and labels objects to be passed to the HalstackProvider.
 * This is an extension of the already existing Partial type, which only allows one level of partiality.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: Partial<T[P]>;
};
const HalstackContext = createContext<AdvancedTheme>(componentTokens);
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
  newTheme: { [key: string]: string };
};

const HalstackThemed = styled.div<{ theme: { [key: string]: string | number } }>`
  ${(props) => css`
    ${Object.keys(props.theme).length ? Object.entries(props.theme).map(([key, val]) => `${key}: ${val};`) : coreTokens}
    ${aliasTokens}
  `}
`;

const createTheme = (opinionatedTheme: Record<string, string | number> = {}) => {
  const vars: Record<string, string | number> = {};
  Object.entries(coreTokens).forEach(([key, value]) => {
    vars[key] = opinionatedTheme[key] ?? value;
  });
  return vars;
};

const HalstackProvider = ({ labels, children, newTheme }: HalstackProviderPropsType): JSX.Element => {
  const parsedLabels = useMemo(() => (labels ? parseLabels(labels) : null), [labels]);
  const parsedTheme = useMemo(() => {
    const theme = createTheme(newTheme);
    return theme;
  }, [newTheme]);

  return (
    <HalstackThemed theme={parsedTheme}>
      {parsedLabels ? (
        <HalstackLanguageContext.Provider value={parsedLabels}>{children}</HalstackLanguageContext.Provider>
      ) : (
        children
      )}
    </HalstackThemed>
  );
};

export { HalstackContext as default, HalstackProvider, HalstackLanguageContext };
