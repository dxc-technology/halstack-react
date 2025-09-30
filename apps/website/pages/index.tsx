import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const { asPath, push } = useRouter();

  useEffect(() => {
    if (asPath === "/") {
      push("/overview/introduction").catch((err) => {
        console.error("Navigation error:", err);
      });
    }
  }, [asPath, push]);

  return <></>;
}
