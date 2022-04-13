import PageHeading from "../../common/TabsPageLayout";

const FooterPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/footer" },
    { label: "Specifications", path: "/components/footer/specifications" },
  ];

  return (
    <PageHeading
      title="Footer"
      description="Footers are a secondary element in a web page because they usually appear at
      the bottom and it is the last thing that the user interacts with. But the
      presence of the footer must be designed in every application and be part of it
      (consumer or back-office) as it is a key layout element to the overall
      experience. Is a choice of the designer to either leave the footer visible by
      default or push it down, depending on the use case."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default FooterPageHeading;
