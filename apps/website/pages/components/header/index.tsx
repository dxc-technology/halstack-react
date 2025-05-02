import Head from "next/head";
import type { ReactElement } from "react";
import HeaderPageLayout from "screens/components/header/HeaderPageLayout";
import HeaderOverviewPage from "screens/components/header/overview/HeaderOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Header — Halstack Design System</title>
    </Head>
    <HeaderOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <HeaderPageLayout>{page}</HeaderPageLayout>;

export default Index;
