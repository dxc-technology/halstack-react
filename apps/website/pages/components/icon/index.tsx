import Head from "next/head";
import type { ReactElement } from "react";
import IconPageLayout from "screens/components/icon/IconPageLayout";
import IconOverviewPage from "screens/components/icon/overview/IconOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Icon — Halstack Design System</title>
    </Head>
    <IconOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <IconPageLayout>{page}</IconPageLayout>;

export default Index;
