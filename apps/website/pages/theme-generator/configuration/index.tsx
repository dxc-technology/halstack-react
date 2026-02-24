import Head from "next/head";
import ThemeGeneratorPage from "screens/theme-generator/ThemeGeneratorConfigPage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Theme generator — Halstack Design System</title>
      </Head>
      <ThemeGeneratorPage />
    </>
  );
};

export default Index;
