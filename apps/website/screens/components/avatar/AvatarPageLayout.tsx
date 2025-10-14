import ComponentHeading from "@/common/ComponentHeading";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import { ReactNode } from "react";

const AvatarPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/avatar" },
    { label: "Code", path: "/components/avatar/code" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Avatar" />
          <DxcParagraph>
            The Avatar component is a key visual element used to identify users, teams, or entities across the
            interface. It helps create a recognizable and consistent user experience by visually representing people or
            objects through images, icons, or initials.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default AvatarPageHeading;
