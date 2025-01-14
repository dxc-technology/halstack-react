import Head from "next/head";
import type { ReactElement } from "react";
import BadgePageLayout from "screens/components/badge/BadgePageLayout";
import BadgeSpecsPage from "screens/components/badge/specs/BadgeSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Badge Specs — Halstack Design System</title>
      </Head>
      <BadgeSpecsPage></BadgeSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <BadgePageLayout>{page}</BadgePageLayout>;
};

export default Specifications;
