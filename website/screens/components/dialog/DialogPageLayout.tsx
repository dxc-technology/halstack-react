import PageHeading from "../../common/TabsPageLayout";

const DialogPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/dialog" },
    { label: "Specifications", path: "/components/dialog/specifications" },
  ];

  return (
    <PageHeading
      title="Dialog"
      description="A modal dialog is a message box or child window that requires user interaction before returning to the parent window. These boxes appear on top of the open parent window that is currently displayed on the screen."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default DialogPageHeading;
