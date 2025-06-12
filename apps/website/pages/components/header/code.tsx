import Head from "next/head";
import type { ReactElement } from "react";
import HeaderPageLayout from "screens/components/header/HeaderPageLayout";
import HeaderCodePage from "screens/components/header/code/HeaderCodePage";

const Code = () => (
  <>
    <Head>
      <title>Header code — Halstack Design System</title>
    </Head>
    <HeaderCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <HeaderPageLayout>{page}</HeaderPageLayout>;

export default Code;
