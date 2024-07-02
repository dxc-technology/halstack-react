import Head from "next/head";
import type { ReactElement } from "react";
import TypographyPageLayout from "../../../screens/components/typography/TypographyPageLayout";
import TypographySpecsPage from "../../../screens/components/typography/specs/TypographySpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Typography Specs — Halstack Design System</title>
      </Head>
      <TypographySpecsPage></TypographySpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <TypographyPageLayout>{page}</TypographyPageLayout>;
};

export default Specifications;
