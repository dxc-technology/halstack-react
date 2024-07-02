import Head from "next/head";
import type { ReactElement } from "react";
import SidenavPageLayout from "../../../screens/components/sidenav/SidenavPageLayout";
import SidenavSpecsPage from "../../../screens/components/sidenav/specs/SidenavSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Sidenav Specs — Halstack Design System</title>
      </Head>
      <SidenavSpecsPage></SidenavSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <SidenavPageLayout>{page}</SidenavPageLayout>;
};

export default Specifications;
