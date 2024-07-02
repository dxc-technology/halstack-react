import Head from "next/head";
import type { ReactElement } from "react";
import ChipSpecsPage from "../../../screens/components/chip/specs/ChipSpecsPage";
import ChipPageLayout from "../../../screens/components/chip/ChipPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Chip Specs — Halstack Design System</title>
      </Head>
      <ChipSpecsPage></ChipSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <ChipPageLayout>{page}</ChipPageLayout>;
};

export default Specifications;
