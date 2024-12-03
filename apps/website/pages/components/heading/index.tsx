import Head from "next/head";
import type { ReactElement } from "react";
import HeadingPageLayout from "screens/components/heading/HeadingPageLayout";
import HeadingCodePage from "screens/components/heading/code/HeadingCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Heading — Halstack Design System</title>
      </Head>
      <HeadingCodePage></HeadingCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <HeadingPageLayout>{page}</HeadingPageLayout>;
};

export default Index;
