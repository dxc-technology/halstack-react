import Head from "next/head";
import type { ReactElement } from "react";
import ButtonLinkPageLayout from "screens/components/button-link/ButtonLinkPageLayout";
import ButtonLinkOverviewPage from "screens/components/button-link/overview/ButtonLinkOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Button Link — Halstack Design System</title>
    </Head>
    <ButtonLinkOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <ButtonLinkPageLayout>{page}</ButtonLinkPageLayout>;

export default Index;
