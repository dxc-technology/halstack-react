import Head from "next/head";
import type { ReactElement } from "react";
import CheckboxSpecsPage from "../../../screens/components/checkbox/specs/CheckboxSpecsPage";
import CheckboxPageLayout from "../../../screens/components/checkbox/CheckboxPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Checkbox Specs — Halstack Design System</title>
      </Head>
      <CheckboxSpecsPage></CheckboxSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <CheckboxPageLayout>{page}</CheckboxPageLayout>;
};

export default Specifications;
