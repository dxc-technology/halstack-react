import Head from "next/head";
import type { ReactElement } from "react";
import AccordionPageLayout from "../../../screens/components/accordion/AccordionPageLayout";
import AccordionUsagePage from "../../../screens/components/accordion/usage/AccordionUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Accordion Usage — Halstack Design System</title>
      </Head>
      <AccordionUsagePage></AccordionUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <AccordionPageLayout>{page}</AccordionPageLayout>;
};

export default Usage;
