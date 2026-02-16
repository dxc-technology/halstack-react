import { ReactNode } from "react";
import { DxcFlex } from "@dxc-technology/halstack-react";

const ScaledPreviewContainer = ({
  scale = 0.7,
  width = 1920,
  height = 1300,
  background = "#fff",
  children,
}: {
  scale?: number;
  width?: number;
  height?: number;
  background?: string;
  children: ReactNode;
}) => {
  return (
    <DxcFlex direction="column">
      <div
        style={{
          width: "100%",
          maxWidth: `${width * scale}px`,
          height: `${height * scale}px`,
          overflow: "hidden",
          background,
        }}
      >
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            background,
            isolation: "isolate",
          }}
        >
          {children}
        </div>
      </div>
    </DxcFlex>
  );
};

export default ScaledPreviewContainer;
