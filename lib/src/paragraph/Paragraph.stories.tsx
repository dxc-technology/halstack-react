import React from "react";
import Title from "../../.storybook/components/Title";
import DxcParagraph from "./Paragraph";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DarkContainer from "../../.storybook/components/DarkSection";

export default {
  title: "Paragraph",
  component: DxcParagraph,
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default Paragraph" level={4} />
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id eget
        nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu
        dignissim, fringilla turpis. Nullam luctus odio quis magna finibus, a pharetra magna euismod. Nullam efficitur
        semper pellentesque. Nulla eget arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit, elementum metus
        eu, ornare risus. Aenean neque nibh, vestibulum vitae elit vel, imperdiet suscipit leo. Curabitur blandit
        iaculis pretium. Fusce id imperdiet dui, ut laoreet justo. Sed maximus sollicitudin ipsum, et varius massa
        condimentum eget. Vivamus id mauris et nisl mattis consequat et id lectus. Quisque mollis lacinia nisl.
        Suspendisse sed quam tincidunt, commodo dolor vel, tincidunt nisl.
      </DxcParagraph>
    </ExampleContainer>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <Title title="Default Paragraph" theme="dark" level={4} />
        <DxcParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id eget
          nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu
          dignissim, fringilla turpis. Nullam luctus odio quis magna finibus, a pharetra magna euismod. Nullam efficitur
          semper pellentesque. Nulla eget arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit, elementum metus
          eu, ornare risus. Aenean neque nibh, vestibulum vitae elit vel, imperdiet suscipit leo. Curabitur blandit
          iaculis pretium. Fusce id imperdiet dui, ut laoreet justo. Sed maximus sollicitudin ipsum, et varius massa
          condimentum eget. Vivamus id mauris et nisl mattis consequat et id lectus. Quisque mollis lacinia nisl.
          Suspendisse sed quam tincidunt, commodo dolor vel, tincidunt nisl.
        </DxcParagraph>
      </DarkContainer>
    </BackgroundColorProvider>
  </>
);
