import { DxcFlex, DxcParagraph, DxcHeading, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import Link from "next/link";
import { rechartsGuidelinesSection } from "./rechartsGuidelinesSection";
import { cloudscapeGuidelinesSection } from "./cloudscapeGuidelinesSection";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          At Halstack, we believe that <strong>effective data visualization</strong> is crucial for transforming complex
          data into clear, actionable insights. Our principles focus on{" "}
          <strong>clarity, accuracy, accessibility, and interactivity</strong>. By adhering to these guidelines, you can
          create visual representations that are not only aesthetically pleasing, but also highly functional, ensuring
          that users can easily understand and interact with the data presented.
        </DxcParagraph>
        <DxcParagraph>
          As we consider data visualization a tremendously dense and complex design pattern, we have decided to rely on
          external libraries. Our choices are{" "}
          <Link href="https://cloudscape.design/" passHref legacyBehavior>
            <DxcLink>Cloudscape</DxcLink>
          </Link>{" "}
          or{" "}
          <Link href="https://recharts.org/" passHref legacyBehavior>
            <DxcLink>Recharts</DxcLink>
          </Link>
          , depending on your team's needs and preferences.
        </DxcParagraph>
        <DxcParagraph>
          Take into consideration that <strong>Cloudscape is a Design System</strong> with its own set of design tokens,
          such as <strong>colors, typography, and spacing</strong>. Recharts, on the other hand, is a{" "}
          <strong>charting library</strong> that provides a wide range of <strong>customizable chart types</strong> and
          components that can be tailored to fit your specific needs.
        </DxcParagraph>
      </>
    ),
  },
  cloudscapeGuidelinesSection,
  rechartsGuidelinesSection,
];

const DataVisualizationPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Data visualization" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/principles/data-visualization/DataVisualizationPage.tsx" />
  </DxcFlex>
);

export default DataVisualizationPage;
