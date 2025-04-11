import Head from "next/head";
import type { ReactElement } from "react";
import DividerPageLayout from "screens/components/divider/DividerPageLayout";
import DividerCodePage from "screens/components/divider/code/DividerCodePage";

const Code = () => (
  <>
    <Head>
      <title>Divider code — Halstack Design System</title>
    </Head>
    <DividerCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <DividerPageLayout>{page}</DividerPageLayout>;

export default Code;
