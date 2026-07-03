import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent, useContext, useId, useRef, useState } from "react";
import styled from "@emotion/styled";
import PromptInputPropsType, { Item } from "./types";
import { inputStylesByStatePromptInput, isLengthIncorrect } from "./utils";
import DxcButton from "../button/Button";
import DxcChip from "../chip/Chip";
import DxcContainer from "../container/Container";
import DxcDropdown from "../dropdown/Dropdown";
import DxcFlex from "../flex/Flex";
import { HalstackLanguageContext } from "../HalstackContext";
import ErrorMessage from "../styles/forms/ErrorMessage";

const sizes = {
  small: "240px",
  medium: "360px",
  large: "480px",
  fillParent: "100%",
} as const;

const MessageInputContainer = styled.div<{ size: PromptInputPropsType["size"] }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-xs);
  max-height: 320px;
  box-shadow: 0 -24px 10px 4px rgba(255, 255, 255, 0.6);
  width: ${({ size = "medium" }) => sizes[size]};
`;

const MessageInput = styled.div<{
  disabled: Required<PromptInputPropsType>["disabled"];
  error: boolean;
  focused: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-gap-s);
  height: 100%;
  padding: var(--spacing-padding-m) var(--spacing-padding-xs);
  ${({ disabled, error, focused }) => inputStylesByStatePromptInput(disabled, error, focused)}
  overflow: hidden;
`;

const Input = styled.textarea`
  max-width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  resize: none;
  flex-grow: 1;
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  white-space: pre-wrap;
  word-break: break-word;
  overflow-y: auto;

  ::placeholder {
    color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-strong)")};
  }
  ${({ disabled }) => disabled && "cursor: not-allowed;"}
`;

const HelperText = styled.span<{ disabled: boolean; hasMargin?: boolean }>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
  ${({ hasMargin }) => hasMargin && "margin-bottom: var(--spacing-padding-xxs);"}
`;

const DxcMessageInput = ({
  allowFileUploads = false,
  defaultValue = "",
  disabled = false,
  error,
  isLoading,
  helperText,
  maxLength,
  minLength,
  placeholder = "",
  onBlur,
  onChange,
  value,
  onSubmit,
  size = "medium",
  topItems,
  onTopItemsChange,
  bottomActions = [],
  stop,
}: PromptInputPropsType) => {
  const inputId = `input-${useId()}`;
  const errorId = `error-${inputId}`;
  const translatedLabels = useContext(HalstackLanguageContext);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const inputContainerRef = useRef<HTMLDivElement | null>(null);
  const [innerValue, setInnerValue] = useState(defaultValue);
  const [innerTopItems, setInnerTopItems] = useState<Item[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const changeValue = (newValue: string) => {
    if (value == null) {
      setInnerValue(newValue);
    }
    if (isLengthIncorrect(newValue, minLength, maxLength)) {
      onChange?.({
        value: newValue,
        error: translatedLabels.formFields.lengthErrorMessage?.(minLength, maxLength),
      });
    } else {
      onChange?.({ value: newValue });
    }
  };

  const handleInputContainerOnClick = () => {
    inputRef.current?.focus();
  };
  const handleInputContainerOnMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    // Avoid input to lose the focus when the container is pressed
    if (document.activeElement === inputRef.current) {
      event.preventDefault();
    }
  };

  const handleInputOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const el = event.target;

    el.style.height = "auto";

    el.style.height = `${el.scrollHeight}px`;

    changeValue(el.value);
  };

  const handleInputOnFocus = () => {
    setIsInputFocused(true);
  };
  const handleInputOnBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    setIsInputFocused(false);
    if (isLengthIncorrect(event.target.value, minLength, maxLength)) {
      onBlur?.({
        value: event.target.value,
        error: translatedLabels.formFields.lengthErrorMessage?.(minLength, maxLength),
      });
    } else {
      onBlur?.({ value: event.target.value });
    }
  };
  const handleInputOnKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void handleSubmit();
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const addTopItems = (items: Item[]) => {
    const currentItems = topItems ?? innerTopItems;
    const newItems = [...currentItems, ...items];
    if (topItems == null) {
      setInnerTopItems(newItems);
    }
    onTopItemsChange?.(newItems);
  };

  const removeItem = (label: string) => {
    const currentItems = topItems ?? innerTopItems;
    const filteredItems = currentItems.filter((item) => item.label !== label);
    if (topItems == null) {
      setInnerTopItems(filteredItems);
    }
    onTopItemsChange?.(filteredItems);
  };

  const handleFilesChosen = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const formData = new FormData();
    Array.from(e.target.files).forEach((file) => formData.append("files", file));

    addTopItems(
      Array.from(e.target.files).map((file) => ({
        id: crypto.randomUUID(),
        label: file.name,
        prefixIcon: "description",
        disabled: disabled,
      }))
    );

    // TBD

    // const res = await fetch("/api/context-files", {
    //   method: "POST",
    //   body: formData,
    // });

    // const uploadedFiles = await res.json();

    e.target.value = "";
  };

  const handleSubmit = async () => {
    if (disabled || isLoading) return;

    const controller = new AbortController();

    try {
      const result = onSubmit?.(controller.signal);
      if (result instanceof Promise) {
        await result;
      }
    } catch (e) {
      if ((e as DOMException).name !== "AbortError") {
        throw e;
      }
    }
  };

  return (
    <MessageInputContainer size={size}>
      {helperText && (
        <HelperText disabled={disabled} hasMargin>
          {helperText}
        </HelperText>
      )}
      <MessageInput
        disabled={disabled}
        error={!!error}
        focused={isInputFocused}
        onClick={handleInputContainerOnClick}
        onMouseDown={handleInputContainerOnMouseDown}
        ref={inputContainerRef}
      >
        {allowFileUploads && (
          <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
            <DxcDropdown
              icon="add"
              options={[{ label: "Attach documents", value: "fileorphoto" }]}
              onSelectOption={handleFileSelect}
            />
            <input ref={fileInputRef} type="file" hidden multiple onChange={handleFilesChosen} />
            <DxcContainer overflow={{ x: "auto" }} width="100%">
              <DxcFlex gap="var(--spacing-gap-xs)">
                {(topItems ?? innerTopItems)?.map((item) => (
                  <DxcChip
                    label={item.label}
                    mode="dismissible"
                    prefix={item.prefixIcon}
                    onClick={() => removeItem(item.label)}
                    key={item.id}
                  />
                ))}
              </DxcFlex>
            </DxcContainer>
          </DxcFlex>
        )}
        <Input
          aria-errormessage={error ? errorId : undefined}
          aria-invalid={!!error}
          disabled={disabled}
          id={inputId}
          onBlur={handleInputOnBlur}
          onFocus={handleInputOnFocus}
          onChange={handleInputOnChange}
          onKeyDown={handleInputOnKeyDown}
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
          placeholder={placeholder}
          ref={inputRef}
          maxLength={maxLength}
          minLength={minLength}
          value={value ?? innerValue}
        />
        {/* TODO: Replace with space-between if there is dropdown */}
        <DxcFlex justifyContent="flex-end" alignItems="center">
          {/* <DxcDropdown
            label="Select a model"
            options={[{ label: "AA 2.0", value: "aa2.0" }]}
            onSelectOption={() => {}}
          /> */}
          {/* <DxcSelect options={[{ label: "AA 2.0", value: "aa2.0" }]} defaultValue="aa2.0" size="small" /> */}
          {/* TODO: Add model selection dropdown */}
          <DxcFlex gap="var(--spacing-gap-xs)">
            {bottomActions.map((action) => (
              <DxcButton
                icon={action.icon}
                size={{ height: "medium" }}
                disabled={disabled}
                onClick={action.onClick}
                title={!disabled ? (action.title ?? undefined) : undefined}
                mode="tertiary"
                key={action.id}
              />
            ))}
            <DxcButton
              icon={!isLoading ? "send" : "filled_stop"}
              size={{ height: "medium" }}
              disabled={disabled}
              onClick={!isLoading ? handleSubmit : stop}
              title={!isLoading ? "Submit" : "Stop"}
              mode="primary"
            />
          </DxcFlex>
        </DxcFlex>
      </MessageInput>
      {!disabled && typeof error === "string" && <ErrorMessage error={error} id={errorId} />}
    </MessageInputContainer>
  );
};

export default DxcMessageInput;
