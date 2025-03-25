import Head from "next/head";
import type { ReactElement } from "react";
import QuickNavCodePage from "screens/components/quick-nav/code/QuickNavCodePage";
import QuickNavPageLayout from "screens/components/quick-nav/QuickNavPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Quick Nav Code — Halstack Design System</title>
      </Head>
      <QuickNavCodePage />
    </>
  );
};

Specifications.getLayout = (page: ReactElement) => <QuickNavPageLayout>{page}</QuickNavPageLayout>;

export default Specifications;
