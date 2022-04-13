import Head from "next/head";
import type { ReactElement } from "react";
import LinkPageLayout from "../../../screens/components/link/LinkPageLayout";
import LinkUsagePage from "../../../screens/components/link/usage/LinkUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Link — Halstack Design System</title>
      </Head>
      <LinkUsagePage></LinkUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <LinkPageLayout>{page}</LinkPageLayout>;
};

export default Index;
