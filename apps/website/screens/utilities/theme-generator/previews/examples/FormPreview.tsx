import {
  DxcButton,
  DxcContainer,
  DxcFlex,
  DxcTextInput,
  DxcHeading,
  DxcTypography,
  DxcApplicationLayout,
  DxcAvatar,
  DxcBadge,
  DxcInset,
} from "@dxc-technology/halstack-react";
import { Logos } from "screens/theme-generator/types";

const FormPreview = ({ logos }: { logos: Logos }) => {
  return (
    <DxcApplicationLayout
      logo={logos.mainLogo && logos.mainLogo[0] ? { src: logos.mainLogo[0].preview!, alt: "Main logo" } : undefined}
      footer={
        <DxcApplicationLayout.Footer
          mode="reduced"
          logo={
            logos.footerReducedLogo && logos.footerReducedLogo[0]
              ? { src: logos.footerReducedLogo[0].preview!, alt: "Footer reduced logo" }
              : undefined
          }
        />
      }
      header={
        <DxcApplicationLayout.Header
          appTitle={"App title"}
          navItems={[
            {
              label: "Policies",
              icon: "description",
              items: [
                { label: "All Policies", icon: "list", selected: true },
                { label: "Active", icon: "check_circle" },
                { label: "Pending", icon: "schedule" },
                { label: "Expired", icon: "cancel" },
              ],
              badge: <DxcBadge color="info" label="5" />,
            },
            { label: "Claims", icon: "assignment" },
            { label: "Documents", icon: "folder" },
            { label: "Payments", icon: "payment" },
          ]}
          sideContent={
            <>
              <DxcButton icon="settings" title="Settings" mode="tertiary" size={{ height: "medium" }} />
              <DxcAvatar label="JD" primaryText="John Doe" secondaryText="john.doe@example.com" />
            </>
          }
        />
      }
      sidenav={
        <DxcApplicationLayout.Sidenav
          navItems={[
            {
              label: "Sidenav Content",
              icon: "tab",
              selected: true,
            },
            {
              label: "Sidenav Content",
              icon: "capture",
            },
            {
              label: "Sidenav Content",
              icon: "folder",
            },
            {
              label: "Sidenav Content",
              icon: "picture_in_picture_mobile",
            },
            {
              label: "Sidenav Content",
              icon: "picture_as_pdf",
            },
          ]}
        />
      }
    >
      <DxcApplicationLayout.Main>
        <DxcInset space="var(--spacing-padding-m)">
          <DxcFlex direction="column" gap="1rem">
            <DxcHeading level={5} text="Simple Form Composition" />
            <DxcContainer
              padding="2rem"
              background={{ color: "color_white" }}
              borderRadius="12px"
              border={{ color: "#e8e8e8", width: "2px", style: "solid" }}
              boxShadow="0 2px 8px rgba(0,0,0,0.1)"
            >
              <DxcFlex direction="column" gap="1.5rem">
                <DxcTypography fontSize="1.125rem" fontWeight="600">
                  Contact Information
                </DxcTypography>

                <DxcFlex direction="column" gap="1rem">
                  <DxcTextInput
                    label="Full Name"
                    placeholder="Enter your full name..."
                    helperText="Please provide your complete name"
                  />
                  <DxcTextInput
                    label="Email Address"
                    placeholder="your@email.com"
                    helperText="We'll use this to contact you"
                  />
                  <DxcFlex justifyContent="flex-end" gap="1rem">
                    <DxcButton label="Clear" mode="secondary" onClick={() => {}} />
                    <DxcButton label="Submit Form" onClick={() => {}} />
                  </DxcFlex>
                </DxcFlex>
              </DxcFlex>
            </DxcContainer>
          </DxcFlex>
        </DxcInset>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
};

export default FormPreview;
