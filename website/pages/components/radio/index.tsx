import Head from "next/head";
import type { ReactElement } from "react";
import RadioPageLayout from "../../../screens/components/radio/RadioPageLayout";
import RadioCodePage from "../../../screens/components/radio/code/RadioCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Radio — Halstack Design System</title>
      </Head>
      <RadioCodePage></RadioCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <RadioPageLayout>{page}</RadioPageLayout>;
};

export default Index;
