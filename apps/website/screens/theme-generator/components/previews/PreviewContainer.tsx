import { DxcFlex } from "@dxc-technology/halstack-react";
import { ReactNode } from "react";

type PreviewContainerProps = {
  children: ReactNode;
};

const PreviewContainer = ({ children }: PreviewContainerProps) => (
  <DxcFlex direction="column" gap="3rem">
    {children}
  </DxcFlex>
);

export default PreviewContainer;
