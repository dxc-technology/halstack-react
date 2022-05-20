import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Image from "@/common/Image";
import Figure from "@/common/Figure";
import dropdownIconUsage from "./images/dropdown_icon_usage.png";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcText as="p">
          Dropdowns have a similar look and behaviour to select components, the
          difference is that while select is only to collect user's data into a
          form, dropdown can be used in a variety of scenarios.
        </DxcText>
        <DxcList>
          <DxcText>
            Dropdowns can be useful as a list of items that will be shown when
            the user clicks or hovers their main parent that will trigger the
            pop up with the options.
          </DxcText>
          <DxcText>
            An arrow linked with the label of the dropdown should be shown to
            indicate the user that more options are available but are currently
            hidden.
          </DxcText>
          <DxcText>
            By default, every dropdown will be extending underneath his main
            container if the space in the screen is enough to contain all the
            size declared for the pop-up.
          </DxcText>
        </DxcList>
        <DxcText as="p">
          If there is a special case when the dropdown couldn't be displayed
          below the selector because it is hiding important information reducing
          discoverability and scanability in the website then consider to use
          other options to display the information or customize the position of
          the pop up to fitting the necessities of the application.
        </DxcText>
      </>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <>
        <DxcText as="p">
          It is allowed the use of icons within the dropdown component. There
          are several options of configuration, the icon can be placed before or
          after the label, also the icon can be the unique content of the
          dropdown placeholder and options, so the final goal of this is to keep
          consistency with the rest of the components of the design system such
          as buttons or selects, that have the same behavior.
        </DxcText>
        <Figure caption="Examples of icon usage">
          <Image src={dropdownIconUsage} alt="Examples of icon usage" />
        </Figure>
      </>
    ),
  },
  {
    title: "User Interface Design Considerations",
    content: (
      <DxcList>
        <DxcText>
          Consider the number of options (binary decisions or a few items) to
          decide to implement one component that represent in a better way the
          data, i.e. radio button or switch toggle.
        </DxcText>
        <DxcText>
          For a large number of well specified options, consider to use an
          autocomplete field to filter the amount of options while typing.
        </DxcText>
        <DxcText>
          Consider the input, might be that a text input would fit better than a
          dropdown.
        </DxcText>
      </DxcList>
    ),
  },
];

const DropdownUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Usage"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/dropdown/usage/DropdownUsagePage.tsx" />
    </DxcStack>
  );
};

export default DropdownUsagePage;
