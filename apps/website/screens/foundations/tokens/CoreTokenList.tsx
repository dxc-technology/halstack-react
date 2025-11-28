import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import DxcQuickNavContainer from "@/common/QuickNavContainer";
import { DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";
import TokensTable from "./tables/TokensTable";

const sections = [
  {
    title: "Colors",
    content: (
      <>
        <>
          {/* Color Tokens */}
          <DxcHeading level={4} text="Colors" />
          <DxcHeading level={5} text="Absolute color tokens" />
          <TokensTable categories={["color-absolutes"]} type="core" />
          <DxcHeading level={5} text="Primary color tokens" />
          <TokensTable categories={["color-primary"]} type="core" />
          <DxcHeading level={5} text="Secondary color tokens" />
          <TokensTable categories={["color-secondary"]} type="core" />
          <DxcHeading level={5} text="Tertiary color tokens" />
          <TokensTable categories={["color-tertiary"]} type="core" />
          <DxcHeading level={5} text="Neutral color tokens" />
          <TokensTable categories={["color-neutral"]} type="core" />
          <DxcHeading level={5} text="Semantic 01 color tokens" />
          <TokensTable categories={["color-semantic01"]} type="core" />
          <DxcHeading level={5} text="Semantic 02 color tokens" />
          <TokensTable categories={["color-semantic02"]} type="core" />
          <DxcHeading level={5} text="Semantic 03 color tokens" />
          <TokensTable categories={["color-semantic03"]} type="core" />
          <DxcHeading level={5} text="Semantic 04 color tokens" />
          <TokensTable categories={["color-semantic04"]} type="core" />
          <DxcHeading level={5} text="Alpha color tokens" />
          <TokensTable categories={["color-alpha"]} type="core" />
        </>
        <>
          {/* Dimensions Tokens */}
          <DxcHeading level={4} text="Dimensions" />
          <TokensTable categories={["dimensions"]} type="core" />
        </>
        <>
          {/* Font Tokens */}
          <DxcHeading level={4} text="Font" />
          <DxcHeading level={5} text="Font size tokens" />
          <TokensTable categories={["font-size"]} type="core" />
          <DxcHeading level={5} text="Font weight tokens" />
          <TokensTable categories={["font-weight"]} type="core" />
          <DxcHeading level={5} text="Font family tokens" />
          <TokensTable categories={["font-family"]} type="core" />
          <DxcHeading level={5} text="Font style tokens" />
          <TokensTable categories={["font-style"]} type="core" />
        </>
        <>
          {/* Border Tokens */}
          <DxcHeading level={4} text="Border" />
          <TokensTable categories={["line-style"]} type="core" />
        </>
      </>
    ),
    subSections: [
      { title: "Absolute", content: <TokensTable categories={["color-absolutes"]} type="core" /> },
      { title: "Primary", content: <TokensTable categories={["color-primary"]} type="core" /> },
      { title: "Secondary", content: <TokensTable categories={["color-secondary"]} type="core" /> },
      { title: "Tertiary", content: <TokensTable categories={["color-tertiary"]} type="core" /> },
      { title: "Neutral", content: <TokensTable categories={["color-neutral"]} type="core" /> },
      { title: "Semantic 01", content: <TokensTable categories={["color-semantic01"]} type="core" /> },
      { title: "Semantic 02", content: <TokensTable categories={["color-semantic02"]} type="core" /> },
      { title: "Semantic 03", content: <TokensTable categories={["color-semantic03"]} type="core" /> },
      { title: "Semantic 04", content: <TokensTable categories={["color-semantic04"]} type="core" /> },
      { title: "Alpha", content: <TokensTable categories={["color-alpha"]} type="core" /> },
    ],
  },
  { title: "Dimensions", content: <TokensTable categories={["dimensions"]} type="core" /> },
  {
    title: "Font",
    content: <TokensTable categories={["font-size", "font-weight", "font-family", "font-style"]} type="core" />,
    subSections: [
      {
        title: "Font size",
        content: <TokensTable categories={["font-size"]} type="core" />,
      },
      { title: "Font weight", content: <TokensTable categories={["font-weight"]} type="core" /> },
      { title: "Font family", content: <TokensTable categories={["font-family"]} type="core" /> },
      { title: "Font style", content: <TokensTable categories={["font-style"]} type="core" /> },
    ],
  },
  {
    title: "Border",
    content: <TokensTable categories={["line-style"]} type="core" />,
  },
];

const TokensPage = () => (
  <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Core Tokens" />
      </DxcFlex>
    </PageHeading>
    <DxcQuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/foundations/tokens/CoreTokenList.tsx" />
  </DxcFlex>
);

export default TokensPage;
