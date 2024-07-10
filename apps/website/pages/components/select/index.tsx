import Head from "next/head";
import type { ReactElement } from "react";
import SelectPageLayout from "../../../screens/components/select/SelectPageLayout";
import SelectCodePage from "../../../screens/components/select/code/SelectCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Select — Halstack Design System</title>
      </Head>
      <SelectCodePage></SelectCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <SelectPageLayout>{page}</SelectPageLayout>;
};

export default Index;
