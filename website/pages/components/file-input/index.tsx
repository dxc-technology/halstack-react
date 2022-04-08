import Head from "next/head";
import type { ReactElement } from "react";
import FileInputUsagePage from "../../../screens/components/file-input/usage/FileInputUsagePage";
import FileInputPageLayout from "../../../screens/components/file-input/FileInputPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>File Input — Halstack Design System</title>
      </Head>
      <FileInputUsagePage></FileInputUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <FileInputPageLayout>{page}</FileInputPageLayout>;
};

export default Usage;
