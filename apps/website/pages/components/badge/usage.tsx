import Head from "next/head";
import type { ReactElement } from "react";
import BadgePageLayout from "screens/components/badge/BadgePageLayout";
import BadgeUsagePage from "screens/components/badge/usage/BadgeUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Badge Usage — Halstack Design System</title>
      </Head>
      <BadgeUsagePage></BadgeUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <BadgePageLayout>{page}</BadgePageLayout>;
};

export default Usage;
