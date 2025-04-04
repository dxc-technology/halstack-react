import Head from "next/head";
import type { ReactElement } from "react";
import BreadcrumbsPageLayout from "screens/components/breadcrumbs/BreadcrumbsPageLayout";
import BreadcrumbsCodePage from "screens/components/breadcrumbs/code/BreadcrumbsCodePage";

const Code = () => (
  <>
    <Head>
      <title>Breadcrumbs code — Halstack Design System</title>
    </Head>
    <BreadcrumbsCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <BreadcrumbsPageLayout>{page}</BreadcrumbsPageLayout>;

export default Code;
