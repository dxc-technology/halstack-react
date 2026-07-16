import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import styled from "@emotion/styled";
import PromptInputPropsType from "./types";
import { inputStylesByStatePromptInput, isLengthIncorrect } from "./utils";
import DxcButton from "../button/Button";
import DxcChip from "../chip/Chip";
import DxcContainer from "../container/Container";
import DxcDropdown from "../dropdown/Dropdown";
import DxcFlex from "../flex/Flex";
import { HalstackLanguageContext } from "../HalstackContext";
import ErrorMessage from "../styles/forms/ErrorMessage";
import { useVoiceTranscription } from "./useVoiceTranscription";
import DxcSelect from "../select/Select";

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
  focus: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-gap-s);
  height: 100%;
  padding: var(--spacing-padding-m) var(--spacing-padding-xs);
  ${({ disabled, error, focus }) => inputStylesByStatePromptInput(disabled, error, focus)}
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

const DxcMessageInput = ({
  allowVoiceInput = false,
  callbackFile,
  defaultValue = "",
  disabled = false,
  error,
  files,
  isGenerating = false,
  maxLength,
  minLength,
  modelList,
  onBlur,
  onButtonClick,
  onChange,
  onRecordingChange,
  placeholder = "",
  size = "medium",
  tabIndex,
  value,
}: PromptInputPropsType) => {
  const inputId = `input-${useId()}`;
  const errorId = `error-${inputId}`;
  const translatedLabels = useContext(HalstackLanguageContext);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const inputContainerRef = useRef<HTMLDivElement | null>(null);
  const [innerValue, setInnerValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { transcript, isRecording, startRecording, stopRecording } = useVoiceTranscription();

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
    setIsFocused(true);
  };

  const handleInputOnBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
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

  const handleFileInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []).map((file) => ({
      label: file.name,
      icon: "insert_drive_file",
    }));
    const nextFiles = [...(files ?? []), ...selectedFiles];
    callbackFile?.(nextFiles);
    event.target.value = "";
  };

  const removeItem = (itemIndex: number) => {
    const nextFiles = (files ?? []).filter((_, index) => index !== itemIndex);
    callbackFile?.(nextFiles);
  };

  const baseTextRef = useRef("");

  const toggleVoiceRecognition = () => {
    if (disabled) return;

    if (isRecording) {
      stopRecording();
    } else {
      baseTextRef.current = value ?? innerValue;
      startRecording();
    }
  };

  useEffect(() => {
    if (!transcript) return;

    const combined = baseTextRef.current ? `${baseTextRef.current} ${transcript}` : transcript;
    changeValue(combined);

    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [transcript, changeValue]);

  useEffect(() => {
    if (onRecordingChange) {
      onRecordingChange(isRecording);
    }
  }, [isRecording, onRecordingChange]);

  const handleSubmit = async () => {
    if (disabled || isGenerating) return;

    const controller = new AbortController();

    try {
      const result = onButtonClick?.("submit", controller.signal);
      if (result instanceof Promise) {
        await result;
      }
    } catch (e) {
      if ((e as DOMException).name !== "AbortError") {
        throw e;
      }
    }
  };

  const handleStop = () => {
    if (disabled) return;
    void onButtonClick?.("stop");
  };

  return (
    <MessageInputContainer size={size}>
      <MessageInput
        disabled={disabled}
        error={!!error}
        focus={isFocused}
        onClick={handleInputContainerOnClick}
        onMouseDown={handleInputContainerOnMouseDown}
        ref={inputContainerRef}
      >
        {files && (
          <DxcContainer overflow={{ x: "auto" }} width="100%">
            <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
              <DxcDropdown
                options={[{ label: "Attach documents", value: "fileorphoto" }]}
                onSelectOption={handleFileSelect}
                icon="add"
                disabled={isGenerating || disabled}
                caretHidden
              />
              <input ref={fileInputRef} type="file" hidden multiple onChange={handleFileInputOnChange} />
              {(files ?? []).map((item, index) => (
                <DxcChip
                  key={index}
                  label={item.label}
                  mode="dismissible"
                  prefix={item.icon ?? "description"}
                  onClick={() => removeItem(index)}
                />
              ))}
            </DxcFlex>
          </DxcContainer>
        )}
        <Input
          aria-errormessage={error ? errorId : undefined}
          aria-invalid={!!error}
          disabled={isGenerating || disabled}
          id={inputId}
          onBlur={handleInputOnBlur}
          onChange={handleInputOnChange}
          onFocus={handleInputOnFocus}
          onKeyDown={handleInputOnKeyDown}
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
          placeholder={placeholder}
          ref={inputRef}
          tabIndex={tabIndex}
          maxLength={maxLength}
          minLength={minLength}
          value={value ?? innerValue}
        />
        <DxcFlex justifyContent={modelList ? "space-between" : "flex-end"} alignItems="center">
          {modelList && (
            <DxcSelect
              // size="fitContent"
              options={modelList.map((option) => ({ label: option.label ?? option.value, value: option.value }))}
              disabled={isGenerating || disabled}
              defaultValue={modelList[0]?.value ?? ""}
              onChange={(val) => {
                const selectedOption = modelList.find((option) => option.value === val.value);
                selectedOption?.onSelect();
              }}
            />
          )}

          <DxcFlex gap="var(--spacing-gap-xs)">
            {allowVoiceInput && (
              <DxcButton
                icon={isRecording ? "filled_pause" : "mic"}
                size={{ height: "medium" }}
                mode="tertiary"
                disabled={isGenerating || disabled}
                onClick={toggleVoiceRecognition}
                title={isRecording ? "Stop recording" : "Start voice input"}
                aria-label={isRecording ? "Stop recording" : "Start voice input"}
              />
            )}

            <DxcButton
              icon={!isGenerating ? "send" : "filled_stop"}
              size={{ height: "medium" }}
              disabled={disabled}
              onClick={!isGenerating ? handleSubmit : handleStop}
              title={!isGenerating ? "Submit" : "Stop"}
            />
          </DxcFlex>
        </DxcFlex>
      </MessageInput>
      {!disabled && typeof error === "string" && <ErrorMessage error={error} id={errorId} />}
    </MessageInputContainer>
  );
};

export default DxcMessageInput;
