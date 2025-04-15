import Head from "next/head";
import type { ReactElement } from "react";
import CardOverviewPage from "screens/components/card/overview/CardOverviewPage";
import CardPageLayout from "screens/components/card/CardPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Card — Halstack Design System</title>
    </Head>
    <CardOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <CardPageLayout>{page}</CardPageLayout>;

export default Index;
