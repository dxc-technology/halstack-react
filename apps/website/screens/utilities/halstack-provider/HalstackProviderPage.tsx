import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import customTranslations from "./examples/customTranslations";
import customThemes from "./examples/customThemes";
import {
  DxcFlex,
  DxcParagraph,
  DxcTable,
  DxcLink,
  DxcAlert,
  DxcTypography,
  DxcBleed,
  DxcHeading,
} from "@dxc-technology/halstack-react";
import Link from "next/link";
import PageHeading from "@/common/PageHeading";
import Code, { TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

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
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                opinionatedTheme
              </DxcFlex>
            </td>
            <td>
              <TableCode>OpinionatedTheme</TableCode>
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
          Halstack Provider can be used to translate all the labels that cannot be changed by the component properties.
        </DxcParagraph>
        <DxcAlert
          title="Localization"
          semantic="info"
          message={{
            text: (
              <>
                To find out the list of labels that are translatable we should refer to the documentation in the{" "}
                <Link href="/principles/localization" passHref legacyBehavior>
                  <DxcLink>Localization</DxcLink>
                </Link>{" "}
                section.
              </>
            ),
          }}
          closable={false}
        />
        <DxcParagraph>
          Let's imagine that we want to translate the '(Optional)' label of a <Code>DxcTextInput</Code>, as well as the
          error messages of our <Code>DxcFileInput</Code> component. To do so, we need to create an object with the
          translations. In this object, you will have as many objects as components you want to translate with the
          respective translation for their labels.
        </DxcParagraph>
        <Example example={customTranslations} defaultIsVisible />
        <DxcBleed top="var(--spacing-gap-xl)">
          <DxcTypography fontSize="0.875rem">
            *(to see the translated error message you should try to add any file on the <Code>DxcFileInput</Code>).
          </DxcTypography>
        </DxcBleed>
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
          We create a <Code>lightPalette</Code> and <Code>darkPalette</Code> objects with as many CSS variables as we
          want and their respective values. Then we pass one of the objects based on the state of the <Code>theme</Code>{" "}
          to the Halstack Provider, which wraps our components, through its <Code>opinionatedTheme</Code> property.
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
