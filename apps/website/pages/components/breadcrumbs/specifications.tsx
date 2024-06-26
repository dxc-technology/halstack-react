import Head from "next/head";
import type { ReactElement } from "react";
import BreadcrumbsPageLayout from "../../../screens/components/breadcrumbs/BreadcrumbsPageLayout";
import BreadcrumbsSpecsPage from "../../../screens/components/breadcrumbs/specs/BreadcrumbsSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Breadcrumbs Specs — Halstack Design System</title>
      </Head>
      <BreadcrumbsSpecsPage></BreadcrumbsSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <BreadcrumbsPageLayout>{page}</BreadcrumbsPageLayout>;
};

export default Specifications;
