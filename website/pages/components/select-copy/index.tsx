import Head from "next/head";
import type { ReactElement } from "react";
import SelectPageLayout from "../../../screens/components/select-copy/SelectCopyPageLayout";
import SelectUsagePage from "../../../screens/components/select-copy/usage/SelectCopyUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Select Copy — Halstack Design System</title>
      </Head>
      <SelectUsagePage></SelectUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <SelectPageLayout>{page}</SelectPageLayout>;
};

export default Index;
