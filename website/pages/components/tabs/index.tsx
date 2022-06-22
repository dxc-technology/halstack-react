import Head from "next/head";
import type { ReactElement } from "react";
import TabsCodePage from "../../../screens/components/tabs/code/TabsCodePage";
import TabsPageLayout from "../../../screens/components/tabs/TabsPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Tabs — Halstack Design System</title>
      </Head>
      <TabsCodePage></TabsCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <TabsPageLayout>{page}</TabsPageLayout>;
};

export default Index;
