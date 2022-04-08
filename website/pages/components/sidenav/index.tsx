import Head from "next/head";
import type { ReactElement } from "react";
import SidenavPageLayout from "../../../screens/components/sidenav/SidenavPageLayout";
import SidenavUsagePage from "../../../screens/components/sidenav/usage/SidenavUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Sidenav — Halstack Design System</title>
      </Head>
      <SidenavUsagePage></SidenavUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <SidenavPageLayout>{page}</SidenavPageLayout>;
};

export default Index;
