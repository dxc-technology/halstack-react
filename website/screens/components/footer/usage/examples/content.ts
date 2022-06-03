import {
  DxcFooter,
  DxcRow,
  DxcStack,
  DxcInset,
} from "@dxc-technology/halstack-react";
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
      >
        <div style={{ marginTop: "16px" }}>
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
                  lineHeight: "1.5rem",
                }}
              >
                DXC Technology
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                  lineHeight: "1.5rem",
                }}
              >
                Application Services
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                  lineHeight: "1.5rem",
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
                  lineHeight: "1.5rem",
                }}
              >
                Company Overview
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                  lineHeight: "1.5rem",
                }}
              >
                Our Mission & Values
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                  lineHeight: "1.5rem",
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
                  lineHeight: "1.5rem",
                }}
              >
                Healthcare
              </div>
              <div
                style={{
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                  lineHeight: "1.5rem",
                }}
              >
                Life science
              </div>
            </DxcStack>
          </DxcRow>
        </div>
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
