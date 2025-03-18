import Head from "next/head";
import type { ReactElement } from "react";
import DialogPageLayout from "screens/components/dialog/DialogPageLayout";
import DialogCodePage from "screens/components/dialog/code/DialogCodePage";

const Code = () => (
  <>
    <Head>
      <title>Dialog Code — Halstack Design System</title>
    </Head>
    <DialogCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <DialogPageLayout>{page}</DialogPageLayout>;

export default Code;
