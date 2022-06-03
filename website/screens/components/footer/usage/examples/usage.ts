import { DxcFooter, DxcInset } from "@dxc-technology/halstack-react";
import { linkedinLogo, twitterLogo, facebookLogo } from "./icons";

const code = `() => {
  const social = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logo: linkedinLogo,
    },
    {
      href: "https://twitter.com/dxctechnology",
      logo: twitterLogo,
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logo: facebookLogo,
    },
  ];
  const bottom = [
    {
      href: "#",
      text: "Legal",
    },
    {
      href: "#",
      text: "Privacy",
    },
    {
      href: "#",
      text: "Feedback",
    },
  ];
  return (
    <DxcInset space="large">
      <DxcFooter
        bottomLinks={bottom}
        socialLinks={social}
        copyright="© DXC Technology Company"
      ></DxcFooter>
    </DxcInset>
  );
}`;

const scope = {
  DxcFooter,
  linkedinLogo,
  twitterLogo,
  facebookLogo,
  DxcInset,
};

export default { code, scope };
