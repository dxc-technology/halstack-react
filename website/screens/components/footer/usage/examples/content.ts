import {
  DxcFooter,
  DxcRow,
  DxcStack,
  DxcInset,
} from "@dxc-technology/halstack-react";
import { linkedinLogo, twitterLogo, facebookLogo } from "./Icons";

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
    <DxcInset space="2rem">
      <DxcFooter
        bottomLinks={bottom}
        socialLinks={social}
        copyright="© DXC Technology Company"
      >
        <DxcInset top="1.5rem">
          <DxcRow gutter="medium">
            <DxcStack gutter="xxxsmall">
              <div
                style={{
                  color: "#0095ff",
                  marginBottom: "0.25rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                Services
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                DXC Technology
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                Application Services
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                Business Process Services
              </div>
            </DxcStack>
            <DxcStack gutter="xxxsmall">
              <div
                style={{
                  color: "#0095ff",
                  marginBottom: "0.25rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                About us
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                Company Overview
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                Our Mission & Values
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                Our History
              </div>
            </DxcStack>
            <DxcStack gutter="xxxsmall">
              <div
                style={{
                  color: "#0095ff",
                  marginBottom: "0.25rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                Industries
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                Healthcare
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                Life science
              </div>
            </DxcStack>
          </DxcRow>
        </DxcInset>
      </DxcFooter>
    </DxcInset>
  );
}`;

const scope = {
  DxcFooter,
  DxcRow,
  DxcStack,
  DxcInset,
  linkedinLogo,
  twitterLogo,
  facebookLogo,
};

export default { code, scope };
