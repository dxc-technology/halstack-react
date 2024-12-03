import Head from "next/head";
import type { ReactElement } from "react";
import PasswordInputCodePage from "screens/components/password-input/code/PasswordInputCodePage";
import PasswordInputPageLayout from "screens/components/password-input/PasswordInputPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Password Input — Halstack Design System</title>
      </Head>
      <PasswordInputCodePage></PasswordInputCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <PasswordInputPageLayout>{page}</PasswordInputPageLayout>;
};

export default Index;
