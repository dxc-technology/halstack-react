import Head from "next/head";
import type { ReactElement } from "react";
import NumberInputPageLayout from "screens/components/number-input/NumberInputPageLayout";
import NumberInputOverviewPage from "screens/components/number-input/overview/NumberInputOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Number input — Halstack Design System</title>
    </Head>
    <NumberInputOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <NumberInputPageLayout>{page}</NumberInputPageLayout>;

export default Index;
