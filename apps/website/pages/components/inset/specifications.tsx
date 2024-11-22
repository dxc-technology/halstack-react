import Head from "next/head";
import type { ReactElement } from "react";
import InsetPageLayout from "screens/components/inset/InsetPageLayout";
import InsetSpecsPage from "screens/components/inset/specs/InsetSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Inset Specs — Halstack Design System</title>
      </Head>
      <InsetSpecsPage></InsetSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <InsetPageLayout>{page}</InsetPageLayout>;
};

export default Specifications;
