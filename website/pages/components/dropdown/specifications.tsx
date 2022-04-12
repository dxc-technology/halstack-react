import Head from "next/head";
import type { ReactElement } from "react";
import DropdownPageLayout from "../../../screens/components/dropdown/DropdownPageLayout";
import DropdownSpecsPage from "../../../screens/components/dropdown/specs/DropdownSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Dropdown Specs — Halstack Design System</title>
      </Head>
      <DropdownSpecsPage></DropdownSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <DropdownPageLayout>{page}</DropdownPageLayout>;
};

export default Specifications;
