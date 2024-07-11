import Head from "next/head";
import type { ReactElement } from "react";
import LinkPageLayout from "../../../screens/components/link/LinkPageLayout";
import LinkSpecsPage from "../../../screens/components/link/specs/LinkSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Link Specs — Halstack Design System</title>
      </Head>
      <LinkSpecsPage></LinkSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <LinkPageLayout>{page}</LinkPageLayout>;
};

export default Specifications;
