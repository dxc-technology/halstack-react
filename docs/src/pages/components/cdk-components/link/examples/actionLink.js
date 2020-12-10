import { DxcLink } from "@dxc-technology/halstack-react";
import twitterLogoPath from "./images/twitter.svg";

const code = `() => {
  return (
    <p>
        This is a <DxcLink
            onClick={() => {
              console.log("click");
            }}
            text="link with action"
        >
        </DxcLink>.
    </p>
  );
}`;

const scope = {
  DxcLink
};

export default { code, scope };
