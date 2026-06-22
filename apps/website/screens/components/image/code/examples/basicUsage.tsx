import { DxcImage, DxcInset } from "@dxc-technology/halstack-react";
import woodenDockImage from "../images/wooden_dock.png";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcImage 
        alt="Wooden dock on a lake" 
        caption="Wooden dock on a beautifully landscaped lake."
        width="100%"
        src={woodenDockImage.src} 
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcImage,
  DxcInset,
  woodenDockImage,
};

export default { code, scope };
