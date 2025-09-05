import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import customTranslations from "./examples/customTranslations";
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

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
        <tr>
          <td>labels</td>
          <td>
            <TableCode>TranslatedLabels</TableCode>
          </td>
          <td>Object with a given structure, specified below, for defining translations.</td>
          <td>-</td>
        </tr>
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
