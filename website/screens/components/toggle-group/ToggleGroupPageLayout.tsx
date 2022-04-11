import PageHeading from "../../common/TabsPageLayout";

const ToggleGroupPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/toggle-group" },
    { label: "Specifications", path: "/components/toggle-group/specifications" },
  ];

  return (
    <PageHeading
      title="Toggle Group"
      description="Toggle buttons can be used to put together related options that share a common attribute modification.
      It allows the user to switch from one selected option to another in the same control, having one option selected at a time. Also, there can be another variation that allows selecting multiple options from the current toggle group."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default ToggleGroupPageHeading;
