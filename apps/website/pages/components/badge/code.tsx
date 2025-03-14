import Head from "next/head";
import type { ReactElement } from "react";
import BadgePageLayout from "screens/components/badge/BadgePageLayout";
import BadgeCodePage from "screens/components/badge/code/BadgeCodePage";

const Code = () => {
  return (
    <>
      <Head>
        <title>Badge Code — Halstack Design System</title>
      </Head>
      <BadgeCodePage />
    </>
  );
};

Code.getLayout = (page: ReactElement) => <BadgePageLayout>{page}</BadgePageLayout>;

export default Code;
