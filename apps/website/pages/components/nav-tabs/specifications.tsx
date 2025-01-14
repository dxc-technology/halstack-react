import Head from "next/head";
import type { ReactElement } from "react";
import NavTabsPageLayout from "screens/components/nav-tabs/NavTabsPageLayout";
import NavTabsSpecsPage from "screens/components/nav-tabs/specs/NavTabsSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Nav Tabs Specs — Halstack Design System</title>
      </Head>
      <NavTabsSpecsPage></NavTabsSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <NavTabsPageLayout>{page}</NavTabsPageLayout>;
};

export default Specifications;
