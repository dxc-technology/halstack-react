import Head from "next/head";
import type { ReactElement } from "react";
import ToggleGroupPageLayout from "screens/components/toggle-group/ToggleGroupPageLayout";
import ToggleGroupCodePage from "screens/components/toggle-group/code/ToggleGroupCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Toggle Group — Halstack Design System</title>
      </Head>
      <ToggleGroupCodePage></ToggleGroupCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ToggleGroupPageLayout>{page}</ToggleGroupPageLayout>;
};

export default Index;
