import PageHeading from "../../common/TabsPageLayout";

const PasswordInputPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Usage", path: "/components/password-input" },
    {
      label: "Specifications",
      path: "/components/password-input/specifications",
    },
  ];

  return (
    <PageHeading
      title="Password Input"
      description='The password input component is very much like the text input, with the difference that their value is obscured by default (by replacing its characters with dot symbol ("•"), and the mask can be toggled on/off using the show and hide component action.'
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default PasswordInputPageHeading;
