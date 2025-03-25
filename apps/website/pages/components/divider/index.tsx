import Head from "next/head";
import type { ReactElement } from "react";
import DividerOverviewPage from "screens/components/divider/overview/DividerOverviewPage";
import DividerPageLayout from "screens/components/divider/DividerPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Divider — Halstack Design System</title>
      </Head>
      <DividerOverviewPage/>
    </>
  );
};

Index.getLayout = (page: ReactElement) => <DividerPageLayout>{page}</DividerPageLayout>;

export default Index;
