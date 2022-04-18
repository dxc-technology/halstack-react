import Head from "next/head";
import type { ReactElement } from "react";
import DialogPageLayout from "../../../screens/components/dialog/DialogPageLayout";
import DialogUsagePage from "../../../screens/components/dialog/usage/DialogUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Dialog — Halstack Design System</title>
      </Head>
      <DialogUsagePage></DialogUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <DialogPageLayout>{page}</DialogPageLayout>;
};

export default Index;
