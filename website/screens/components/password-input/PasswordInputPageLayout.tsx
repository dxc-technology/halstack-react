import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const PasswordInputPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Code", path: "/components/password-input" },
    { label: "Usage", path: "/components/password-input/usage" },
    {
      label: "Specifications",
      path: "/components/password-input/specifications",
    },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Password Input" status="Ready" />
          <DxcText as="p">
            The password input component is very much like the text input, with
            the difference that their value is obscured by default (by replacing
            its characters with dot symbol ("•"), and the mask can be toggled
            on/off using the show and hide component action.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default PasswordInputPageHeading;
