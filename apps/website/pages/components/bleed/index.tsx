import Head from "next/head";
import type { ReactElement } from "react";
import BleedPageLayout from "screens/components/bleed/BleedPageLayout";
import BleedCodePage from "screens/components/bleed/code/BleedCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Bleed — Halstack Design System</title>
      </Head>
      <BleedCodePage></BleedCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <BleedPageLayout>{page}</BleedPageLayout>;
};

export default Index;
