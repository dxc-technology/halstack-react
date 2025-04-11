import Head from "next/head";
import type { ReactElement } from "react";
import BreadcrumbsPageLayout from "screens/components/breadcrumbs/BreadcrumbsPageLayout";
import BreadcrumbsOverviewPage from "screens/components/breadcrumbs/overview/BreadcrumbsOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Breadcrumbs — Halstack Design System</title>
    </Head>
    <BreadcrumbsOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <BreadcrumbsPageLayout>{page}</BreadcrumbsPageLayout>;

export default Index;
