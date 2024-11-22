import Head from "next/head";
import type { ReactElement } from "react";
import AccordionPageLayout from "screens/components/accordion/AccordionPageLayout";
import AccordionCodePage from "screens/components/accordion/code/AccordionCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Accordion — Halstack Design System</title>
      </Head>
      <AccordionCodePage></AccordionCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <AccordionPageLayout>{page}</AccordionPageLayout>;
};

export default Index;
