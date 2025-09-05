import Head from "next/head";
import type { ReactElement } from "react";
import DateInputCodePage from "screens/components/date-input/code/DateInputCodePage";
import DateInputPageLayout from "screens/components/date-input/DateInputPageLayout";

const Code = () => {
  return (
    <>
      <Head>
        <title>Date Input code — Halstack Design System</title>
      </Head>
      <DateInputCodePage />
    </>
  );
};

Code.getLayout = (page: ReactElement) => <DateInputPageLayout>{page}</DateInputPageLayout>;

export default Code;
