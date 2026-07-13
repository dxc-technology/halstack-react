import * as Popover from "@radix-ui/react-popover";
import DxcIcon from "../icon/Icon";
import { BottomSelectProps } from "./types";
import styled from "@emotion/styled";
import { useEffect, useId, useRef, useState } from "react";
import Listbox from "../select/Listbox";
import { ListOptionType } from "../select/types";

const SelectContainer = styled.div<{ disabled: boolean }>`
  position: relative;
  display: inline-flex;
  height: var(--height-m);
  align-items: center;
  gap: var(--spacing-gap-s);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  padding: 0 var(--spacing-padding-xs);
  border: var(--border-width-s) var(--border-style-default) transparent;
  border-radius: var(--border-radius-s);

  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -2px;
  }
`;

const Select = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-gap-s);
`;

const SelectedValue = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-xs);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  color: var(--color-fg-neutral-dark);
`;

const ModelSelect = ({ options, disabled = false }: BottomSelectProps) => {
  const id = `select-${useId()}`;
  const listboxId = `${id}-listbox`;
  const labelId = `${id}-label`;
  const [selectedValue, setSelectedValue] = useState<string>(options[0]?.value ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalContainer(document?.getElementById(`${id}-portal`));
  }, [id]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option: ListOptionType) => {
    const selectedOption = options.find((opt) => opt.value === option.value);
    if (selectedOption) {
      setSelectedValue(option.value);
      setIsOpen(false);
      selectedOption.onSelect();
    }
  };

  // Convert BottomSelectProps options to ListOptionType format
  const listboxOptions: ListOptionType[] = options.map((opt) => ({
    label: opt.label ?? opt.value,
    value: opt.value,
    icon: typeof opt.icon === "string" ? opt.icon : undefined,
  }));

  const selectedOption = options.find((opt) => opt.value === selectedValue) ?? options[0];

  return (
    <>
      <SelectContainer
        disabled={disabled}
        onClick={toggleDropdown}
        ref={containerRef}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
          <Popover.Trigger asChild type={undefined}>
            <Select>
              <SelectedValue>
                {typeof selectedOption?.icon === "string" ? (
                  <DxcIcon icon={selectedOption.icon} />
                ) : (
                  selectedOption?.icon
                )}
                {selectedOption?.label ?? selectedOption?.value}
              </SelectedValue>
              <DxcIcon icon={isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} />
            </Select>
          </Popover.Trigger>
          {portalContainer && (
            <Popover.Portal container={portalContainer}>
              <Popover.Content side="bottom" sideOffset={4} align="start">
                <Listbox
                  ariaLabelledBy={labelId}
                  currentValue={selectedValue}
                  enableSelectAll={false}
                  handleOptionOnClick={handleOptionClick}
                  handleGroupOnClick={() => {}}
                  handleSelectAllOnClick={() => {}}
                  id={listboxId}
                  lastOptionIndex={listboxOptions.length - 1}
                  multiple={false}
                  optional={false}
                  optionalItem={{ label: "", value: "" }}
                  options={listboxOptions}
                  searchable={false}
                  selectionType="unchecked"
                  styles={{ width: "240px" }}
                  visualFocusIndex={-1}
                />
              </Popover.Content>
            </Popover.Portal>
          )}
        </Popover.Root>
      </SelectContainer>

      <div id={`${id}-portal`} style={{ position: "absolute" }} />
    </>
  );
};

export default ModelSelect;
