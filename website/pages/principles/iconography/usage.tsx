import Head from "next/head";
import { ReactElement } from "react";
import IconographyUsagePage from "../../../screens/principles/iconography/usage/IconographyUsagePage";
import IconographyPageLayout from "../../../screens/principles/iconography/IconographyPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Iconography Usage — Halstack Design System</title>
      </Head>
      <IconographyUsagePage />
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <IconographyPageLayout>{page}</IconographyPageLayout>;
};

export default Usage;
