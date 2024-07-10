import Head from "next/head";
import type { ReactElement } from "react";
import BreadcrumbsPageLayout from "../../../screens/components/breadcrumbs/BreadcrumbsPageLayout";
import BreadcrumbsUsagePage from "../../../screens/components/breadcrumbs/usage/BreadcrumbsUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Breadcrumbs Usage — Halstack Design System</title>
      </Head>
      <BreadcrumbsUsagePage></BreadcrumbsUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <BreadcrumbsPageLayout>{page}</BreadcrumbsPageLayout>;
};

export default Usage;
