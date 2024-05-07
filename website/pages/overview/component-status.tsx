import Head from "next/head";
import ComponentStatusPage from "../../screens/overview/component-status/ComponentStatusPage";

const ComponentStatus = () => {
  return (
    <>
      <Head>
        <title>Component status — Halstack Design System</title>
      </Head>
      <ComponentStatusPage></ComponentStatusPage>
    </>
  );
};

export default ComponentStatus;
