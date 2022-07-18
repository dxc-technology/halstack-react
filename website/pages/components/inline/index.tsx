import Head from "next/head";
import type { ReactElement } from "react";
import InlinePageLayout from "../../../screens/components/inline/InlinePageLayout";
import InlineCodePage from "../../../screens/components/inline/code/InlineCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Inline — Halstack Design System</title>
      </Head>
      <InlineCodePage></InlineCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <InlinePageLayout>{page}</InlinePageLayout>;
};

export default Index;
