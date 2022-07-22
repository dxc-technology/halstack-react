import Head from "next/head";
import type { ReactElement } from "react";
import InsetPageLayout from "../../../screens/components/inset/InsetPageLayout";
import InsetCodePage from "../../../screens/components/inset/code/InsetCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Inset — Halstack Design System</title>
      </Head>
      <InsetCodePage></InsetCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <InsetPageLayout>{page}</InsetPageLayout>;
};

export default Index;
