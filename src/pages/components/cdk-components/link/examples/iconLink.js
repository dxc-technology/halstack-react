import { DxcLink } from "@diaas/dxc-react-cdk";
import twitterLogoPath from "./images/twitter.svg";

const code = `() => {
  return (
    <p>
        This is a text with an <DxcLink
            href="#"
            theme="light"
            iconPosition="after"
            iconSrc={twitterLogoPath}
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
