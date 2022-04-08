import Head from "next/head";
import type { ReactElement } from "react";
import ToggleGroupPageLayout from "../../../screens/components/toggle-group/ToggleGroupPageLayout";
import ToggleGroupSpecsPage from "../../../screens/components/toggle-group/specs/ToggleGroupSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Toggle Group Specs — Halstack Design System</title>
      </Head>
      <ToggleGroupSpecsPage></ToggleGroupSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <ToggleGroupPageLayout>{page}</ToggleGroupPageLayout>;
};

export default Specifications;
