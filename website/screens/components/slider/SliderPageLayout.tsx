import PageHeading from "../../common/TabsPageLayout";

const SliderPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/slider" },
    { label: "Specifications", path: "/components/slider/specifications" },
  ];

  return (
    <PageHeading
      title="Slider"
      description="Slider control allows users to select a specific value or a range of values from a set. Usually, slider presents a relatively large dataset and the way that the user interacts with it is helpful to explore the multiple options swiftly."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default SliderPageHeading;
