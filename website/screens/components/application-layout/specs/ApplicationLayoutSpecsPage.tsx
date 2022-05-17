import Image from "@/common/Image";
import {
  DxcLink,
  DxcList,
  DxcStack,
  DxcText,
} from "@dxc-technology/halstack-react";
import Link from "next/link";
import DocFooter from "../../../common/DocFooter";
import HeadingLink from "../../../common/HeadingLink";
import ApplicationLayoutAnatomy from "./images/application_layout_anatomy.png";

const ApplicationLayoutSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Anatomy</HeadingLink>
        <Image src={ApplicationLayoutAnatomy} alt="Alert anatomy" />
        <DxcList type="number">
          <DxcText>Header</DxcText>
          <DxcText>Main content</DxcText>
          <DxcText>Footer</DxcText>
          <DxcText>Sidenav</DxcText>
        </DxcList>
      </DxcStack>

      <DxcStack gutter="large">
        <HeadingLink level={3}>Specifications</HeadingLink>
        <DxcText>
          The specifications of each of the compound component children are
          defined separately:
        </DxcText>
        <DxcList>
          <DxcText>
            <DxcLink>
              <Link href="/components/header/specifications">
                <a>Header</a>
              </Link>
            </DxcLink>
          </DxcText>
          <DxcText>
            <DxcLink>
              <Link href="/components/sidenav/specifications">
                <a>Sidenav</a>
              </Link>
            </DxcLink>
          </DxcText>
          <DxcText>
            <DxcLink>
              <Link href="/components/footer/specifications">
                <a>Footer</a>
              </Link>
            </DxcLink>
          </DxcText>
        </DxcList>
      </DxcStack>

      <DxcStack>
        <HeadingLink level={4}>WAI-ARIA</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA Authoring practices 1.2 -{" "}
            <DxcLink
              newWindow
              href="https://www.w3.org/WAI/perspective-videos/layout/"
            >
              Clear Layout and Design
            </DxcLink>
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/alert/specs/ApplicationLayoutSpecsPage.tsx" />
    </DxcStack>
  );
};

export default ApplicationLayoutSpecsPage;
