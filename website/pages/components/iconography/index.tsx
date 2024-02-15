import Head from "next/head";
import Icone { ReactElement } from "react";
import IconographyPageLayout from "../../../screens/components/iconography/IconographyPageLayout";
import IconographyCodePage from "../../../screens/components/iconography/code/IconographyCodePage";

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
