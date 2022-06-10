import Head from "next/head";
import type { ReactElement } from "react";
import DateInputCodePage from "../../../screens/components/date-input/code/DateInputCodePage";
import DateInputPageLayout from "../../../screens/components/date-input/DateInputPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Date Input — Halstack Design System</title>
      </Head>
      <DateInputCodePage />
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <DateInputPageLayout>{page}</DateInputPageLayout>;
};

export default Usage;
