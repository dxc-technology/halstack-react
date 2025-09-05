import Head from "next/head";
import type { ReactElement } from "react";
import DropdownPageLayout from "screens/components/dropdown/DropdownPageLayout";
import DropdownCodePage from "screens/components/dropdown/code/DropdownCodePage";

const Code = () => {
  return (
    <>
      <Head>
        <title>Dropdown code — Halstack Design System</title>
      </Head>
      <DropdownCodePage />
    </>
  );
};

Code.getLayout = (page: ReactElement) => <DropdownPageLayout>{page}</DropdownPageLayout>;

export default Code;
