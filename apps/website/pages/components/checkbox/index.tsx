import Head from "next/head";
import type { ReactElement } from "react";
import CheckboxCodePage from "screens/components/checkbox/code/CheckboxCodePage";
import CheckboxPageLayout from "screens/components/checkbox/CheckboxPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Checkbox — Halstack Design System</title>
      </Head>
      <CheckboxCodePage></CheckboxCodePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <CheckboxPageLayout>{page}</CheckboxPageLayout>;
};

export default Usage;
