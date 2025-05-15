import Head from "next/head";
import type { ReactElement } from "react";
import TableOverviewPage from "screens/components/table/overview/TableOverviewPage";
import TablePageLayout from "screens/components/table/TablePageLayout";

const Index = () => (
  <>
    <Head>
      <title>Table — Halstack Design System</title>
    </Head>
    <TableOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <TablePageLayout>{page}</TablePageLayout>;

export default Index;
