import Head from "next/head";
import type { ReactElement } from "react";
import MessageInputCodePage from "screens/components/message-input/code/MessageInputCodePage";
import MessageInputPageLayout from "screens/components/message-input/MessageInputPageLayout";

const Code = () => (
  <>
    <Head>
      <title>Message Input code — Halstack Design System</title>
    </Head>
    <MessageInputCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <MessageInputPageLayout>{page}</MessageInputPageLayout>;

export default Code;
