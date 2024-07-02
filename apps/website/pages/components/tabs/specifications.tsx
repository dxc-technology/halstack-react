import Head from "next/head";
import type { ReactElement } from "react";
import TabsSpecsPage from "../../../screens/components/tabs/specs/TabsSpecsPage";
import TabsPageLayout from "../../../screens/components/tabs/TabsPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Tabs Specs— Halstack Design System</title>
      </Head>
      <TabsSpecsPage></TabsSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <TabsPageLayout>{page}</TabsPageLayout>;
};

export default Specifications;
