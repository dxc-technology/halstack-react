import { DxcButton, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const ComponentPreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-xxl);
`;

export const ComponentPreview = ({
  component,
  onDelete,
}: {
  component: { name: string; preview: ReactNode };
  onDelete: () => void;
}) => {
  return (
    <ComponentPreviewWrapper>
      <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-s)">
        <DxcHeading level={5} text={component.name} />
        {component.preview}
      </DxcFlex>
      <DxcButton icon="delete" mode="tertiary" semantic="error" onClick={onDelete} />
    </ComponentPreviewWrapper>
  );
};
