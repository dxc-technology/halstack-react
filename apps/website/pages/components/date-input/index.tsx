import Head from "next/head";
import type { ReactElement } from "react";
import DateInputOverviewPage from "screens/components/date-input/overview/DateInputOverviewPage";
import DateInputPageLayout from "screens/components/date-input/DateInputPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Date Input — Halstack Design System</title>
      </Head>
      <DateInputOverviewPage />
    </>
  );
};

Index.getLayout = (page: ReactElement) => <DateInputPageLayout>{page}</DateInputPageLayout>;

export default Index;
