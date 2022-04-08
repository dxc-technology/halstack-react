import PageHeading from "../../common/TabsPageLayout";

const BoxPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/box" },
    { label: "Specifications", path: "/components/box/specifications" },
  ];

  return (
    <PageHeading
      title="Box"
      description="There are different ways to organise the content on the webpage to facilitate
      the user according to his nature of interaction with the content like forms,
      tables, lists etc. One of the best ways to organize the webpage is by using
      groups of related content, this can be achieved by using a dedicated Box
      component."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default BoxPageHeading;
