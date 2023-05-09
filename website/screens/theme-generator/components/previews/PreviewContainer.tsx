import { DxcFlex } from "@dxc-technology/halstack-react";

type PreviewContainerProps = {
  children: React.ReactNode;
};

const PreviewContainer = ({ children }: PreviewContainerProps) => (
  <DxcFlex direction="column" gap="3rem">
    {children}
  </DxcFlex>
);

export default PreviewContainer;
