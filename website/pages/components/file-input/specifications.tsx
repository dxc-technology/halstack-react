import Head from "next/head";
import type { ReactElement } from "react";
import FileInputSpecsPage from "../../../screens/components/file-input/specs/FileInputSpecsPage";
import FileInputPageLayout from "../../../screens/components/file-input/FileInputPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>File Input Specs — Halstack Design System</title>
      </Head>
      <FileInputSpecsPage></FileInputSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <FileInputPageLayout>{page}</FileInputPageLayout>;
};

export default Specifications;
