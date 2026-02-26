import {
  DxcContainer,
  DxcFlex,
  DxcHeading,
  DxcTypography,
  DxcAvatar,
  DxcDivider,
  DxcInset,
} from "@dxc-technology/halstack-react";

const LandingStep = ({ index, title, description }: { index: number; title: string; description: string }) => {
  return (
    <DxcContainer width="224px">
      <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-l)">
        <DxcFlex>
          <DxcAvatar label={`${index}`} color="primary" size="large" />
        </DxcFlex>
        <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-xs)">
          <DxcHeading text={title} level={5} />
          <DxcTypography textAlign="center" fontSize="var(--typography-body-s)">
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
          <>
            <LandingStep key={index} index={index + 1} title={step.title} description={step.description} />
            {index !== steps.length - 1 && (
              <DxcContainer width="48px">
                <DxcFlex fullHeight alignItems="center" justifyContent="center">
                  <DxcDivider />
                </DxcFlex>
              </DxcContainer>
            )}
          </>
        ))}
      </DxcFlex>
    </DxcInset>
  );
};
export default LandingSteps;
