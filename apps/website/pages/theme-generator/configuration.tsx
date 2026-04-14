import Head from "next/head";
import ThemeGeneratorConfigPage from "screens/theme-generator/ThemeGeneratorConfigPage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Theme generator — Halstack Design System</title>
      </Head>
      <ThemeGeneratorConfigPage />
    </>
  );
};

export default Index;
