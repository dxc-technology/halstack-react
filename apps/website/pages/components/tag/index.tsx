import Head from "next/head";
import type { ReactElement } from "react";
import TagCodePage from "screens/components/tag/code/TagCodePage";
import TagPageLayout from "screens/components/tag/TagPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Tag — Halstack Design System</title>
      </Head>
      <TagCodePage></TagCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <TagPageLayout>{page}</TagPageLayout>;
};

export default Index;
