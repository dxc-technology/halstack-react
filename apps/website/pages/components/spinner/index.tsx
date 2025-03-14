import Head from "next/head";
import type { ReactElement } from "react";
import SpinnerOverviewPage from "screens/components/spinner/overview/SpinnerOverviewPage";
import SpinnerPageLayout from "screens/components/spinner/SpinnerPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Spinner — Halstack Design System</title>
    </Head>
    <SpinnerOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <SpinnerPageLayout>{page}</SpinnerPageLayout>;

export default Index;
