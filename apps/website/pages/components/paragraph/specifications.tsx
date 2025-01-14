import Head from "next/head";
import type { ReactElement } from "react";
import ParagraphPageLayout from "screens/components/paragraph/ParagraphPageLayout";
import ParagraphSpecsPage from "screens/components/paragraph/specs/ParagraphSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Paragraph Specs — Halstack Design System</title>
      </Head>
      <ParagraphSpecsPage></ParagraphSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <ParagraphPageLayout>{page}</ParagraphPageLayout>;
};

export default Specifications;
