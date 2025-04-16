import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import opinionatedTheme from "./examples/opinionatedTheme";
import advancedTheme from "./examples/advancedTheme";
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
import TableCode from "@/common/TableCode";

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
          <td>theme</td>
          <td>
            <TableCode>OpinionatedTheme</TableCode>
          </td>
          <td>Object with a given structure, specified below, for defining the opinionated theme.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>advancedTheme</td>
          <td>
            <TableCode>AdvancedTheme</TableCode>
          </td>
          <td>Object with a given structure, specified below, for defining the advanced theme.</td>
          <td>-</td>
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
    title: "Opinionated theme",
    content: (
      <>
        <DxcParagraph>
          As explained on the{" "}
          <Link href="/principles/themes/#different-theming-strategies-opinionated-theme" passHref legacyBehavior>
            <DxcLink>Themes</DxcLink>
          </Link>{" "}
          page, you can apply the opinionated theming strategy to customize the components.
        </DxcParagraph>
        <DxcAlert
          title="Opinionated theme"
          semantic="info"
          message={{
            text: (
              <>
                Remember that you can use the{" "}
                <Link href="/theme-generator/opinionated-theme" passHref legacyBehavior>
                  <DxcLink>opinionated theme generator</DxcLink>
                </Link>{" "}
                to help you create themes.
              </>
            ),
          }}
          closable={false}
        />
        <DxcParagraph>
          Below is an example of customizing the colours of a <Code>DxcAccordion</Code> and a <Code>DxcTextInput</Code>:
        </DxcParagraph>
        <Example example={opinionatedTheme} defaultIsVisible />
        <DxcParagraph>
          We create a <Code>customTheme</Code> object with as many components as we want and their respective values.
          Then we pass this object to the Halstack Provider, which wraps our components, through its <Code>theme</Code>{" "}
          property.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Advanced theme",
    content: (
      <>
        <DxcParagraph>
          Advanced theming is the option to choose when further customization is required. To find out which use cases
          are valid for this strategy, you can refer to the{" "}
          <Link href="/principles/themes/#different-theming-strategies-advanced-theme" passHref legacyBehavior>
            <DxcLink>Themes</DxcLink>
          </Link>{" "}
          page.
        </DxcParagraph>
        <DxcAlert
          title="Advanced theme"
          semantic="info"
          message={{
            text: (
              <>
                Remember that you can use the{" "}
                <Link href="/theme-generator/advanced-theme" passHref legacyBehavior>
                  <DxcLink>advanced theme generator</DxcLink>
                </Link>{" "}
                to help you create themes.
              </>
            ),
          }}
          closable={false}
        />

        <Example example={advancedTheme} defaultIsVisible />
        <DxcParagraph>
          In the example above we have customized some of the <Code>DxcAccordion</Code> tokens. As you can see, it is
          not necessary to pass all the tokens of the component, only those that you want to change their value with
          respect to the default theme.
        </DxcParagraph>
      </>
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
        <DxcBleed top="2rem">
          <DxcTypography fontSize="0.875rem">
            *(to see the translated error message you should try to add any file on the <Code>DxcFileInput</Code>).
          </DxcTypography>
        </DxcBleed>
      </>
    ),
  },
];

const HalstackProvider = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading level={1} text="Halstack Provider"></DxcHeading>
          <DxcParagraph>
            Halstack Provider is the context provider used for a whole application or an isolated group of components,
            which defines the custom theme and/or translation labels.
          </DxcParagraph>
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/utilities/halstack-provider/HalstackProviderPage.tsx" />
    </DxcFlex>
  );
};

export default HalstackProvider;
