import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const PasswordInputPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/password-input" },
    { label: "Usage", path: "/components/password-input/usage" },
    {
      label: "Specifications",
      path: "/components/password-input/specifications",
    },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Password Input" />
          <DxcParagraph>
            The password input component is very much like the text input, with the difference that their value is
            obscured by default (by replacing its characters with dot symbol ("•"), and the mask can be toggled on/off
            using the show and hide component action.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default PasswordInputPageHeading;
