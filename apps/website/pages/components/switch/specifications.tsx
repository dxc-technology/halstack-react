import Head from "next/head";
import type { ReactElement } from "react";
import SwitchPageLayout from "../../../screens/components/switch/SwitchPageLayout";
import SwitchSpecsPage from "../../../screens/components/switch/specs/SwitchSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Switch Specs — Halstack Design System</title>
      </Head>
      <SwitchSpecsPage></SwitchSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <SwitchPageLayout>{page}</SwitchPageLayout>;
};

export default Specifications;
