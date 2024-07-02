import Head from "next/head";
import type { ReactElement } from "react";
import FlexPageLayout from "../../../screens/components/flex/FlexPageLayout";
import FlexSpecsPage from "../../../screens/components/flex/specs/FlexSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Flex Specs — Halstack Design System</title>
      </Head>
      <FlexSpecsPage></FlexSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <FlexPageLayout>{page}</FlexPageLayout>;
};

export default Specifications;
