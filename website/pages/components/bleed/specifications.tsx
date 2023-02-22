import Head from "next/head";
import type { ReactElement } from "react";
import BleedPageLayout from "../../../screens/components/bleed/BleedPageLayout";
import BleedSpecsPage from "../../../screens/components/bleed/specs/BleedSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Bleed Specs — Halstack Design System</title>
      </Head>
      <BleedSpecsPage></BleedSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <BleedPageLayout>{page}</BleedPageLayout>;
};

export default Specifications;
