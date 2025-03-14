import Head from "next/head";
import type { ReactElement } from "react";
import SpinnerCodePage from "screens/components/spinner/code/SpinnerCodePage";
import SpinnerPageLayout from "screens/components/spinner/SpinnerPageLayout";

const Code = () => (
  <>
    <Head>
      <title>Spinner code — Halstack Design System</title>
    </Head>
    <SpinnerCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <SpinnerPageLayout>{page}</SpinnerPageLayout>;

export default Code;
