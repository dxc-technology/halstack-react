import Head from "next/head";
import type { ReactElement } from "react";
import SidenavPageLayout from "screens/components/sidenav/SidenavPageLayout";
import SidenavCodePage from "screens/components/sidenav/code/SidenavCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Sidenav — Halstack Design System</title>
      </Head>
      <SidenavCodePage></SidenavCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <SidenavPageLayout>{page}</SidenavPageLayout>;
};

export default Index;
