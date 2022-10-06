import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const { asPath, push } = useRouter();

  useEffect(() => {
    asPath === "/" && push("/overview/introduction");
  }, [asPath]);

  return <></>;
}
