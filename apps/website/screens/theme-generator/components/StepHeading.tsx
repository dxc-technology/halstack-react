import { DxcFlex, DxcHeading, DxcContainer, DxcTypography } from "@dxc-technology/halstack-react";

interface PageHeadingProps {
  title: string;
  subtitle: string;
}

const StepHeading = ({ title, subtitle }: PageHeadingProps) => (
  <DxcContainer width="100%" maxWidth="711px">
    <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-xs)">
      <DxcHeading level={3} text={title} />
      <DxcTypography as="p" textAlign="center">
        {subtitle}
      </DxcTypography>
    </DxcFlex>
  </DxcContainer>
);

export default StepHeading;
