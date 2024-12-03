import Head from "next/head";
import type { ReactElement } from "react";
import LinkPageLayout from "screens/components/link/LinkPageLayout";
import LinkCodePage from "screens/components/link/code/LinkCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Link — Halstack Design System</title>
      </Head>
      <LinkCodePage></LinkCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <LinkPageLayout>{page}</LinkPageLayout>;
};

export default Index;
