import Head from "next/head";
import type { ReactElement } from "react";
import StackPageLayout from "../../../screens/components/stack/StackPageLayout";
import StackCodePage from "../../../screens/components/stack/code/StackCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Stack — Halstack Design System</title>
      </Head>
      <StackCodePage></StackCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <StackPageLayout>{page}</StackPageLayout>;
};

export default Index;
