import Head from "next/head";
import type { ReactElement } from "react";
import CheckboxPageLayout from "screens/components/checkbox/CheckboxPageLayout";
import CheckboxUsagePage from "screens/components/checkbox/usage/CheckboxUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Checkbox Usage — Halstack Design System</title>
      </Head>
      <CheckboxUsagePage></CheckboxUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <CheckboxPageLayout>{page}</CheckboxPageLayout>;
};

export default Usage;
