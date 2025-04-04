import Head from "next/head";
import type { ReactElement } from "react";
import AccordionPageLayout from "screens/components/accordion/AccordionPageLayout";
import AccordionCodePage from "screens/components/accordion/code/AccordionCodePage";

const Code = () => (
  <>
    <Head>
      <title>Accordion code — Halstack Design System</title>
    </Head>
    <AccordionCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <AccordionPageLayout>{page}</AccordionPageLayout>;

export default Code;
