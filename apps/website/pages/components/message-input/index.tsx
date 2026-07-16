import Head from "next/head";
import type { ReactElement } from "react";
import MessageInputPageLayout from "screens/components/message-input/MessageInputPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Message Input — Halstack Design System</title>
    </Head>
  </>
);

Index.getLayout = (page: ReactElement) => <MessageInputPageLayout>{page}</MessageInputPageLayout>;

export default Index;
