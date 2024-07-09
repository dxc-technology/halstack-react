import { ComponentProps } from "react";
import { DxcApplicationLayout, DxcDropdown, DxcFlex, DxcLink, DxcParagraph } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

type dropdownTypes = ComponentProps<typeof DxcDropdown>;

const options: dropdownTypes["options"] = [
  {
    value: "1",
    label: "Home",
  },
  {
    value: "2",
    label: "Settings",
  },
  {
    value: "3",
    label: "Log out",
  },
];

const Header = () => (
  <PreviewContainer>
    <DxcParagraph>
      The responsive elements of the Header component (both the hamburger trigger and the responsive menu) will only
      appear when the window is resized to a smaller size. Keep this in mind when testing your theme's input values.
    </DxcParagraph>
    <Mode text="Default">
      <div style={{ width: "100%" }}>
        <DxcApplicationLayout.Header
          content={
            <DxcFlex alignItems="center" gap="4rem">
              <DxcLink>Link 1</DxcLink>
              <DxcLink>Link 2</DxcLink>
              <DxcLink>Link 3</DxcLink>
              <DxcApplicationLayout.Header.Dropdown
                options={options}
                label="Default Dropdown"
                onSelectOption={() => {}}
              />
            </DxcFlex>
          }
          responsiveContent={() => (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos saepe provident nihil exercitationem
              laborum unde officiis. Eum unde cum quis soluta dolorum ratione, cumque harum amet quaerat vitae
              consectetur.
            </p>
          )}
          underlined
        />
      </div>
    </Mode>
  </PreviewContainer>
);

export default Header;
