import Head from "next/head";
import type { ReactElement } from "react";
import AccordionPageLayout from "../../../screens/components/accordion/AccordionPageLayout";
import AccordionSpecsPage from "../../../screens/components/accordion/specs/AccordionSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Accordion Specs — Halstack Design System</title>
      </Head>
      <AccordionSpecsPage></AccordionSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <AccordionPageLayout>{page}</AccordionPageLayout>;
};

export default Specifications;
