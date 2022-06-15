import Head from "next/head";
import type { ReactElement } from "react";
import TextareaPageLayout from "../../../screens/components/textarea/TextareaPageLayout";
import TextareaUsagePage from "../../../screens/components/textarea/usage/TextareaUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Textarea Usage — Halstack Design System</title>
      </Head>
      <TextareaUsagePage></TextareaUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <TextareaPageLayout>{page}</TextareaPageLayout>;
};

export default Usage;
