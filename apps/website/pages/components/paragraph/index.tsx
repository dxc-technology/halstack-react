import Head from "next/head";
import type { ReactElement } from "react";
import ParagraphPageLayout from "screens/components/paragraph/ParagraphPageLayout";
import ParagraphOverviewPage from "screens/components/paragraph/overview/ParagraphOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Paragraph — Halstack Design System</title>
    </Head>
    <ParagraphOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <ParagraphPageLayout>{page}</ParagraphPageLayout>;

export default Index;
