import Head from "next/head";
import type { ReactElement } from "react";
import AmountInputOverviewPage from "screens/components/amount-input/overview/AmountInputOverviewPage";
import AmountInputPageLayout from "screens/components/amount-input/AmountInputPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Amount input — Halstack Design System</title>
    </Head>
    <AmountInputOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <AmountInputPageLayout>{page}</AmountInputPageLayout>;

export default Index;
