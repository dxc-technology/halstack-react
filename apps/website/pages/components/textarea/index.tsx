import Head from "next/head";
import type { ReactElement } from "react";
import TextareaCodePage from "screens/components/textarea/code/TextareaCodePage";
import TextareaPageLayout from "screens/components/textarea/TextareaPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Textarea — Halstack Design System</title>
      </Head>
      <TextareaCodePage></TextareaCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <TextareaPageLayout>{page}</TextareaPageLayout>;
};

export default Index;
