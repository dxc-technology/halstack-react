import PageHeading from "../../common/TabsPageLayout";

const SwitchPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/switch" },
    { label: "Specifications", path: "/components/switch/specifications" },
  ];

  return (
    <PageHeading
      title="Switch"
      description="Switch toggles are elements that can get two simple states, each of them has an impact on the system and it can be switched on or off, there are no more options.
      If the switch toggle is on one state, the action to change it will modify to value of the element to the contrary."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default SwitchPageHeading;
