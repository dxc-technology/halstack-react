import Head from "next/head";
import type { ReactElement } from "react";
import TagUsagePage from "../../../screens/components/tag/usage/TagUsagePage";
import TagPageLayout from "../../../screens/components/tag/TagPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Tag — Halstack Design System</title>
      </Head>
      <TagUsagePage></TagUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <TagPageLayout>{page}</TagPageLayout>;
};

export default Usage;
