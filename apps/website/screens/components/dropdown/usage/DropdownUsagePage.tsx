import { DxcBulletedList, DxcFlex, DxcParagraph } from "@repo/ui";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import iconUsage from "./examples/iconUsage";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          Dropdowns have a similar look and behavior to select components, the difference is that while select is only
          to collect user's data into a form, dropdown can be used in a variety of scenarios.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Dropdowns can be useful as a list of items that will be shown when the user clicks or hovers their main
            parent that will trigger the pop up with the options.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            An arrow linked with the label of the dropdown should be shown to indicate the user that more options are
            available but are currently hidden.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            By default, every dropdown will be extending underneath his main container if the space in the screen is
            enough to contain all the size declared for the pop-up.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          If there is a special case when the dropdown couldn't be displayed below the selector because it is hiding
          important information reducing discoverability and scanability in the website then consider using other
          options to display the information or customize the position of the pop-up to fitting the necessities of the
          application.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <>
        <DxcParagraph>
          It is allowed the use of icons within the dropdown component. There are several options of configuration, the
          icon can be placed before or after the label, also the icon can be the unique content of the dropdown
          placeholder and options, so the final goal of this is to keep consistency with the rest of the components of
          the Design System such as buttons or selects, that have the same behavior.
        </DxcParagraph>
        <Example example={iconUsage}></Example>
      </>
    ),
  },
  {
    title: "User Interface Design Considerations",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Consider the number of options (binary decisions or a few items) to decide to implement one component that
          represent in a better way the data, i.e. switch toggle.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          For a large number of well specified options, consider using an autocomplete field to filter the number of
          options while typing.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Consider the input, might be that a text input would fit better than a dropdown.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const DropdownUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/dropdown/usage/DropdownUsagePage.tsx" />
    </DxcFlex>
  );
};

export default DropdownUsagePage;
