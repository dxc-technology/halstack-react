import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import Code from "@/common/Code";
import typesOpenSans from "./images/type_open_sans.png";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <Image src={typesOpenSans} alt="Typography overview" />
        <DxcParagraph>
          Our selected typography helps in structuring our user&#39;s experience based on the visual impact that it has
          on the user interface content. It defines what is the first noticeable piece of information or data based on
          the font shape, size, color, or type and it highlights some pieces of text over the rest. Some typographic
          elements used in Halstack Design System include headers, body, taglines, captions, and labels.
        </DxcParagraph>
        <DxcParagraph>
          Make sure you include all the different typographic variants in order to enhance the application&#39;s content
          structure, including the Heading component which defines different levels of page and section titles.
        </DxcParagraph>
        <DxcParagraph>
          When defining the different typographic variants included in the Halstack Design System, we use a system of
          layers:
        </DxcParagraph>
        <DxcParagraph>
          A first, lower level layer in which we have the <Code>DxcTypography</Code> component, with which any
          typographic combination contemplated within the values defined in the tables shown in the 'Code' tab can be
          created. It is important to note that this lowest level component should only be considered as an option once
          the rest of the components, with more specific context for certain use cases, have been discarded.
        </DxcParagraph>
        <DxcParagraph>
          Above this first layer we have a second layer that provides a more specific context in which we have three
          components: <Code>DxcParagraph</Code>, <Code>DxcBulletedList</Code> and <Code>DxcHeading</Code>; these
          components, that are more focused on covering a specific use case in turn, use the first level component
          DxcTypography.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <Code>DxcParagraph</Code> component is intended to display text in paragraph format, separating it from the
            other components by a line break.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Code>DxcBulletedList</Code> component is intended to display an enumeration of certain elements. It is not
            a substitute for native HTML tags &lt;ul&gt; and &lt;ol&gt;.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Code>DxcHeading</Code> component is intended to define the hierarchy of content within the application.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];
const TypographyUsagePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/principles/typography/usage/TypographyUsagePage.tsx" />
  </DxcFlex>
);

export default TypographyUsagePage;
