import { useCallback, useRef, useState } from "react";
import { DxcHeading, DxcPopover, DxcTextInput } from "@dxc-technology/halstack-react";
import styled from "@emotion/styled";
import { SketchPicker } from "react-color";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-gap-s);
  padding: var(--spacing-padding-xs);
  border-radius: var(--border-radius-m);
  background-color: var(--color-bg-neutral-lightest);
  box-shadow: var(--shadow-100);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-gap-xs);
`;

const ColorBox = styled.button<{ color: string }>`
  width: 71px;
  height: 71px;
  border-radius: var(--border-radius-m);
  background-color: ${(props) => props.color};
  cursor: pointer;

  border: none;
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
    <CardWrapper>
      <ContentWrapper>
        <DxcHeading level={4} text={label} />
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
        <DxcTextInput
          label={label}
          helperText={helperText}
          value={inputValue}
          onChange={handleInputChange}
          size="fillParent"
          pattern="^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$"
          error={error}
          onBlur={onBlur}
        />
      </ContentWrapper>
    </CardWrapper>
  );
};
