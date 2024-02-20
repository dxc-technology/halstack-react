import Head from "next/head";
import type { ReactElement } from "react";
import DividerCodePage from "../../../screens/components/divider/code/DividerCodePage";
import DividerPageLayout from "../../../screens/components/divider/DividerPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Divider — Halstack Design System</title>
      </Head>
      <DividerCodePage></DividerCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <DividerPageLayout>{page}</DividerPageLayout>;
};

export default Index;
