import Head from "next/head";
import type { ReactElement } from "react";
import DividerPageLayout from "screens/components/divider/DividerPageLayout";
import DividerCodePage from "screens/components/divider/code/DividerCodePage";

const Code = () => {
  return (
    <>
      <Head>
        <title>Divider Code — Halstack Design System</title>
      </Head>
      <DividerCodePage />
    </>
  );
};

Code.getLayout = (page: ReactElement) => <DividerPageLayout>{page}</DividerPageLayout>;

export default Code;
