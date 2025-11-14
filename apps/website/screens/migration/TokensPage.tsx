import { DxcFlex, DxcParagraph, DxcHeading } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import Code from "@/common/Code";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Version <Code>16.0.0</Code> introduces major breaking changes, including redesigned components, API updates, and
        the removal of deprecated elements. This guide details the main differences and migration paths from
        <Code>15.x.x</Code> to <Code>16.0.0</Code>.
      </DxcParagraph>
    ),
  },
  {
    title: "Token updates",
    content: (
      <DxcParagraph>
        New design tokens have been added for semantic color mapping and improved theme support. Review any custom
        themes using deprecated core tokens.
      </DxcParagraph>
    ),
  },
];

const MigrationPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Migrating from 15.x.x to 16.0.0" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/migration/MigrationPage.tsx" />
  </DxcFlex>
);

export default MigrationPage;
