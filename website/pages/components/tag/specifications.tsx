import Head from "next/head";
import type { ReactElement } from "react";
import TagSpecsPage from "../../../screens/components/tag/specs/TagSpecsPage";
import TagPageLayout from "../../../screens/components/tag/TagPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Tag Specs — Halstack Design System</title>
      </Head>
      <TagSpecsPage></TagSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <TagPageLayout>{page}</TagPageLayout>;
};

export default Specifications;
