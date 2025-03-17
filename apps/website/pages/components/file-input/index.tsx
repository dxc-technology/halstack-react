import Head from "next/head";
import type { ReactElement } from "react";
import FileInputPageLayout from "screens/components/file-input/FileInputPageLayout";
import FileInputOverviewPage from "screens/components/file-input/overview/FileInputOverviewPage";

const Index = () => {
  return (
    <>
      <Head>
        <title>File Input — Halstack Design System</title>
      </Head>
      <FileInputOverviewPage />
    </>
  );
};

Index.getLayout = (page: ReactElement) => <FileInputPageLayout>{page}</FileInputPageLayout>;

export default Index;
