import { DxcButton } from "@dxc-technology/halstack-react";
import twitterLogoPath from "./images/twitter.svg";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <div>
      <DxcButton
        label="Primary Button"
        onClick={onClick}
        iconSrc={twitterLogoPath}
        margin="medium"
      />
      <DxcButton
        label="Primary Button"
        onClick={onClick}
        iconSrc={twitterLogoPath}
        iconPosition="after"
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcButton,
  twitterLogoPath
};

export default { code, scope };
