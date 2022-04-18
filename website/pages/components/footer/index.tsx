import Head from "next/head";
import type { ReactElement } from "react";
import FooterPageLayout from "../../../screens/components/footer/FooterPageLayout";
import FooterUsagePage from "../../../screens/components/footer/usage/FooterUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Footer — Halstack Design System</title>
      </Head>
      <FooterUsagePage></FooterUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <FooterPageLayout>{page}</FooterPageLayout>;
};

export default Index;
