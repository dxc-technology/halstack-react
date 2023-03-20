import Head from "next/head";
import type { ReactElement } from "react";
import FileInputPageLayout from "../../../screens/components/file-input/FileInputPageLayout";
import FileInputUsagePage from "../../../screens/components/file-input/usage/FileInputUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>File Input Usage — Halstack Design System</title>
      </Head>
      <FileInputUsagePage></FileInputUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <FileInputPageLayout>{page}</FileInputPageLayout>;
};

export default Usage;
