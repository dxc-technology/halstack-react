import { DxcLink } from "@dxc-technology/halstack-react";
import twitterLogoPath from "./images/twitter.svg";

const code = `() => {
  return (
    <p>
        This is a text with an <DxcLink
            iconPosition="after"
            iconSrc={twitterLogoPath}
            onClick={() => {
              console.log("click");
            }}
            text="Icon after"
        >
        </DxcLink> the link.
    </p>
  );
}`;

const scope = {
  DxcLink,
  twitterLogoPath
};

export default { code, scope };
