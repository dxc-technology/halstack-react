import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import DxcQuickNavContainer from "@/common/QuickNavContainer";
import { DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";
import TokensTable from "./tables/TokensTable";

const sections = [
  {
    title: "Border",
    subSections: [
      { title: "Radius", content: <TokensTable categories={["border-radius"]} type="alias" /> },
      { title: "Style", content: <TokensTable categories={["border-style"]} type="alias" /> },
      { title: "Width", content: <TokensTable categories={["border-width"]} type="alias" /> },
    ],
  },
  {
    title: "Color",
    subSections: [
      { title: "Border", content: <TokensTable categories={["border-color"]} type="alias" /> },
      { title: "Background", content: <TokensTable categories={["color-bg"]} type="alias" /> },
      { title: "Shadow", content: <TokensTable categories={["shadow-dark", "shadow-light"]} type="alias" /> },
      { title: "Text", content: <TokensTable categories={["color-fg"]} type="alias" /> },
    ],
  },
  {
    title: "Dimensions",
    subSections: [
      { title: "Height", content: <TokensTable categories={["height"]} type="alias" /> },
      {
        title: "Shadow",
        content: <TokensTable categories={["shadow-high", "shadow-mid", "shadow-low"]} type="alias" />,
      },
      { title: "Spacing", content: <TokensTable categories={["spacing-gap", "spacing-padding"]} type="alias" /> },
    ],
  },
  {
    title: "Typography",
    subSections: [
      { title: "Body", content: <TokensTable categories={["typography-body"]} type="alias" /> },
      {
        title: "Heading",
        content: <TokensTable categories={["typography-heading"]} type="alias" />,
      },
      { title: "Helper text", content: <TokensTable categories={["typography-helper"]} type="alias" /> },
      { title: "Label", content: <TokensTable categories={["typography-label"]} type="alias" /> },
      {
        title: "Link",
        content: <TokensTable categories={["typography-link"]} type="alias" />,
      },
      { title: "Title", content: <TokensTable categories={["typography-title"]} type="alias" /> },
      { title: "Font family", content: <TokensTable categories={["typography-font"]} type="alias" /> },
    ],
  },
];

const TokensPage = () => (
  <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Alias Tokens" />
      </DxcFlex>
    </PageHeading>
    <DxcQuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/foundations/tokens/AliasTokenList.tsx" />
  </DxcFlex>
);

export default TokensPage;
