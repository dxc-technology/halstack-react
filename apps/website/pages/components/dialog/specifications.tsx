import Head from "next/head";
import type { ReactElement } from "react";
import DialogPageLayout from "../../../screens/components/dialog/DialogPageLayout";
import DialogSpecsPage from "../../../screens/components/dialog/specs/DialogSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Dialog Specs — Halstack Design System</title>
      </Head>
      <DialogSpecsPage></DialogSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <DialogPageLayout>{page}</DialogPageLayout>;
};

export default Specifications;
