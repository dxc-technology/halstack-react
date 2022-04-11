import PageHeading from "../../common/TabsPageLayout";

const CardPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/card" },
    { label: "Specifications", path: "/components/card/specifications" },
  ];

  return (
    <PageHeading
      title="Card"
      description="Cards are a container of information, actions and data with a hierarchy to make easy scanning the content. A card can be defined as a unit, so it has all the information within it, making the component useful to show images, text, and interactive elements. The structure of the card can be seen as blocks, each block is optional to be displayed but the overall element should make a cohesive design, even if it includes text, images or other elements."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default CardPageHeading;
