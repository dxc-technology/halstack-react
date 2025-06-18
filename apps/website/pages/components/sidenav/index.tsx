import Head from "next/head";
import type { ReactElement } from "react";
import SidenavPageLayout from "screens/components/sidenav/SidenavPageLayout";
import SidenavOverviewPage from "screens/components/sidenav/overview/SidenavOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Sidenav — Halstack Design System</title>
    </Head>
    <SidenavOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <SidenavPageLayout>{page}</SidenavPageLayout>;

export default Index;
