import Head from "next/head";
import type { ReactElement } from "react";
import DateInputUsagePage from "../../../screens/components/date-input/usage/DateInputUsagePage";
import DateInputPageLayout from "../../../screens/components/date-input/DateInputPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Date Input — Halstack Design System</title>
      </Head>
      <DateInputUsagePage />
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <DateInputPageLayout>{page}</DateInputPageLayout>;
};

export default Usage;
