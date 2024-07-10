import Head from "next/head";
import type { ReactElement } from "react";
import ApplicationLayoutPageLayout from "../../../screens/components/application-layout/ApplicationLayoutPageLayout";
import ApplicationLayoutCodePage from "../../../screens/components/application-layout/code/ApplicationLayoutCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Application layout — Halstack Design System</title>
      </Head>
      <ApplicationLayoutCodePage></ApplicationLayoutCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ApplicationLayoutPageLayout>{page}</ApplicationLayoutPageLayout>;
};

export default Index;
