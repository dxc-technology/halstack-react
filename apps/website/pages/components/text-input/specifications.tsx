import Head from "next/head";
import type { ReactElement } from "react";
import TextInputSpecsPage from "../../../screens/components/text-input/specs/TextInputSpecsPage";
import TextInputPageLayout from "../../../screens/components/text-input/TextInputPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Text Input Specs — Halstack Design System</title>
      </Head>
      <TextInputSpecsPage></TextInputSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <TextInputPageLayout>{page}</TextInputPageLayout>;
};

export default Specifications;
