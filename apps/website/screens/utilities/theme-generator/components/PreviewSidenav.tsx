import { DxcButton, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";
import styled from "@emotion/styled";
import ApplicationPreview from "../previews/ApplicationPreview";
import { useThemeGenerator } from "../context/ThemeGeneratorContext";

const SidenavWrapper = styled.div`
  width: 300px;
  min-height: 600px;
  padding: var(--spacing-padding-l);
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-m);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-m);
`;

const PreviewItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-xs);
  padding: var(--spacing-padding-m);
  border: var(--border-width-s) solid var(--color-grey-300);
  border-radius: var(--border-radius-s);
  background-color: var(--color-white);
`;

export const PreviewSidenav = () => {
  const { activeComponents, setActiveComponents } = useThemeGenerator();

  const handleAddApplicationPreview = () => {
    const isAlreadyActive = activeComponents.some((component) => component.name === "Application Layout");

    if (!isAlreadyActive) {
      const newComponent = {
        name: "Application Layout",
        preview: <ApplicationPreview />,
      };

      setActiveComponents((prev) => [...prev, newComponent]);
    }
  };

  const isApplicationPreviewActive = () => {
    return activeComponents.some((component) => component.name === "Application Layout");
  };

  return (
    <SidenavWrapper>
      <DxcHeading level={3} text="Preview Components" />

      <DxcFlex direction="column" gap="var(--spacing-gap-s)">
        <PreviewItemWrapper>
          <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
            <DxcHeading level={5} text="Application Layout" />
            <p style={{ margin: 0, fontSize: "14px", color: "var(--color-grey-700)" }}>
              Complete application with header, footer, navigation, and data tables
            </p>
          </DxcFlex>

          <DxcButton
            label={isApplicationPreviewActive() ? "Added" : "Add Preview"}
            icon={isApplicationPreviewActive() ? "check" : "add"}
            mode={isApplicationPreviewActive() ? "secondary" : "primary"}
            size={{ width: "fillParent" }}
            onClick={handleAddApplicationPreview}
            disabled={isApplicationPreviewActive()}
          />
        </PreviewItemWrapper>
      </DxcFlex>
    </SidenavWrapper>
  );
};
