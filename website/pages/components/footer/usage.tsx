import Head from "next/head";
import type { ReactElement } from "react";
import FooterPageLayout from "../../../screens/components/footer/FooterPageLayout";
import FooterUsagePage from "../../../screens/components/footer/usage/FooterUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Footer Usage — Halstack Design System</title>
      </Head>
      <FooterUsagePage></FooterUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <FooterPageLayout>{page}</FooterPageLayout>;
};

export default Usage;
