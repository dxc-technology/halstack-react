import Head from "next/head";
import type { ReactElement } from "react";
import ParagraphPageLayout from "../../../screens/components/paragraph/ParagraphPageLayout";
import ParagraphCodePage from "../../../screens/components/paragraph/code/ParagraphCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Paragraph — Halstack Design System</title>
      </Head>
      <ParagraphCodePage />
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ParagraphPageLayout>{page}</ParagraphPageLayout>;
};

export default Index;
