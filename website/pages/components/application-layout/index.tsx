import Head from "next/head";
import type { ReactElement } from "react";
import ApplicationLayoutPageLayout from "../../../screens/components/application-layout/ApplicationLayoutPageLayout";
import ApplicationLayoutUsagePage from "../../../screens/components/application-layout/usage/ApplicationLayoutUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Application layout — Halstack Design System</title>
      </Head>
      <ApplicationLayoutUsagePage></ApplicationLayoutUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ApplicationLayoutPageLayout>{page}</ApplicationLayoutPageLayout>;
};

export default Index;
