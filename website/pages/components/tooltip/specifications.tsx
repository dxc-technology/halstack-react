import Head from "next/head";
import type { ReactElement } from "react";
import TooltipPageLayout from "../../../screens/components/tooltip/TooltipPageLayout";
import TooltipSpecsPage from "../../../screens/components/tooltip/specs/TooltipSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Tooltip Specs — Halstack Design System</title>
      </Head>
      <TooltipSpecsPage></TooltipSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <TooltipPageLayout>{page}</TooltipPageLayout>;
};

export default Specifications;
