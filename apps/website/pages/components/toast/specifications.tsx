import Head from "next/head";
import type { ReactElement } from "react";
import ToastSpecsPage from "../../../screens/components/toast/specs/ToastSpecsPage";
import ToastPageLayout from "../../../screens/components/toast/ToastPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Toast Specs — Halstack Design System</title>
      </Head>
      <ToastSpecsPage></ToastSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <ToastPageLayout>{page}</ToastPageLayout>;
};

export default Specifications;
