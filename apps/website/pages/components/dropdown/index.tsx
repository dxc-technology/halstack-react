import Head from "next/head";
import type { ReactElement } from "react";
import DropdownPageLayout from "screens/components/dropdown/DropdownPageLayout";
import DropdownOverviewPage from "screens/components/dropdown/overview/DropdownOverviewPage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Dropdown — Halstack Design System</title>
      </Head>
      <DropdownOverviewPage />
    </>
  );
};

Index.getLayout = (page: ReactElement) => <DropdownPageLayout>{page}</DropdownPageLayout>;

export default Index;
