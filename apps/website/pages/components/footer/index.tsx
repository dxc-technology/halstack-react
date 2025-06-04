import Head from "next/head";
import type { ReactElement } from "react";
import FooterPageLayout from "screens/components/footer/FooterPageLayout";
import FooterOverviewPage from "screens/components/footer/overview/FooterOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Footer — Halstack Design System</title>
    </Head>
    <FooterOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <FooterPageLayout>{page}</FooterPageLayout>;

export default Index;
