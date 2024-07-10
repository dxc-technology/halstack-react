import Head from "next/head";
import type { ReactElement } from "react";
import DialogPageLayout from "../../../screens/components/dialog/DialogPageLayout";
import DialogCodePage from "../../../screens/components/dialog/code/DialogCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Dialog — Halstack Design System</title>
      </Head>
      <DialogCodePage></DialogCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <DialogPageLayout>{page}</DialogPageLayout>;
};

export default Index;
