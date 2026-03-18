import Head from "next/head";
import ThemeGeneratorUserGuidePage from "screens/theme-generator/ThemeGeneratorUserGuidePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Theme generator — Halstack Design System</title>
      </Head>
      <ThemeGeneratorUserGuidePage />
    </>
  );
};

export default Index;
