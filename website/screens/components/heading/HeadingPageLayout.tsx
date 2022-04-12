import PageHeading from "../../common/TabsPageLayout";

const HeadingPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/heading" },
    { label: "Specifications", path: "/components/heading/specifications" },
  ];

  return (
    <PageHeading
      title="Heading"
      description="Heading component is an essential element that contributes to define a great hierarchy within the application. It helps to give semantic meaning to the content as well as contributing to define a good structure for SEO (search engine optimization). The implementation will rely on the use of HTML tags."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default HeadingPageHeading;
