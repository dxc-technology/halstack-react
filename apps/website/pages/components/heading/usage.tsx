import Head from "next/head";
import type { ReactElement } from "react";
import HeadingPageLayout from "../../../screens/components/heading/HeadingPageLayout";
import HeadingUsagePage from "../../../screens/components/heading/usage/HeadingUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Heading Usage — Halstack Design System</title>
      </Head>
      <HeadingUsagePage></HeadingUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <HeadingPageLayout>{page}</HeadingPageLayout>;
};

export default Usage;
