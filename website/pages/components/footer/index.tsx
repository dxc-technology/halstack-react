import Head from "next/head";
import type { ReactElement } from "react";
import FooterPageLayout from "../../../screens/components/footer/FooterPageLayout";
import FooterCodePage from "../../../screens/components/footer/code/FooterCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Footer — Halstack Design System</title>
      </Head>
      <FooterCodePage></FooterCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <FooterPageLayout>{page}</FooterPageLayout>;
};

export default Index;
