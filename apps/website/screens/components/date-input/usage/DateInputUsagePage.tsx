import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Use the date input component when asking for a past, present, or future date.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>Provide a hint with the date format expected in the placeholder.</DxcBulletedList.Item>
        <DxcBulletedList.Item>Use a concise label to indicate what the date selection refers to.</DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },

  {
    title: "Internationalization",
    content: (
      <>
        <DxcParagraph>
          The date format depends on an ISO definition for each country and the preference of use within the
          application.
        </DxcParagraph>
        <DxcParagraph>
          The format of the date may vary depending on language, region, country or customer. It is a good practice to
          give to the user some type of hint about the date format and in many cases.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            The default format for the United States is <Code>mm/dd/yyyy</Code>.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The default format for Australia, Europe, Africa, South America most countries of Asia is{" "}
            <Code>dd/mm/yyyy</Code>.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The default format in China is <Code>yyyy/mm/dd</Code>.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const DateInputUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/date-input/usage/DateInputUsagePage.tsx" />
    </DxcFlex>
  );
};

export default DateInputUsagePage;
