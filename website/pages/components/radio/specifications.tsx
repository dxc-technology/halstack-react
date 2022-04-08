import Head from "next/head";
import type { ReactElement } from "react";
import RadioPageLayout from "../../../screens/components/radio/RadioPageLayout";
import RadioSpecsPage from "../../../screens/components/radio/specs/RadioSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Radio Specs — Halstack Design System</title>
      </Head>
      <RadioSpecsPage></RadioSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <RadioPageLayout>{page}</RadioPageLayout>;
};

export default Specifications;
