import Head from "next/head";
import type { ReactElement } from "react";
import InsetPageLayout from "screens/components/inset/InsetPageLayout";
import InsetOverviewPage from "screens/components/inset/overview/InsetOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Inset — Halstack Design System</title>
    </Head>
    <InsetOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <InsetPageLayout>{page}</InsetPageLayout>;

export default Index;
