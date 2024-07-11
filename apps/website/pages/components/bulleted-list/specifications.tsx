import Head from "next/head";
import type { ReactElement } from "react";
import BulletedListPageLayout from "../../../screens/components/bulleted-list/BulletedListPageLayout";
import BulletedListSpecsPage from "../../../screens/components/bulleted-list/specs/BulletedListSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Bulleted List Specs — Halstack Design System</title>
      </Head>
      <BulletedListSpecsPage></BulletedListSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <BulletedListPageLayout>{page}</BulletedListPageLayout>;
};

export default Specifications;
