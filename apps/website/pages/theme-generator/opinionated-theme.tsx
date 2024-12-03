import Head from "next/head";
import ThemeGeneratorPage from "screens/theme-generator/ThemeGenerator";

const ThemeGenerator = () => {
  return (
    <>
      <Head>
        <title>Opinionated theme generator — Halstack Design System</title>
      </Head>
      <ThemeGeneratorPage />
    </>
  );
};

export default ThemeGenerator;
