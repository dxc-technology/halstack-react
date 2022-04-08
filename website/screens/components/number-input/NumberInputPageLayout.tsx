import PageHeading from "../../common/TabsPageLayout";

const NumberInputPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Usage", path: "/components/number-input" },
    {
      label: "Specifications",
      path: "/components/number-input/specifications",
    },
  ];

  return (
    <PageHeading
      title="Number Input"
      description="The number input is a text input component that only allows numerical values and it has controls for incrementing or decrementing them."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default NumberInputPageHeading;
