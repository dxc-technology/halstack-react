import Head from "next/head";
import type { ReactElement } from "react";
import PopoverOverviewPage from "screens/components/popover/overview/PopoverOverviewPage";
import PopoverPageLayout from "screens/components/popover/PopoverPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Popover — Halstack Design System</title>
    </Head>
    <PopoverOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <PopoverPageLayout>{page}</PopoverPageLayout>;

export default Index;
