import { DxcContainer, DxcFlex } from "@dxc-technology/halstack-react";

const ReviewSectionContainer = ({ title, children }: { title: React.ReactNode; children: React.ReactNode }) => {
  return (
    <DxcContainer
      boxSizing="border-box"
      width="100%"
      maxWidth="1112px"
      padding="var(--spacing-padding-ml)"
      borderRadius="var(--border-radius-m)"
      background={{ color: "var(--color-bg-neutral-lightest)" }}
      boxShadow="var(--shadow-100)"
    >
      <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
        {title}
        {children}
      </DxcFlex>
    </DxcContainer>
  );
};

export default ReviewSectionContainer;
