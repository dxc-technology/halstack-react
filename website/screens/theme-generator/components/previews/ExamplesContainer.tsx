import { DxcFlex } from "@dxc-technology/halstack-react";

type ExamplesContainerProps = {
  children: React.ReactNode;
};

const ExamplesContainer = ({ children }: ExamplesContainerProps) => (
  <DxcFlex direction="column" gap="2.5rem">
    {children}
  </DxcFlex>
);

export default ExamplesContainer;
