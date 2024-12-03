import Head from "next/head";
import type { ReactElement } from "react";
import RadioGroupPageLayout from "screens/components/radio-group/RadioGroupPageLayout";
import RadioGroupCodePage from "screens/components/radio-group/code/RadioGroupCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Radio Group — Halstack Design System</title>
      </Head>
      <RadioGroupCodePage></RadioGroupCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <RadioGroupPageLayout>{page}</RadioGroupPageLayout>;
};

export default Index;
