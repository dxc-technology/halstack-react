import Head from "next/head";
import type { ReactElement } from "react";
import TagPageLayout from "../../../screens/components/tag/TagPageLayout";
import TagUsagePage from "../../../screens/components/tag/usage/TagUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Tag Usage — Halstack Design System</title>
      </Head>
      <TagUsagePage></TagUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <TagPageLayout>{page}</TagPageLayout>;
};

export default Usage;
