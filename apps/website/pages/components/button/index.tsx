import Head from "next/head";
import type { ReactElement } from "react";
import ButtonPageLayout from "screens/components/button/ButtonPageLayout";
import ButtonOverviewPage from "screens/components/button/overview/ButtonOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Button — Halstack Design System</title>
    </Head>
    <ButtonOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <ButtonPageLayout>{page}</ButtonPageLayout>;

export default Index;
