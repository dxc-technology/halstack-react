import { useCallback, useRef, useState } from "react";
import { DxcContainer, DxcFlex, DxcPopover, DxcTextInput } from "@dxc-technology/halstack-react";
import styled from "@emotion/styled";
import { SketchPicker } from "react-color";

const ColorBox = styled.button<{ color: string }>`
  min-width: 71px;
  height: 71px;
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
  const [error, setError] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleChange = useCallback(
    (newColor: { hex: string }) => {
      setInputValue(newColor.hex);
      onChange(newColor.hex);
    },
    [onChange]
  );

  const handleInputChange = useCallback(
    ({ value }: { value: string }) => {
      setInputValue(value);
      // Solo propagar si es un hexadecimal válido (el patrón lo valida el DxcTextInput)
      const hexPattern = /^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/;
      if (hexPattern.test(value)) {
        onChange(value);
        setError("");
      }
    },
    [onChange]
  );

  const onBlur = useCallback(
    ({ value, error }: { value: string; error?: string }) => {
      let normalizedValue = value;
      if (value && !value.startsWith("#")) {
        normalizedValue = "#" + value;
        setInputValue(normalizedValue);

        const hexPattern = /^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/;
        if (hexPattern.test(normalizedValue)) {
          onChange(normalizedValue);
          setError("");
          return;
        }
      }
      setError(error || "");
    },
    [onChange]
  );

  return (
    <DxcContainer
      borderRadius="var(--border-radius-l)"
      border={{
        width: "var(--border-width-s)",
        style: "var(--border-style-default)",
        color: "var(--border-color-neutral-lighter)",
      }}
      padding="var(--spacing-padding-s)"
    >
      <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
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
              onChange={handleChange}
            />
          }
          hasTip
          side="bottom"
          asChild
        >
          <ColorBox onClick={() => setIsOpen((prev) => !prev)} ref={buttonRef} color={color} />
        </DxcPopover>
        <DxcContainer width="158px">
          <DxcTextInput
            label={label}
            helperText={helperText}
            value={inputValue}
            onChange={handleInputChange}
            size="fillParent"
            pattern="^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$"
            error={error}
            onBlur={onBlur}
            action={{
              icon: "Content_Copy",
              onClick: () => {
                navigator.clipboard.writeText(color).catch(() => {
                  alert("Failed attempt to copy the hex value.");
                });
              },
              title: "Copy the hex value",
            }}
          />
        </DxcContainer>
      </DxcFlex>
    </DxcContainer>
  );
};
