import Head from "next/head";
import type { ReactElement } from "react";
import HeadingPageLayout from "screens/components/heading/HeadingPageLayout";
import HeadingOverviewPage from "screens/components/heading/overview/HeadingOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Heading — Halstack Design System</title>
    </Head>
    <HeadingOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <HeadingPageLayout>{page}</HeadingPageLayout>;

export default Index;
