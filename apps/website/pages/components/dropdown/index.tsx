import Head from "next/head";
import type { ReactElement } from "react";
import DropdownPageLayout from "../../../screens/components/dropdown/DropdownPageLayout";
import DropdownCodePage from "../../../screens/components/dropdown/code/DropdownCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Dropdown — Halstack Design System</title>
      </Head>
      <DropdownCodePage></DropdownCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <DropdownPageLayout>{page}</DropdownPageLayout>;
};

export default Index;
