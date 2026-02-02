import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import DxcQuickNavContainer from "@/common/QuickNavContainer";
import { DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";
import TokensTable from "./tables/TokensTable";

const sections = [
  {
    title: "Colors",
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
