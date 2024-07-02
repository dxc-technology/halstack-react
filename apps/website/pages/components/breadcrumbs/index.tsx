import Head from "next/head";
import type { ReactElement } from "react";
import BreadcrumbsCodePage from "../../../screens/components/breadcrumbs/code/BreadcrumbsCodePage";
import BreadcrumbsPageLayout from "../../../screens/components/breadcrumbs/BreadcrumbsPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Breadcrumbs — Halstack Design System</title>
      </Head>
      <BreadcrumbsCodePage></BreadcrumbsCodePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <BreadcrumbsPageLayout>{page}</BreadcrumbsPageLayout>;
};

export default Usage;
