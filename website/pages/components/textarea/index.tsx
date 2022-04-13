import Head from "next/head";
import type { ReactElement } from "react";
import TextareaUsagePage from "../../../screens/components/textarea/usage/TextareaUsagePage";
import TextareaPageLayout from "../../../screens/components/textarea/TextareaPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Textarea — Halstack Design System</title>
      </Head>
      <TextareaUsagePage></TextareaUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <TextareaPageLayout>{page}</TextareaPageLayout>;
};

export default Usage;
