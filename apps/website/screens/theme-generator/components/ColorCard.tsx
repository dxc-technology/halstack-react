import { useState } from "react";
import { DxcContainer, DxcFlex, DxcPopover, DxcTextInput } from "@dxc-technology/halstack-react";
import styled from "@emotion/styled";
import { SketchPicker } from "react-color";

const ColorBox = styled.button<{ color: string }>`
  aspect-ratio: 1 / 1;
  height: 72.8px;
  border-radius: var(--border-radius-m);
  background-color: ${(props) => props.color};
  cursor: pointer;
  border: none;
  padding: var(--spacing-padding-none);
`;

interface ColorCardProps {
  label: string;
  helperText: string;
  color: string;
  onChange: (color: string) => void;
}

export const ColorCard = ({ label, helperText, color, onChange }: ColorCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(color);
  const [error, setError] = useState<string>();

  const handleInputChange = ({ value }: { value: string }) => {
    setInputValue(value);
  };

  const handleBlur = ({ value, error }: { value: string; error?: string }) => {
    setError(error);
    if (!error) {
      onChange(value);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color).catch(() => {
      setError("Could not copy to clipboard");
    });
  };

  return (
    <DxcContainer
      height="fit-content"
      borderRadius="var(--border-radius-l)"
      border={{
        width: "var(--border-width-s)",
        style: "var(--border-style-default)",
        color: "var(--border-color-neutral-lighter)",
      }}
      padding="var(--spacing-padding-s)"
    >
      <DxcFlex alignItems="stretch" gap="var(--spacing-gap-s)" fullHeight>
        <DxcPopover
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          popoverContent={
            <SketchPicker
              styles={{
                default: {
                  picker: {
                    backgroundColor: "var(--color-bg-neutral-lightest)",
                    boxShadow: "none ",
                  },
                },
              }}
              color={color}
              disableAlpha={true}
              onChange={(newColor) => {
                setInputValue(newColor.hex);
                onChange(newColor.hex);
              }}
            />
          }
          hasTip
          side="bottom"
          asChild
        >
          <ColorBox onClick={() => setIsOpen((prev) => !prev)} color={color} />
        </DxcPopover>
        <DxcTextInput
          label={label}
          helperText={helperText}
          value={inputValue}
          onChange={handleInputChange}
          size="fillParent"
          pattern="^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$"
          error={error}
          onBlur={handleBlur}
          action={{
            icon: "Content_Copy",
            onClick: handleCopy,
            title: "Copy the hex value",
          }}
        />
      </DxcFlex>
    </DxcContainer>
  );
};
