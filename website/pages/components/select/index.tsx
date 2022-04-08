import Head from "next/head";
import type { ReactElement } from "react";
import SelectPageLayout from "../../../screens/components/select/SelectPageLayout";
import SelectUsagePage from "../../../screens/components/select/usage/SelectUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Select — Halstack Design System</title>
      </Head>
      <SelectUsagePage></SelectUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <SelectPageLayout>{page}</SelectPageLayout>;
};

export default Index;
