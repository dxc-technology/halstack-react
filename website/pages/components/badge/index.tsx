import Head from "next/head";
import type { ReactElement } from "react";
import BadgePageLayout from "../../../screens/components/badge/BadgePageLayout";
import BadgeCodePage from "../../../screens/components/badge/code/BadgeCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Usage — Halstack Design System</title>
      </Head>
      <BadgeCodePage></BadgeCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <BadgePageLayout>{page}</BadgePageLayout>;
};

export default Index;
