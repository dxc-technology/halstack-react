import PageHeading from "../../common/TabsPageLayout";

const ChipPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/chip" },
    { label: "Specifications", path: "/components/chip/specifications" },
  ];

  return (
    <PageHeading
      title="Chip"
      description="Chips are elements that represent status, complementary information, or association between elements."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default ChipPageHeading;
