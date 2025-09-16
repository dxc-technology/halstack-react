import Head from "next/head";
import { ReactElement } from "react-markdown/lib/react-markdown";
import AvatarPageLayout from "screens/components/avatar/AvatarPageLayout";
import AvatarOverviewPage from "screens/components/avatar/overview/AvatarOverviewPage";

const Index = () => {
  <>
    <Head>
      <title>Avatar - Halstack Design System</title>
    </Head>
    <AvatarOverviewPage />
  </>;
};

Index.getLayout = (page: ReactElement) => <AvatarPageLayout>{page}</AvatarPageLayout>;

export default Index;
