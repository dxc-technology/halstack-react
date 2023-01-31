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
} from "@dxc-technology/halstack-react";
import Link from "next/link";
const sections = [
  {
    title: "HalstackProvider",
    content: (
      <>
        {" "}
        <DxcParagraph>
          HalstackProvider is a utility that applies a certain context to its
          child components. It can be used to apply this context either to the
          whole application or to particular components.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>theme: object[]</td>
          <td></td>
          <td>
            Object with a given structure, specified below, for defining the
            opinionated theme.
          </td>
        </tr>
        <tr>
          <td>advancedTheme: object[]</td>
          <td></td>
          <td>
            Object with a given structure, specified below, for defining the
            advanced theme.
          </td>
        </tr>
        <tr>
          <td>labels:object[]</td>
          <td></td>
          <td>
            Object with a given structure, specified below, for defining
            translations.
          </td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "Opinionated Theme",
    content: (
      <>
        <DxcParagraph>
          As explained in the{" "}
          <Link
            href="/principles/themes/#opinionated-theme-inputs-list"
            passHref
          >
            <DxcLink>Themes section</DxcLink>
          </Link>{" "}
          you can apply the opinionated theme strategy to customize the
          components. We strongly recommend using the{" "}
          <Link href="/theme-generator/opinionated-theme" passHref>
            <DxcLink>opinionated theme generator</DxcLink>
          </Link>{" "}
          to create the theme object that will be used in the{" "}
          <Code>HalstackProvider</Code>.
        </DxcParagraph>
        <DxcParagraph>
          Here is an example of customizing the colours of a DxcAccordion and a
          DxcTextInput:
        </DxcParagraph>
        <Example example={opinionatedTheme} defaultIsVisible />

        <DxcParagraph>
          As you can see in the example above, we create the{" "}
          <Code>customTheme</Code> object with as many components as we want to
          customize and the values we want to customize. Then we pass this
          object to the <Code>HalstackProvider</Code>, which wraps our
          components, through its <Code>theme</Code> property.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Advanced theme",
    content: (
      <>
        <DxcParagraph>
          If we need a higher level of customisation you need to choose to use
          the Advanced Theme as explained in the{" "}
          <Link
            href="/principles/themes/#opinionated-theme-inputs-list"
            passHref
          >
            <DxcLink>Themes section</DxcLink>
          </Link>{" "}
          section. We strongly recommend using the{" "}
          <Link href="/theme-generator/advanced-theme" passHref>
            <DxcLink>advanced theme generator</DxcLink>
          </Link>{" "}
          to create the theme object that will be used in the HalstackProvider.
        </DxcParagraph>
        <Example example={advancedTheme} defaultIsVisible />

        <DxcParagraph>
          In the example below we have customized some of the DxcAccordion
          tokens. As you can see, it is not necessary to pass all the tokens of
          the component, only those that change their value with respect to the
          default theme.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Localization",
    content: (
      <>
        <DxcParagraph>
          HalstackProvider can be used to translate all the labels that cannot
          be changed by the component properties.
        </DxcParagraph>
        <DxcParagraph>
          To find out the list of labels that are translatable we should refer
          to the documentation in the{" "}
          <Link href="/principles/localization" passHref>
            <DxcLink>Localization</DxcLink>
          </Link>{" "}
          section.
        </DxcParagraph>
        <DxcParagraph>
          Let's imagine that we want to translate the '(Optional)' label of the
          components that show it, as well as the error messages of our File
          Input component (to see the translated error message you should try to
          add any file on fileinput), we should create an object that will
          contain an object with the translations of each component.
        </DxcParagraph>
        <Example example={customTranslations} defaultIsVisible />
      </>
    ),
  },
];

const HalstackProvider = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/utilities/halstackProvider/HalstackProvider.tsx" />
    </DxcFlex>
  );
};

export default HalstackProvider;
