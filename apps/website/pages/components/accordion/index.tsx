import Head from "next/head";
import { type ReactElement } from "react";
import AccordionPageLayout from "screens/components/accordion/AccordionPageLayout";
import AccordionOverviewPage from "screens/components/accordion/overview/AccordionOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Accordion — Halstack Design System</title>
    </Head>
    <AccordionOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <AccordionPageLayout>{page}</AccordionPageLayout>;

export default Index;
