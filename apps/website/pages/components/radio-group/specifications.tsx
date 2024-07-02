import Head from "next/head";
import type { ReactElement } from "react";
import RadioGroupPageLayout from "../../../screens/components/radio-group/RadioGroupPageLayout";
import RadioGroupSpecsPage from "../../../screens/components/radio-group/specs/RadioGroupSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Radio Group Specs — Halstack Design System</title>
      </Head>
      <RadioGroupSpecsPage></RadioGroupSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <RadioGroupPageLayout>{page}</RadioGroupPageLayout>;
};

export default Specifications;
