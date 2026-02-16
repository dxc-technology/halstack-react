import { DxcBadge, DxcButton, DxcContainer, DxcFileInput, DxcFlex, DxcWizard } from "@dxc-technology/halstack-react";
import styled from "@emotion/styled";
import { ColorCard } from "./ColorCard";
import { useThemeGenerator, Color } from "../context/ThemeGeneratorContext";

const ThemeSettingsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-gap-ml);
`;

const ColorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-gap-xs);
  align-self: stretch;
`;

const BrandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-gap-l);
  align-self: stretch;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const RightButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-m);
`;

const steps = [{ label: "Core colors" }, { label: "Branding" }, { label: "Export" }];

export const ThemeSettings = () => {
  const { currentStep, setCurrentStep, colors, updateColor, getLogoValue, updateLogoValue } = useThemeGenerator();

  return (
    <ThemeSettingsWrapper>
      <DxcContainer width="100%">
        <DxcWizard steps={steps} currentStep={currentStep} onStepClick={(i) => setCurrentStep(i as 0 | 1 | 2)} />
      </DxcContainer>

      <>
        {currentStep === 0 ? (
          <ColorWrapper>
            {colors.map((color: Color) => (
              <ColorCard
                key={color.name}
                label={color.name}
                color={color.value}
                onChange={(newColor) => {
                  updateColor(color.name, newColor);
                }}
              />
            ))}
          </ColorWrapper>
        ) : currentStep === 1 ? (
          <BrandingWrapper>
            <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-s)">
              <DxcFileInput
                label="Main logo"
                helperText="Used as the primary brand logo across the application."
                mode="filedrop"
                accept="image/*"
                showPreview
                multiple={false}
                callbackFile={(files) => updateLogoValue("mainLogo", files)}
                value={getLogoValue("mainLogo")}
                maxSize={4718592}
              />
              <DxcBadge icon="info" color="neutral" label="Maximum image size: 4.5MB" />
            </DxcFlex>

            <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-s)">
              <DxcFileInput
                label="Footer logo"
                helperText="Used as the brand logo in application footer."
                mode="filedrop"
                accept="image/*"
                showPreview
                multiple={false}
                callbackFile={(files) => updateLogoValue("footerLogo", files)}
                value={getLogoValue("footerLogo")}
                maxSize={4718592}
              />
              <DxcBadge icon="info" color="neutral" label="Maximum image size: 4.5MB" />
            </DxcFlex>

            <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-s)">
              <DxcFileInput
                label="Favicon"
                helperText="Used for browser tabs and bookmark."
                mode="filedrop"
                accept="image/*"
                showPreview
                multiple={false}
                callbackFile={(files) => updateLogoValue("favicon", files)}
                value={getLogoValue("favicon")}
                maxSize={4718592}
              />
              <DxcBadge icon="info" color="neutral" label="Maximum image size: 4.5MB" />
            </DxcFlex>
          </BrandingWrapper>
        ) : (
          <></>
        )}
      </>

      <ButtonsWrapper>
        <DxcButton label="Import theme" icon="upload" mode="tertiary" />
        <RightButtonsWrapper>
          <DxcButton label="Reset" icon="refresh" mode="secondary" />
          <DxcButton label="Generate tokens" icon="model_training" />
        </RightButtonsWrapper>
      </ButtonsWrapper>
    </ThemeSettingsWrapper>
  );
};
