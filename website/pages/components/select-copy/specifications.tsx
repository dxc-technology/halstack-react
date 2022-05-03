import Head from "next/head";
import type { ReactElement } from "react";
import SelectPageLayout from "../../../screens/components/select-copy/SelectCopyPageLayout";
import SelectSpecsPage from "../../../screens/components/select-copy/specs/SelectCopySpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Select Copy — Halstack Design System</title>
      </Head>
      <SelectSpecsPage></SelectSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <SelectPageLayout>{page}</SelectPageLayout>;
};

export default Specifications;
