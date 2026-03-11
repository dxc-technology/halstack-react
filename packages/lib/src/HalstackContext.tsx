import { createContext, ReactNode, useMemo } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { coreTokens, aliasTokens } from "./styles/tokens";
import { DefaultThemedLogos, TranslatedLabels, defaultTranslatedComponentLabels } from "./common/variables";

/**
 * This type is used to allow labels objects to be passed to the HalstackProvider.
 * This is an extension of the already existing Partial type, which only allows one level of partiality.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: Partial<T[P]>;
};
const HalstackLanguageContext = createContext<TranslatedLabels>(defaultTranslatedComponentLabels);
const HalstackLogosContext = createContext<Record<string, string | undefined>>(DefaultThemedLogos);

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
type ThemeType = { tokens?: Record<string, string | number>; logos?: Record<string, string | undefined> };

type HalstackProviderPropsType = {
  labels?: DeepPartial<TranslatedLabels>;
  children: ReactNode;
  opinionatedTheme?: ThemeType;
};

const HalstackThemed = styled.div<{ coreTheme?: ThemeType["tokens"] }>`
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

/**
 * This function creates a theme object that will be used in the HalstackThemed component.
 * It takes the opinionatedTheme tokens and overrides the coreTokens with them.
 * If a token is not provided in the opinionatedTheme, it will use the value from coreTokens.
 */
const createCoreTheme = (opinionatedTheme: ThemeType["tokens"] | undefined = {}) => {
  const newTheme: ThemeType["tokens"] = {};
  Object.entries(coreTokens).forEach(([key, value]) => {
    newTheme[key] = opinionatedTheme[key] ?? value;
  });
  return newTheme;
};

const HalstackProvider = ({ labels, children, opinionatedTheme }: HalstackProviderPropsType): JSX.Element => {
  const parsedLabels = useMemo(() => (labels ? parseLabels(labels) : null), [labels]);
  const parsedCoreTheme = useMemo(() => {
    const theme = createCoreTheme(opinionatedTheme?.tokens);
    return theme;
  }, [opinionatedTheme]);

  return (
    <HalstackThemed coreTheme={parsedCoreTheme}>
      <HalstackLogosContext.Provider value={opinionatedTheme?.logos ?? DefaultThemedLogos}>
        {parsedLabels ? (
          <HalstackLanguageContext.Provider value={parsedLabels}>{children}</HalstackLanguageContext.Provider>
        ) : (
          children
        )}
      </HalstackLogosContext.Provider>
    </HalstackThemed>
  );
};

export { HalstackProvider, HalstackLanguageContext, HalstackLogosContext };
