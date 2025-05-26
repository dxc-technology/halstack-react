import Head from "next/head";
import type { ReactElement } from "react";
import PasswordInputOverviewPage from "screens/components/password-input/overview/PasswordInputOverviewPage";
import PasswordInputPageLayout from "screens/components/password-input/PasswordInputPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Password input — Halstack Design System</title>
    </Head>
    <PasswordInputOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <PasswordInputPageLayout>{page}</PasswordInputPageLayout>;

export default Index;
