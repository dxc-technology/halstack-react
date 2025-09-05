import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcBulletedList, DxcLink, DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          For our sans-serif <Code>font-family</Code> we use <strong>Open Sans</strong>; a modern, humanist sans-serif
          typeface designed by Steve Matteson. It is known for its <strong>clarity, neutrality, and readability</strong>{" "}
          across a wide range of digital and print applications.
        </DxcParagraph>
        <DxcParagraph>
          With its <strong>open forms, neutral yet friendly appearance, and optimized legibility at small sizes</strong>
          , Open Sans is optimized for both web and mobile interfaces, balancing aesthetic appeal with functional
          clarity. The typeface includes a wide character set that supports{" "}
          <strong>Latin, Greek, and Cyrillic scripts</strong>, making it suitable for internationalization.
        </DxcParagraph>
        <DxcParagraph>
          Open Sans can be accessed via{" "}
          <DxcLink newWindow href="https://fonts.google.com/specimen/Open+Sans/about">
            Google Fonts
          </DxcLink>
          and is released under the
          <DxcLink newWindow href="https://openfontlicense.org/open-font-license-official-text/">
            SIL Open Font License Version 1.1
          </DxcLink>
          .
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          Our Typography component should be considered a fallback option and used{" "}
          <strong>only when none of the following components meet your specific needs</strong>. Each of these components
          is designed to convey structure and meaning more effectively within an interface:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>
              <Link href="/components/heading" passHref legacyBehavior>
                <DxcLink>Heading</DxcLink>
              </Link>
              :
            </strong>{" "}
            Provides semantic structure and visual hierarchy to content sections, improving both navigation and
            accessibility.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>
              <Link href="/components/paragraph" passHref legacyBehavior>
                <DxcLink>Paragraph</DxcLink>
              </Link>
              :
            </strong>{" "}
            Used for blocks of body text, supporting longer-form content while maintaining readability and consistent
            spacing.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>
              <Link href="/components/bulleted-list" passHref legacyBehavior>
                <DxcLink>Bulleted List</DxcLink>
              </Link>
              :
            </strong>{" "}
            Ideal for presenting items or information in a non-sequential list, helping users quickly scan grouped
            content.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          If your use case isn't addressed by any of these components, please reach out to our team. We're happy to
          evaluate your scenario and find a suitable solution.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Keep a clear visual hierarchy:</strong> Use different sizes, weights, and styles to organize content.
          This helps users quickly understand the structure and importance of information.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Prioritize readability:</strong> Make sure there is enough contrast between text and background to
          ensure it's easy to read for everyone.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Allow for sufficient white space:</strong> Space between lines, paragraphs, and elements improves
          legibility and creates a more open, scannable layout.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure responsiveness:</strong> Typography should adapt to different screen sizes and resolutions
          without breaking or becoming hard to read.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid overusing all caps:</strong> All-uppercase text is harder to read in longer blocks. Use it
          sparingly for labels or short button text.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const TypographyOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/typography/overview/TypographyOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default TypographyOverviewPage;
