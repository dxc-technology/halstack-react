import Head from "next/head";
import type { ReactElement } from "react";
import TextInputOverviewPage from "screens/components/text-input/overview/TextInputOverviewPage";
import TextInputPageLayout from "screens/components/text-input/TextInputPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Text input — Halstack Design System</title>
    </Head>
    <TextInputOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <TextInputPageLayout>{page}</TextInputPageLayout>;

export default Index;
