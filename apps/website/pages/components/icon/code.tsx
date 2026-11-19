import Head from "next/head";
import type { ReactElement } from "react";
import IconCodePage from "screens/components/icon/code/IconCodePage";
import IconPageLayout from "screens/components/icon/IconPageLayout";

const Code = () => (
  <>
    <Head>
      <title>Icon code — Halstack Design System</title>
    </Head>
    <IconCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <IconPageLayout>{page}</IconPageLayout>;

export default Code;
