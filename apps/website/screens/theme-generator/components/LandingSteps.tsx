import { DxcContainer, DxcFlex, DxcTypography, DxcAvatar, DxcDivider, DxcInset } from "@dxc-technology/halstack-react";
import React from "react";

const LandingStep = ({ index, title, description }: { index: number; title: string; description: string }) => {
  return (
    <DxcContainer width="224px">
      <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-l)">
        <DxcAvatar label={`${index}`} color="primary" size="large" />
        <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-xs)">
          <DxcTypography fontWeight="var(--typography-title-bold)">{title}</DxcTypography>
          <DxcTypography textAlign="center" fontSize="var(--typography-body-m)">
            {description}
          </DxcTypography>
        </DxcFlex>
      </DxcFlex>
    </DxcContainer>
  );
};

const LandingSteps = ({ steps }: { steps: { title: string; description: string }[] }) => {
  return (
    <DxcInset bottom="var(--spacing-gap-xxl)">
      <DxcFlex gap="var(--spacing-gap-l)" wrap="wrap" justifyContent="center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <LandingStep index={index + 1} title={step.title} description={step.description} />
            {index !== steps.length - 1 && (
              <DxcContainer width="48px">
                <DxcFlex fullHeight alignItems="center" justifyContent="center">
                  <DxcDivider color="lightGrey" />
                </DxcFlex>
              </DxcContainer>
            )}
          </React.Fragment>
        ))}
      </DxcFlex>
    </DxcInset>
  );
};
export default LandingSteps;
