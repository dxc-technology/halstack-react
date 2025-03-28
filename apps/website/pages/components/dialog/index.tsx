import Head from "next/head";
import type { ReactElement } from "react";
import DialogPageLayout from "screens/components/dialog/DialogPageLayout";
import DialogOverviewPage from "screens/components/dialog/overview/DialogOverviewPage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Dialog — Halstack Design System</title>
      </Head>
      <DialogOverviewPage />
    </>
  );
};

Index.getLayout = (page: ReactElement) => <DialogPageLayout>{page}</DialogPageLayout>;

export default Index;
