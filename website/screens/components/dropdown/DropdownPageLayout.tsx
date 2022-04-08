import PageHeading from "../../common/TabsPageLayout";

const DropdownPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/dropdown" },
    { label: "Specifications", path: "/components/dropdown/specifications" },
  ];

  return (
    <PageHeading
      title="Dropdown"
      description="The use of dropdowns has its advantages but it depends on the screen support. Dropdowns are a standard widget, so the users know how to interact with them. The options available in a dropdown component are static, so this prevents from erroneous data entered by the user since it only shows a range of correct values for that input."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default DropdownPageHeading;
