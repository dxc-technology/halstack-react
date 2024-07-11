import Head from "next/head";
import type { ReactElement } from "react";
import SelectPageLayout from "../../../screens/components/select/SelectPageLayout";
import SelectSpecsPage from "../../../screens/components/select/specs/SelectSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Select Specs — Halstack Design System</title>
      </Head>
      <SelectSpecsPage></SelectSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <SelectPageLayout>{page}</SelectPageLayout>;
};

export default Specifications;
