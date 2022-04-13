import Head from "next/head";
import type { ReactElement } from "react";
import DropdownPageLayout from "../../../screens/components/dropdown/DropdownPageLayout";
import DropdownUsagePage from "../../../screens/components/dropdown/usage/DropdownUsagePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Dropdown — Halstack Design System</title>
      </Head>
      <DropdownUsagePage></DropdownUsagePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <DropdownPageLayout>{page}</DropdownPageLayout>;
};

export default Index;
