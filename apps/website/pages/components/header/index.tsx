import Head from "next/head";
import type { ReactElement } from "react";
import HeaderPageLayout from "../../../screens/components/header/HeaderPageLayout";
import HeaderCodePage from "../../../screens/components/header/code/HeaderCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Header — Halstack Design System</title>
      </Head>
      <HeaderCodePage></HeaderCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <HeaderPageLayout>{page}</HeaderPageLayout>;
};

export default Index;
