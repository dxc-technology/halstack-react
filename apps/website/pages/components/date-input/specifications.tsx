import Head from "next/head";
import type { ReactElement } from "react";
import DateInputSpecsPage from "../../../screens/components/date-input/specs/DateInputSpecsPage";
import DateInputPageLayout from "../../../screens/components/date-input/DateInputPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Date Input Specs — Halstack Design System</title>
      </Head>
      <DateInputSpecsPage />
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <DateInputPageLayout>{page}</DateInputPageLayout>;
};

export default Specifications;
