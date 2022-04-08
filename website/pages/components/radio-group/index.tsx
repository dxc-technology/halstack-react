import Head from "next/head";
import type { ReactElement } from "react";
import RadioGroupPageLayout from "../../../screens/components/radio-group/RadioGroupPageLayout";
import RadioGroupUsagePage from "../../../screens/components/radio-group/usage/RadioGroupUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Radio Group — Halstack Design System</title>
      </Head>
      <RadioGroupUsagePage></RadioGroupUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <RadioGroupPageLayout>{page}</RadioGroupPageLayout>;
};

export default Index;
