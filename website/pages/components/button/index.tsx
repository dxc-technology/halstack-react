import Head from "next/head";
import type { ReactElement } from "react";
import ButtonPageLayout from "../../../screens/components/button/ButtonPageLayout";
import ButtonCodePage from "../../../screens/components/button/code/ButtonCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Button — Halstack Design System</title>
      </Head>
      <ButtonCodePage></ButtonCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ButtonPageLayout>{page}</ButtonPageLayout>;
};

export default Index;
