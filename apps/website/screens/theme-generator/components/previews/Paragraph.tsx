import React from "react";
import { DxcParagraph, DxcTypography } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const Paragraph = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcParagraph>
        Lorem ipsum dolor sit amet,{" "}
        <DxcTypography fontWeight="700" display="inline">
          consectetur adipiscing elit.
        </DxcTypography>{" "}
        Nulla id tortor sit amet velit auctor cursus id eget nisl. Vivamus luctus egestas eros, at mattis libero
        eleifend ac. Integer vel urna rutrum, pretium arcu dignissim, fringilla turpis. Nullam luctus odio quis magna
        finibus, a pharetra magna euismod. Nullam efficitur semper pellentesque. Nulla eget arcu ac diam fringilla
        vehicula. In imperdiet nisl hendrerit, elementum metus eu, ornare risus. Aenean neque nibh, vestibulum vitae
        elit vel, imperdiet suscipit leo. Curabitur blandit iaculis pretium. Fusce id imperdiet dui, ut laoreet justo.
        Sed maximus sollicitudin ipsum, et varius massa condimentum eget. Vivamus id mauris et nisl mattis consequat et
        id lectus. Quisque mollis lacinia nisl. Suspendisse sed quam tincidunt, commodo dolor vel, tincidunt nisl.
      </DxcParagraph>
    </Mode>
  </PreviewContainer>
);

export default Paragraph;
