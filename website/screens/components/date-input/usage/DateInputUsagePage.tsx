import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Use the date input component when asking for a past, present, or
          future date.
        </DxcText>
        <DxcText>
          Provide a hint with the date format expected in the placeholder.
        </DxcText>
        <DxcText>
          Use a concise label to indicate what the date selection refers to.
        </DxcText>
      </DxcList>
    ),
  },

  {
    title: "Internationalization",
    content: (
      <>
        <DxcText as="p">
          The date format depends on an ISO definition for each country and the
          preference of use within the application.
        </DxcText>
        <DxcText as="p">
          The format of the date may vary depending on language, region, country
          or customer. It is a good practice to give to the user some type of
          hint about the date format and in many cases.
        </DxcText>
        <DxcList>
          <DxcText>
            The default format for the United States is <Code>mm/dd/yyyy</Code>.
          </DxcText>
          <DxcText>
            The default format for Australia, Europe, Africa, South America most
            countries of Asia is <Code>dd/mm/yyyy</Code>.
          </DxcText>
          <DxcText>
            The default format in China is <Code>yyyy/mm/dd</Code>.
          </DxcText>
        </DxcList>
      </>
    ),
  },
];

const DateInputUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Usage"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/date-input/usage/DateInputUsagePage.tsx" />
    </DxcStack>
  );
};

export default DateInputUsagePage;
