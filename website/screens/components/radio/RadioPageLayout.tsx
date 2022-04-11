import PageHeading from "../../common/TabsPageLayout";

const RadioPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/radio" },
    { label: "Specifications", path: "/components/radio/specifications" },
  ];

  return (
    <PageHeading
      title="Radio Button"
      description="Radio buttons are UI elements that let the user make a mutually exclusive
      selection from a group of options."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default RadioPageHeading;
