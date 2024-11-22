import Head from "next/head";
import type { ReactElement } from "react";
import NumberInputCodePage from "screens/components/number-input/code/NumberInputCodePage";
import NumberInputPageLayout from "screens/components/number-input/NumberInputPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Number Input — Halstack Design System</title>
      </Head>
      <NumberInputCodePage></NumberInputCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <NumberInputPageLayout>{page}</NumberInputPageLayout>;
};

export default Index;
