import { createContext, ReactNode, useMemo } from "react";
import { AdvancedTheme, componentTokens, TranslatedLabels, defaultTranslatedComponentLabels } from "./common/variables";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { coreTokens, aliasTokens } from "./styles/tokens";

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
type ThemeType = Record<string, string | number>;

type HalstackProviderPropsType = {
  labels?: DeepPartial<TranslatedLabels>;
  children: ReactNode;
  opinionatedTheme: ThemeType;
};

const HalstackThemed = styled.div<{ coreTheme?: ThemeType }>`
  ${(props) => {
    if (props.coreTheme)
      return css`
        ${Object.keys(props.coreTheme).length
          ? Object.entries(props.coreTheme).map(([key, val]) => `${key}: ${val};`)
          : coreTokens}
        ${aliasTokens}
      `;
    else {
      return css`
        ${coreTokens}
        ${aliasTokens}
      `;
    }
  }}
`;

const createCoreTheme = (opinionatedTheme: ThemeType = {}) => {
  const newTheme: ThemeType = {};
  Object.entries(coreTokens).forEach(([key, value]) => {
    newTheme[key] = opinionatedTheme[key] ?? value;
  });
  return newTheme;
};

const HalstackProvider = ({ labels, children, opinionatedTheme }: HalstackProviderPropsType): JSX.Element => {
  const parsedLabels = useMemo(() => (labels ? parseLabels(labels) : null), [labels]);
  const parsedCoreTheme = useMemo(() => {
    const theme = createCoreTheme(opinionatedTheme);
    return theme;
  }, [opinionatedTheme]);

  return (
    <HalstackThemed coreTheme={parsedCoreTheme}>
      {parsedLabels ? (
        <HalstackLanguageContext.Provider value={parsedLabels}>{children}</HalstackLanguageContext.Provider>
      ) : (
        children
      )}
    </HalstackThemed>
  );
};

export { HalstackContext as default, HalstackProvider, HalstackLanguageContext };
