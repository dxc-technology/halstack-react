import Head from "next/head";
import type { ReactElement } from "react";
import HeadingPageLayout from "../../../screens/components/heading/HeadingPageLayout";
import HeadingSpecsPage from "../../../screens/components/heading/specs/HeadingSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Heading Specs — Halstack Design System</title>
      </Head>
      <HeadingSpecsPage></HeadingSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <HeadingPageLayout>{page}</HeadingPageLayout>;
};

export default Specifications;
