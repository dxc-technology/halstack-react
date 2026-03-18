import { useState } from "react";
import { DxcContainer, DxcFlex, DxcPopover, DxcTextInput } from "@dxc-technology/halstack-react";
import styled from "@emotion/styled";
import { SketchPicker } from "react-color";
import useCopyToClipboard from "hooks/useCopyToClipboard";

const ColorBox = styled.button<{ color: string }>`
  aspect-ratio: 1;
  height: 72px;
  border-radius: var(--border-radius-m);
  background-color: ${(props) => props.color};
  cursor: pointer;
  border: none;
  padding: var(--spacing-padding-none);

  &:focus-visible,
  &:focus {
    outline-style: solid;
    outline-width: var(--border-width-m);
    outline-color: var(--border-color-secondary-medium);
    outline-offset: 2px;
  }
`;

export const ColorCard = ({
  label,
  helperText,
  color,
  onChange,
}: {
  label: string;
  helperText: string;
  color: string;
  onChange: (color: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(color);
  const [error, setError] = useState<string>();

  const handleBlur = ({ value, error }: { value: string; error?: string }) => {
    setError(error);
    if (!error) {
      onChange(value);
    }
  };

  const handleCopy = useCopyToClipboard();

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
      <DxcFlex alignItems="start" gap="var(--spacing-gap-s)">
        <DxcPopover
          isOpen={isOpen}
          onOpen={() => setIsOpen(true)}
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
          <ColorBox
            onClick={() => setIsOpen((prev) => !prev)}
            color={color}
            tabIndex={0}
            aria-label={`Open color picker for ${label}`}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
          />
        </DxcPopover>
        <DxcContainer minWidth="155px">
          <DxcTextInput
            label={label}
            helperText={helperText}
            value={inputValue}
            onChange={({ value }) => setInputValue(value)}
            size="fillParent"
            pattern="^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$"
            error={error}
            onBlur={handleBlur}
            action={{
              icon: "Content_Copy",
              onClick: () => handleCopy(inputValue),
              title: "Copy the hex value",
            }}
          />
        </DxcContainer>
      </DxcFlex>
    </DxcContainer>
  );
};
