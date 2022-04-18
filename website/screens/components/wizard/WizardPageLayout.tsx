import PageHeading from "../../common/TabsPageLayout";

const WizardPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/wizard" },
    { label: "Specifications", path: "/components/wizard/specifications" },
  ];

  return (
    <PageHeading
      title="Wizard"
      description="Wizard represents a stepped workflow as a form of linear and mandatory progression through a defined process with several bullet points where the user need to interact with the content of each step during the workflow."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default WizardPageHeading;
