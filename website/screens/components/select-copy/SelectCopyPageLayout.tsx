import PageHeading from "../../common/TabsPageLayout";

const SelectPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/select-copy" },
    { label: "Specifications", path: "/components/select-copy/specifications" },
    { label: "Examples", path: "/components/select-copy/examples" },
    { label: "Props", path: "/components/select-copy/props" },
  ];

  return (
    <PageHeading
      title="Select Copy"
      description="The select component allows users to make single or multiple selections from a pre-defined list of options."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default SelectPageHeading;
