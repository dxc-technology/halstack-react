import Head from "next/head";
import type { ReactElement } from "react";
import ToastPageLayout from "screens/components/toast/ToastPageLayout";
import ToastCodePage from "screens/components/toast/code/ToastCodePage";

const Code = () => (
  <>
    <Head>
      <title>Toast code — Halstack Design System</title>
    </Head>
    <ToastCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <ToastPageLayout>{page}</ToastPageLayout>;

export default Code;
