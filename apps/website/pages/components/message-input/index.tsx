import Head from "next/head";
import type { ReactElement } from "react";
import MessageInputPageLayout from "screens/components/message-input/MessageInputPageLayout";
import MessageInputOverviewPage from "screens/components/message-input/overview/MessageInputOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Message Input — Halstack Design System</title>
    </Head>
    <MessageInputOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <MessageInputPageLayout>{page}</MessageInputPageLayout>;

export default Index;
