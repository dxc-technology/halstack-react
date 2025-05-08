import { DxcContainer, DxcFlex, DxcInset, DxcToggleGroup } from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const refText = useRef(null);

  const onChange = (selectedValue) => {
    if (refText.current) {
      refText.current.style.fontWeight = "normal";
      refText.current.style.fontStyle = "normal";
      refText.current.style.textDecoration = "none";
      refText.current.style.textAlign = "left";
      selectedValue.forEach((textOption) => {
        switch (textOption) {
          case 1:
            refText.current.style.fontWeight = "bold";
            break;
          case 2:
            refText.current.style.fontStyle = "italic";
            break;
          case 3:
            refText.current.style.textDecoration = "underline";
            break;
          case 4:
            refText.current.style.textAlign = "left";
            break;
          case 5:
            refText.current.style.textAlign = "center";
            break;
          case 6:
            refText.current.style.textAlign = "right";
            break;
          default:
            break;
        }
      });
    }
  }

  const options = [
    {
      value: 1,
      icon: "format_bold",
      title: "Bold",
    },
    {
      value: 2,
      icon: "format_italic",
      title: "Italic",
    },
    {
      value: 3,
      icon: "format_underlined",
      title: "Underlined",
    },
    {
      value: 4,
      icon: "format_align_left",
      title: "Align left",
    },
    {
      value: 5,
      icon: "format_align_center",
      title: "Align center",
    },
    {
      value: 6,
      icon: "format_align_right",
      title: "Align right",
    },
  ];

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-xxl)">
        <DxcToggleGroup
          multiple
          onChange={onChange}
          options={options}
          orientation="vertical"
        />
        <DxcContainer 
          width="100%" 
          background={{ color: "var(--border-color-neutral-brighter)" }}
          border={{ 
            color: "var(--border-color-neutral-strong)",
            style: "var(--border-style-default)",
            width: "var(--border-width-s)"
          }}
          borderRadius="var(--border-radius-m)"
          padding="var(--spacing-padding-m)"
        >
          <p ref={refText} style={{ margin: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </DxcContainer>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcContainer,
  DxcFlex,
  DxcInset,
  DxcToggleGroup,
  useRef
};

export default { code, scope };
