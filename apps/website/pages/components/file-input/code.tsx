import Head from "next/head";
import type { ReactElement } from "react";
import FileInputCodePage from "screens/components/file-input/code/FileInputCodePage";
import FileInputPageLayout from "screens/components/file-input/FileInputPageLayout";

const Code = () => {
  return (
    <>
      <Head>
        <title>File Input Code — Halstack Design System</title>
      </Head>
      <FileInputCodePage></FileInputCodePage>
    </>
  );
};

Code.getLayout = function getLayout(page: ReactElement) {
  return <FileInputPageLayout>{page}</FileInputPageLayout>;
};

export default Code;
