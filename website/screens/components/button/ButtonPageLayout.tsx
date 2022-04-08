import PageHeading from "../../common/TabsPageLayout";

const ButtonPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/button" },
    { label: "Specifications", path: "/components/button/specifications" },
  ];

  return (
    <PageHeading
      title="Button"
      description="Buttons are basic interface elements that initialize an action or function when the user interacts with them. The appearance of the button should suggest the user takes an action that leads to different scenarios.
      These elements that reinforce to the user the necessity to interact are called CTA (Call to Action) components, which basically are designed to capture user attention and improve the user experience within the application."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default ButtonPageHeading;
