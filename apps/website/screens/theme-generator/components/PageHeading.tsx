import { DxcFlex, DxcHeading, DxcParagraph, DxcContainer } from "@dxc-technology/halstack-react";

interface PageHeadingProps {
  title: string;
  subtitle: string;
}

export const PageHeading = ({ title, subtitle }: PageHeadingProps) => (
  <DxcContainer width="711px">
    <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-xs)">
      <DxcHeading level={3} text={title} />
      <DxcParagraph>{subtitle}</DxcParagraph>
    </DxcFlex>
  </DxcContainer>
);
