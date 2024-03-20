import Head from "next/head";
import IconographyCodePage from "../../../screens/principles/iconography/code/IconographyCodePage";
import IconographyPageLayout from "../../../screens/principles/iconography/IconographyPageLayout";
import { ReactElement } from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Iconography — Halstack Design System</title>
      </Head>
      <IconographyCodePage />
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <IconographyPageLayout>{page}</IconographyPageLayout>;
};

export default Index;
