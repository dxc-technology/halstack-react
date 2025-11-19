import Head from "next/head";
import { ReactElement } from "react-markdown/lib/react-markdown";
import AvatarPageLayout from "screens/components/avatar/AvatarPageLayout";
import AvatarCodePage from "screens/components/avatar/code/AvatarCodePage";

const Code = () => (
  <>
    <Head>
      <title>Avatar code - Halstack Design</title>
    </Head>
    <AvatarCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <AvatarPageLayout>{page}</AvatarPageLayout>;

export default Code;
