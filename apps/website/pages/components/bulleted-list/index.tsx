import Head from "next/head";
import type { ReactElement } from "react";
import BulletedListPageLayout from "screens/components/bulleted-list/BulletedListPageLayout";
import BulletedListOverviewPage from "screens/components/bulleted-list/overview/BulletedListOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Bulleted List — Halstack Design System</title>
    </Head>
    <BulletedListOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <BulletedListPageLayout>{page}</BulletedListPageLayout>;

export default Index;
