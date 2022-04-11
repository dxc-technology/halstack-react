import PageHeading from "../../common/TabsPageLayout";

const RadioGroupPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/radio-group" },
    { label: "Specifications", path: "/components/radio-group/specifications" },
  ];

  return (
    <PageHeading
      title="Radio Group"
      description="A radio group let the user make a mutually exclusive selection from a group of options."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default RadioGroupPageHeading;
