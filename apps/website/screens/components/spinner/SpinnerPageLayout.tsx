import { DxcParagraph, DxcFlex } from "@repo/ui";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const SpinnerPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/spinner" },
    { label: "Usage", path: "/components/spinner/usage" },
    { label: "Specifications", path: "/components/spinner/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Spinner" />
          <DxcParagraph>
            Loading spinner is a waiting indicator in the user interface to communicate users an ongoing proccess.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default SpinnerPageHeading;
