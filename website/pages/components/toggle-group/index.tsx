import Head from "next/head";
import type { ReactElement } from "react";
import ToggleGroupPageLayout from "../../../screens/components/toggle-group/ToggleGroupPageLayout";
import ToggleGroupUsagePage from "../../../screens/components/toggle-group/usage/ToggleGroupUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Toggle Group — Halstack Design System</title>
      </Head>
      <ToggleGroupUsagePage></ToggleGroupUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ToggleGroupPageLayout>{page}</ToggleGroupPageLayout>;
};

export default Index;
