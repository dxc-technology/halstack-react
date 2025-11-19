import { DxcFlex, DxcParagraph, DxcHeading, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import Code from "@/common/Code";
import CodeBlock from "@/common/CodeBlock";
import Link from "next/link";

const sections = [
  {
    title: "Overview",
    content: (
      <DxcParagraph>
        Halstack 16 introduces a new token-based theming system composed of <Code>core</Code> and <Code>alias</Code>{" "}
        tokens. In Halstack 15, theming relied on a JSON-based <Code>opinionatedTheme</Code> /{" "}
        <Code>advancedTheme</Code> object passed to the application wrapper. This migration page explains how to
        transition from the old theme object to the new CSS-token architecture.
      </DxcParagraph>
    ),
  },
  {
    title: "What has changed",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Area</th>
            <th>Halstack 15</th>
            <th>Halstack 16</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Theming mechanism</td>
            <td>Theme object (JSON) passed to provider</td>
            <td>CSS variables (core + alias tokens)</td>
          </tr>
          <tr>
            <td>Customization</td>
            <td>opinionatedTheme / advancedTheme</td>
            <td>Override core tokens (safe) and component tokens (advanced, upcoming)</td>
          </tr>
          <tr>
            <td>Runtime updates</td>
            <td>ThemeProvider re-renders components</td>
            <td>CSS vars update instantly without rerenders</td>
          </tr>
          <tr>
            <td>Naming consistency</td>
            <td>No token taxonomy, per-component styles</td>
            <td>Core → Alias → Component 3-layer architecture</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Impact on adopters",
    content: (
      <>
        <DxcParagraph>Applications may need adjustments in the following areas:</DxcParagraph>
        <ul>
          <li>
            Removal of old theme shape (<Code>advancedTheme</Code> / <Code>opinionatedTheme</Code>).
          </li>
          <li>Migrating color, spacing, and typography overrides to CSS tokens.</li>
          <li>Replacing any custom component overrides that referenced theme object values.</li>
          <li>Updating global styles to rely on CSS variables instead of hardcoded values.</li>
        </ul>
      </>
    ),
  },
  {
    title: "New token architecture",
    subSections: [
      {
        title: "Core tokens",
        content: (
          <>
            <DxcParagraph>
              Core tokens define the raw, non-contextual values of the design system. They map directly to CSS
              variables. You can find a list with all the core tokens in{" "}
              <Link
                href="/foundations/tokens/#how-tokens-move-from-design-to-code-tokens-in-development"
                passHref
                legacyBehavior
              >
                <DxcLink>this page</DxcLink>
              </Link>
              .
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Alias tokens",
        content: (
          <>
            <DxcParagraph>
              Alias tokens map raw core values to semantic meanings such as background, foreground, or border tokens.
              They provide a shared vocabulary across components. You can find a list with all the alias tokens in{" "}
              <Link
                href="/foundations/tokens/#how-tokens-move-from-design-to-code-tokens-in-development"
                passHref
                legacyBehavior
              >
                <DxcLink>this page</DxcLink>.
              </Link>
              {/* TODO: SEPARATE THE NEWLY ADDED ALIAS TOKENS FROM THE CORE TOKENS IN A DIFFERENT PAGE */}
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Component tokens (upcoming)",
        content: (
          <>
            <DxcParagraph>
              Component tokens will be introduced progressively. They will reference alias tokens and control
              component-level styling.
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
  {
    title: "Migrating from the old theming strategy",
    subSections: [
      {
        title: "Style overrides",
        content: (
          <>
            <DxcParagraph>Old JSON-based color overrides must be replaced by CSS variable assignments.</DxcParagraph>
            <DxcParagraph>Previous version:</DxcParagraph>
            <CodeBlock>{`const opinionatedTheme = {
  button: {
    "baseColor": "#2b470b",
    "primaryFontColor": "#ffffff",
  }
}
// ...
return (
  <HalstackProvider theme={customTheme}>
    <DxcButton label="Theme test" />
  </HalstackProvider>
);`}</CodeBlock>
            <DxcParagraph>New version:</DxcParagraph>
            <CodeBlock>
              {`const opinionatedTheme = {
  "--color-primary-700": "#2b470b",
  "--color-absolutes-white": "#ffffff",
}
// ...
return (
  <HalstackProvider theme={customTheme}>
    <DxcButton label="Theme test" />
  </HalstackProvider>
);`}
            </CodeBlock>
            <DxcParagraph>
              This can be applied to colors, fonts, spacings and borders. However, keep in mind that, for now, only core
              tokens can be overwritten and they affect all the components which are wrapped within the{" "}
              <Code>HalstackProvider</Code>.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Apply themes dynamically",
        content: (
          <>
            <DxcParagraph>
              To support dynamic theme switching (for example, toggling between light and dark mode), you can store the
              theme object in a <Code>useState</Code> hook and update it in response to user actions. When the state
              changes, the
              <Code>HalstackProvider</Code> receives the updated CSS variables and the UI updates instantly without
              rerendering components manually.
            </DxcParagraph>

            <CodeBlock>
              {`const App = () => {
  // Light palette example
  const lightPalette = {
    "--color-primary-50": "#d3f0b4",
    "--color-primary-100": "#a2df5e",
    "--color-primary-200": "#77c81f",
    "--color-primary-300": "#68ad1b",
    "--color-primary-400": "#579317",
    "--color-primary-500": "#487813",
    "--color-primary-600": "#39600f",
    "--color-primary-700": "#2b470b",
    "--color-primary-800": "#1c2f07",
    "--color-primary-900": "#0d1503",

    "--color-secondary-50": "#fff9d6",
    "--color-secondary-100": "#ffed99",
    "--color-secondary-200": "#ffe066",
    "--color-secondary-300": "#e6c84d",
    "--color-secondary-400": "#ccad33",
    "--color-secondary-500": "#b39426",
    "--color-secondary-600": "#8f741f",
    "--color-secondary-700": "#6b5517",
    "--color-secondary-800": "#47370f",
    "--color-secondary-900": "#241b08",
  };

  // Dark palette example
  const darkPalette = {
    "--color-primary-50": "#ffd6e7",
    "--color-primary-100": "#ff99c2",
    "--color-primary-200": "#ff66a3",
    "--color-primary-300": "#e05584",
    "--color-primary-400": "#c5446d",
    "--color-primary-500": "#a83659",
    "--color-primary-600": "#872b47",
    "--color-primary-700": "#661f35",
    "--color-primary-800": "#441423",
    "--color-primary-900": "#220a12",

    "--color-secondary-50": "#f3e6db",
    "--color-secondary-100": "#e2c7a9",
    "--color-secondary-200": "#d1a577",
    "--color-secondary-300": "#b88252",
    "--color-secondary-400": "#99673f",
    "--color-secondary-500": "#7a5232",
    "--color-secondary-600": "#5c3f26",
    "--color-secondary-700": "#3e2b19",
    "--color-secondary-800": "#21170d",
    "--color-secondary-900": "#100b06",
  };

  const [theme, setTheme] = useState(lightPalette);

  const toggleTheme = () => {
    setTheme((prev) => (prev === lightPalette ? darkPalette : lightPalette));
  };

  return (
    <HalstackProvider theme={theme}>
      <DxcButton label="Toggle theme" onClick={toggleTheme} />
    </HalstackProvider>
  );
};`}
            </CodeBlock>
            <DxcParagraph>
              Any component wrapped by <Code>HalstackProvider</Code> will immediately reflect the new token values.
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
  {
    title: "Removing legacy theming APIs",
    content: (
      <>
        <DxcParagraph>Ensure you remove:</DxcParagraph>
        <ul>
          <li>
            All usage of the old <Code>opinionatedTheme</Code> and <Code>advancedTheme</Code>.
          </li>
          <li>
            Theme props passed to <Code>DxcApplication</Code> or similar wrappers.
          </li>
          <li>Any custom wrappers relying on the old theme shape.</li>
        </ul>
      </>
    ),
  },
];

const TokensMigrationPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Migration to Tokens" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react" />
  </DxcFlex>
);

export default TokensMigrationPage;
