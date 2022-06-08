import Head from "next/head";
import type { ReactElement } from "react";
import BoxPageLayout from "../../../screens/components/box/BoxPageLayout";
import BoxCodePage from "../../../screens/components/box/code/BoxCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Box — Halstack Design System</title>
      </Head>
      <BoxCodePage></BoxCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <BoxPageLayout>{page}</BoxPageLayout>;
};

export default Index;
