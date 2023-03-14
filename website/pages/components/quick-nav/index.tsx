import Head from "next/head";
import type { ReactElement } from "react";
import QuickNavPageLayout from "../../../screens/components/quick-nav/QuickNavPageLayout";
import QuickNavCodePage from "../../../screens/components/quick-nav/code/QuickNavCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Quick Nav — Halstack Design System</title>
      </Head>
      <QuickNavCodePage></QuickNavCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <QuickNavPageLayout>{page}</QuickNavPageLayout>;
};

export default Index;
