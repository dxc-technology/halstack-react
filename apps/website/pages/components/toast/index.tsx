import Head from "next/head";
import type { ReactElement } from "react";
import ToastPageLayout from "screens/components/toast/ToastPageLayout";
import ToastOverviewPage from "screens/components/toast/overview/ToastOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Toast — Halstack Design System</title>
    </Head>
    <ToastOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <ToastPageLayout>{page}</ToastPageLayout>;

export default Index;
