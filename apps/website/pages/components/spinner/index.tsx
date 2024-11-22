import Head from "next/head";
import type { ReactElement } from "react";
import SpinnerCodePage from "screens/components/spinner/code/SpinnerCodePage";
import SpinnerPageLayout from "screens/components/spinner/SpinnerPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Spinner — Halstack Design System</title>
      </Head>
      <SpinnerCodePage></SpinnerCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <SpinnerPageLayout>{page}</SpinnerPageLayout>;
};

export default Index;
