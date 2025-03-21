import Head from "next/head";
import type { ReactElement } from "react";
import PaginatorPageLayout from "screens/components/paginator/PaginatorPageLayout";
import PaginatorOverviewPage from "screens/components/paginator/overview/PaginatorOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Paginator — Halstack Design System</title>
    </Head>
    <PaginatorOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <PaginatorPageLayout>{page}</PaginatorPageLayout>;

export default Index;
