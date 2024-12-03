import Head from "next/head";
import type { ReactElement } from "react";
import TextInputCodePage from "screens/components/text-input/code/TextInputCodePage";
import TextInputPageLayout from "screens/components/text-input/TextInputPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Text Input — Halstack Design System</title>
      </Head>
      <TextInputCodePage></TextInputCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <TextInputPageLayout>{page}</TextInputPageLayout>;
};

export default Index;
