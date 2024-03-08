import {
  DxcHeading,
  DxcParagraph,
  DxcFlex,
  DxcLink,
} from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import Link from "next/link";


const IconographyPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/principles/iconography" },
    { label: "Usage", path: "/principles/iconography/usage" },
  ];
  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading level={1} text="Iconography" weight="bold"></DxcHeading>
          <DxcParagraph>
            This section explains the usage and shows examples of the iconography we use in Halstack Design System.
          </DxcParagraph>
          <DxcParagraph>
          Icons are used to visually represent commands, common actions, and locations.
          o facilitate providing users with a standardized and more widely adopted icon library, the Halstack Design System leverages the {" "}
          <Link
            href="https://fonts.google.com/icons"
            passHref
            legacyBehavior
          >
            <DxcLink>Material Symbols</DxcLink>
          </Link>{" "}
          con library. This library contains over three thousand open source symbols implemented as an icon font that is maintained by Google as part of the {" "}
          <Link
            href="https://m2.material.io/design/iconography/system-icons.html#design-principles"
            passHref
            legacyBehavior
          >
            <DxcLink>Material Design System</DxcLink>
          </Link>{" "} that consolidates over three thousand different icon types and variants.
          </DxcParagraph>
          <DxcParagraph>
          For more information on what icons are currently available in Halstack, we are currently maintaining a subset of the material icons on our {" "}
          <Link
            href="https://m2.material.io/design/iconography/system-icons.html#design-principles"
            passHref
            legacyBehavior
          >
            <DxcLink>Halstack Design Library Iconography</DxcLink>
          </Link>{" "}  page. 
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default IconographyPageHeading;
