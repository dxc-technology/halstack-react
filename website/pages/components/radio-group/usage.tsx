import Head from "next/head";
import type { ReactElement } from "react";
import RadioGroupPageLayout from "../../../screens/components/radio-group/RadioGroupPageLayout";
import RadioGroupUsagePage from "../../../screens/components/radio-group/usage/RadioGroupUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Radio Group Usage — Halstack Design System</title>
      </Head>
      <RadioGroupUsagePage></RadioGroupUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <RadioGroupPageLayout>{page}</RadioGroupPageLayout>;
};

export default Usage;
