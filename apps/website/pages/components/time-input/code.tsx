import Head from "next/head";
import type { ReactElement } from "react";
import TimeInputPageLayout from "screens/components/time-input/TimeInputPageLayout";
import TimeInputCodePage from "screens/components/time-input/code/TimeInputCodePage";

const Code = () => (
  <>
    <Head>
      <title>Time input code — Halstack Design System</title>
    </Head>
    <TimeInputCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <TimeInputPageLayout>{page}</TimeInputPageLayout>;

export default Code;
