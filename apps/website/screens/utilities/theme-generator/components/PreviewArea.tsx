import { DxcButton, DxcFlex, DxcHeading, DxcParagraph, HalstackProvider } from "@dxc-technology/halstack-react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { ComponentPreview } from "./ComponentPreview";
import type { CssColor } from "@adobe/leonardo-contrast-colors";

const PreviewWrapper = styled.div`
  min-height: 160px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-gap-s);
  align-self: stretch;
  padding: var(--spacing-padding-l);

  border: var(--border-width-s) var(--border-style-outline) var(--border-color-neutral-dark);
  border-radius: var(--border-radius-m);
`;

export const PreviewArea = ({
  components,
  setActiveComponents,
  customTheme,
}: {
  components: { name: string; preview: ReactNode }[];
  setActiveComponents: React.Dispatch<React.SetStateAction<{ name: string; preview: ReactNode }[]>>;
  customTheme: Record<string, CssColor>;
}) => {
  const handleRemoveComponent = (name: string) => {
    setActiveComponents((prev) => prev.filter((component) => component.name !== name));
  };

  const handleRemoveAll = () => {
    setActiveComponents([]);
  };

  return (
    <PreviewWrapper>
      <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-xxl)" alignSelf="stretch">
        {components.length === 0 ? (
          <DxcParagraph>Click to add the components from the left panel to preview it here.</DxcParagraph>
        ) : (
          <>
            <DxcFlex justifyContent="space-between" alignItems="center" alignSelf="stretch">
              <DxcHeading level={4} text={`Active components (${components.length})`} />
              <DxcButton mode="tertiary" label="Remove all" icon="delete" semantic="error" onClick={handleRemoveAll} />
            </DxcFlex>

            <HalstackProvider opinionatedTheme={customTheme}>
              {components.map((component) => (
                <ComponentPreview
                  key={component.name}
                  component={component}
                  onDelete={() => handleRemoveComponent(component.name)}
                />
              ))}
            </HalstackProvider>
          </>
        )}
      </DxcFlex>
    </PreviewWrapper>
  );
};
