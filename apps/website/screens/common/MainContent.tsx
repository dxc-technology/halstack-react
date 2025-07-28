import { useToast } from "@dxc-technology/halstack-react";
import { ReactNode, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { responsiveSizes } from "./variables";

const MainContainer = styled.div`
  margin: 80px auto;
  max-width: 1124px;
  padding: 0 5%;

  @media (max-width: ${responsiveSizes.laptop}px) {
    margin: 80px 32px;
  }
`;

const pathVersion =
  process.env.NEXT_PUBLIC_SITE_VERSION == null
    ? null
    : process.env.NEXT_PUBLIC_SITE_VERSION === "next" || process.env.NODE_ENV === "development"
      ? 0
      : parseInt(process.env.NEXT_PUBLIC_SITE_VERSION.split(".")[0]!, 10);

export default function MainContent({ children }: { children: ReactNode }) {
  const toast = useToast();
  const [latestRelease, setLatestRelease] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://registry.npmjs.org/@dxc-technology/halstack-react/");
        const data = await response.json();
        const latestRelease = parseInt(data["dist-tags"].latest.split(".")[0], 10);
        setLatestRelease(latestRelease);
      } catch (error) {
        console.error("Error fetching version:", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (pathVersion && latestRelease && latestRelease > pathVersion) {
      toast.info({
        message: `Halstack ${latestRelease} is now available!`,
        action: {
          label: "Learn more",
          onClick: () => {
            if (window) {
              const currentUrl = window.location.href;
              const newUrl = currentUrl.replace(/halstack\/\d+\//, `halstack/${latestRelease}/`);
              window.location.href = newUrl;
            }
          },
        },
      });
    }
  }, [latestRelease, toast]);

  return <MainContainer>{children}</MainContainer>;
}
