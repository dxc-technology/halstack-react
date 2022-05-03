import Head from "next/head";
import type { ReactElement } from "react";
import SelectPageLayout from "../../../screens/components/select-copy/SelectCopyPageLayout";
import SelectExamplesPage from "../../../screens/components/select-copy/examples/SelectCopyExamplesPage";

const Examples = () => {
  return (
    <>
      <Head>
        <title>Select Copy — Halstack Design System</title>
      </Head>
      <SelectExamplesPage></SelectExamplesPage>
    </>
  );
};

Examples.getLayout = function getLayout(page: ReactElement) {
  return <SelectPageLayout>{page}</SelectPageLayout>;
};

export default Examples;
