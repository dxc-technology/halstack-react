import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import customThemes from "./examples/customThemes";
import { DxcFlex, DxcParagraph, DxcTable, DxcLink, DxcAlert, DxcHeading } from "@dxc-technology/halstack-react";
import Link from "next/link";
import PageHeading from "@/common/PageHeading";
import Code, { ExtendedTableCode, TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";
import customLocalization from "./examples/customLocalization";

const opinionatedThemeTypeString = `{
  tokens?: Record<string, string | number>;
  logos?: {
    mainLogo?: string;
    footerLogo?: string;
    footerReducedLogo?: string;
    favicon?: string;
  };
};`;

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>labels</td>
            <td>
              <TableCode>TranslatedLabels</TableCode>
            </td>
            <td>Object with a given structure, specified below, for defining translations.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>localeTag</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              String representing the locale, such as "en-US" for English (United States) or "es-ES" for Spanish
              (Spain).
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                opinionatedTheme
              </DxcFlex>
            </td>
            <td>
              <ExtendedTableCode>{opinionatedThemeTypeString}</ExtendedTableCode>
            </td>
            <td>Object with a given structure, specified below, for defining the opinionated theme.</td>
            <td>-</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Localization",
    content: (
      <>
        <DxcParagraph>
          Using Halstack Provider localeTag property, we can set the locale for the components. The localeTag property
          accepts a string that represents the locale, such as "en-US" for English (United States) or "es-ES" for
          Spanish (Spain). By setting this property, some components like the DateInput component will automatically
          format the date according to the specified locale. For example, if we set localeTag="de-DE", the DateInput
          component will display the date in the German format (DD.MM.YYYY). Halstack Provider can also be used to
          translate all the labels that cannot be changed by the component properties.
        </DxcParagraph>
        <DxcAlert
          title="Localization"
          semantic="info"
          message={{
            text: (
              <>
                To find out the list of labels that are translatable we should refer to the documentation in the{" "}
                <Link href="/guidelines/localization" passHref legacyBehavior>
                  <DxcLink>Localization</DxcLink>
                </Link>{" "}
                section.
              </>
            ),
          }}
          closable={false}
        />
        <DxcParagraph>
          Let's imagine that we want to translate the '(Optional)' label of a <Code>DxcTextInput</Code>. To do so, we
          need to create an object with the translations. In this object, you will have as many objects as components
          you want to translate with the respective translation for their labels.
        </DxcParagraph>
        <DxcParagraph>
          To change the format in a <Code>DxcDateInput</Code> component, we can use the <Code>localeTag</Code> property
          of the Halstack Provider or the <Code>format</Code> prop. The <Code>localeTag</Code> property accepts a string
          that represents the locale, such as "en-US" for English (United States) or "es-ES" for Spanish (Spain). By
          setting this property, the DateInput component will automatically format the date according to the specified
          locale and also change the first day of the week. For example, if we set <Code>localeTag="fr-CH"</Code>, the{" "}
          <Code>DxcDateInput</Code> component will display the date in the French but using Swiss format (DD.MM.YYYY)
          and set Monday as the first day of the week.
        </DxcParagraph>
        <Example example={customLocalization} defaultIsVisible />
      </>
    ),
  },
  {
    title: "Theming",
    content: (
      <>
        <DxcParagraph>You can apply the opinionated theming strategy to customize the components.</DxcParagraph>
        <DxcParagraph>
          Below is an example of customizing the colours of a <Code>DxcButton</Code>:
        </DxcParagraph>
        <Example example={customThemes} defaultIsVisible />
        <DxcParagraph>
          We create a <Code>firstPalette</Code> and <Code>secondPalette</Code> objects with as many CSS variables as we
          want and their respective values. Then we pass one of the objects based on the state of the <Code>theme</Code>{" "}
          to the Halstack Provider, which wraps our components, through its <Code>opinionatedTheme</Code> property.
        </DxcParagraph>
        <DxcParagraph>
          Logos defined in the <Code>opinionatedTheme</Code> property of the Halstack Provider are applied to any{" "}
          <Code>DxcApplicationLayout</Code> component within the provider. However,{" "}
          <Link href={"/components/application-layout"} passHref legacyBehavior>
            <DxcLink>DxcApplicationLayout</DxcLink>
          </Link>{" "}
          props take precedence over the provider logos, allowing you to override them on a per-component basis when
          more specific customization is needed.
        </DxcParagraph>
        <DxcParagraph>
          Themes can be created with the{" "}
          <Link href="/theme-generator/" passHref legacyBehavior>
            <DxcLink>Theme Generator</DxcLink>
          </Link>{" "}
          tool, which allows you to define your brand colors and export a ready-to-use token structure to pass through
          the <Code>opinionatedTheme</Code> property.
        </DxcParagraph>
      </>
    ),
  },
];

const HalstackProviderPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Halstack Provider" />
        <DxcParagraph>
          Halstack Provider is the context provider used for a whole application or an isolated group of components,
          which defines the translation labels.
        </DxcParagraph>
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/utilities/halstack-provider/HalstackProviderPage.tsx" />
  </DxcFlex>
);

export default HalstackProviderPage;
