import Head from "next/head";
import type { ReactElement } from "react";
import ParagraphPageLayout from "screens/components/paragraph/ParagraphPageLayout";
import ParagraphUsagePage from "screens/components/paragraph/usage/ParagraphUsagePage";
const Usage = () => {
  return (
    <>
      <Head>
        <title>Paragraph Usage — Halstack Design System</title>
      </Head>
      <ParagraphUsagePage />
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ParagraphPageLayout>{page}</ParagraphPageLayout>;
};

export default Usage;
