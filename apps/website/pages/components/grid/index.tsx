import Head from "next/head";
import type { ReactElement } from "react";
import GridPageLayout from "screens/components/grid/GridPageLayout";
import GridOverviewPage from "screens/components/grid/overview/GridOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Grid — Halstack Design System</title>
    </Head>
    <GridOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <GridPageLayout>{page}</GridPageLayout>;

export default Index;
