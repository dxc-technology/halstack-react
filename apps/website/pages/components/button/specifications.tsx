import Head from "next/head";
import type { ReactElement } from "react";
import ButtonPageLayout from "../../../screens/components/button/ButtonPageLayout";
import ButtonSpecsPage from "../../../screens/components/button/specs/ButtonSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Button Specs — Halstack Design System</title>
      </Head>
      <ButtonSpecsPage></ButtonSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <ButtonPageLayout>{page}</ButtonPageLayout>;
};

export default Specifications;
