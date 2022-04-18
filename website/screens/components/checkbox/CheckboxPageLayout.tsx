import PageHeading from "../../common/TabsPageLayout";

const CheckboxPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/checkbox" },
    { label: "Specifications", path: "/components/checkbox/specifications" },
  ];

  return (
    <PageHeading
      title="Checkbox"
      description="Checkboxes are inputs that offer to the user the possibility to select one or more options from a range of attributes."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default CheckboxPageHeading;
