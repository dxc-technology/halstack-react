import Head from "next/head";
import type { ReactElement } from "react";
import FooterPageLayout from "../../../screens/components/footer/FooterPageLayout";
import FooterSpecsPage from "../../../screens/components/footer/specs/FooterSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Footer Specs — Halstack Design System</title>
      </Head>
      <FooterSpecsPage></FooterSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <FooterPageLayout>{page}</FooterPageLayout>;
};

export default Specifications;
