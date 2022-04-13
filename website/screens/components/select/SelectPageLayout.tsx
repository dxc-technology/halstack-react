import PageHeading from "../../common/TabsPageLayout";

const SelectPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/select" },
    { label: "Specifications", path: "/components/select/specifications" },
  ];

  return (
    <PageHeading
      title="Select"
      description="The select component allows users to make single or multiple selections from a pre-defined list of options."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default SelectPageHeading;
