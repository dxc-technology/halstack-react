import Head from "next/head";
import type { ReactElement } from "react";
import BulletedListUsagePage from "screens/components/bulleted-list/usage/BulletedListUsagePage";
import BulletedListPageLayout from "screens/components/bulleted-list/BulletedListPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Bulleted list Usage — Halstack Design System</title>
      </Head>
      <BulletedListUsagePage />
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <BulletedListPageLayout>{page}</BulletedListPageLayout>;
};

export default Usage;
