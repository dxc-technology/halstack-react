import Head from "next/head";
import type { ReactElement } from "react";
import HeaderPageLayout from "../../../screens/components/header/HeaderPageLayout";
import HeaderUsagePage from "../../../screens/components/header/usage/HeaderUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Header — Halstack Design System</title>
      </Head>
      <HeaderUsagePage></HeaderUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <HeaderPageLayout>{page}</HeaderPageLayout>;
};

export default Index;
