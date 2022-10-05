import { DxcSpinner } from "@dxc-technology/halstack-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

export default function Index() {
  const { asPath, push } = useRouter();

  useEffect(() => {
    asPath === "/" && push("/overview/introduction");
  }, [asPath]);

  return (
    <LoadingContainer>
      {/* <DxcSpinner mode="overlay" label="Loading..."></DxcSpinner> */}
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
