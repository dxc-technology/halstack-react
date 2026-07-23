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
import scrollbarStyles from "../styles/scroll";
import PromptInputPropsType from "./types";
import { getSelectedOption, inputStylesByStatePromptInput, isLengthOutOfRange } from "./utils";
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
  width: ${({ size = "medium" }) => sizes[size]};
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-xs);
`;

const MessageInput = styled.div<{
  disabled: Required<PromptInputPropsType>["disabled"];
  error: boolean;
  focus: boolean;
  hasFiles?: boolean;
}>`
  width: 100%;
  max-height: 320px;
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-rows: ${({ hasFiles }) =>
    hasFiles ? "minmax(36px, 40px) minmax(0, 1fr) 34px" : "minmax(0, 1fr) 34px"};
  gap: var(--spacing-gap-s);
  padding: var(--spacing-padding-m) var(--spacing-padding-xs);
  background-color: var(--color-bg-neutral-lightest);
  box-shadow: 0 -24px 10px 4px rgba(255, 255, 255, 0.6);
  ${({ disabled, error, focus }) => inputStylesByStatePromptInput(disabled, error, focus)}
  overflow: hidden;
`;

const FilesContainer = styled.div`
  min-height: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-xs);
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 4px;

  ${scrollbarStyles};
  &::-webkit-scrollbar {
    height: 4px;
  }
`;

const MessageArea = styled.textarea<{ isRecording?: boolean }>`
  min-height: 20px;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  field-sizing: content;
  resize: none;
  color: ${({ disabled, isRecording }) =>
    isRecording ? "transparent" : disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)"};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  white-space: pre-wrap;
  word-break: break-word;
  overflow-y: auto;
  box-sizing: border-box;

  ::placeholder {
    color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-strong)")};
  }
  ${({ disabled }) => disabled && "cursor: not-allowed;"}

  ${scrollbarStyles};
  &::-webkit-scrollbar {
    width: 4px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;

const TranscriptOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  white-space: pre-wrap;
  word-break: break-word;
  overflow-y: auto;
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);

  ${scrollbarStyles};
  &::-webkit-scrollbar {
    width: 4px;
  }
`;

const HighlightedText = styled.span`
  color: var(--color-fg-neutral-strong);
`;

const DxcMessageInput = ({
  allowRecording = false,
  callbackFile,
  defaultValue = "",
  disabled = false,
  error,
  files,
  isGenerating = false,
  maxLength,
  minLength,
  selectOptions,
  onBlur,
  onButtonClick,
  onChange,
  placeholder = "",
  size = "medium",
  tabIndex,
  value,
}: PromptInputPropsType) => {
  const languageContext = useContext(HalstackLanguageContext);
  const locale = languageContext.locale ?? "en-US";
  const inputId = `input-${useId()}`;
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [innerValue, setInnerValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const {
    transcript,
    isRecording,
    startRecording,
    stopRecording,
    resetTranscript,
    error: transcriptError,
  } = useVoiceTranscription({
    lang: locale,
  });
  const dropdownOptions = [{ label: languageContext.labels.messageInput.attachFileButtonTitle, value: "fileorphoto" }];

  const getLengthError = (val: string) =>
    isLengthOutOfRange(val, minLength, maxLength)
      ? languageContext.labels.formFields.lengthErrorMessage?.(minLength, maxLength)
      : undefined;

  const getError = (val: string) => transcriptError ?? getLengthError(val);

  const changeValue = (newValue: string) => {
    if (value == null) setInnerValue(newValue);
    onChange?.({ value: newValue, error: getError(newValue) });
  };

  const handleInputContainerOnClick = () => inputRef.current?.focus();

  const handleInputContainerOnMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (document.activeElement === inputRef.current) event.preventDefault();
  };

  const handleInputOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    changeValue(event.target.value);
  };

  const handleInputOnFocus = () => setIsFocused(true);

  const handleInputOnBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);

    onBlur?.({ value: event.target.value, error: getError(event.target.value) });
  };

  const handleFileSelect = () => fileInputRef.current?.click();

  const handleFileInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []).map((file) => ({
      label: file.name,
      icon: "insert_drive_file",
    }));
    callbackFile?.([...(files ?? []), ...selectedFiles]);
    event.target.value = "";
  };

  const removeItem = (itemIndex: number) => callbackFile?.((files ?? []).filter((_, index) => index !== itemIndex));

  const baseTextRef = useRef("");

  const toggleVoiceRecognition = () => {
    if (disabled) return;

    if (isRecording) {
      stopRecording();
      resetTranscript();
    } else {
      baseTextRef.current = value ?? innerValue;
      startRecording();
    }
  };

  // Handle transcript updates and scroll synchronization
  useEffect(() => {
    if (!transcript) return;

    const combined = baseTextRef.current ? `${baseTextRef.current} ${transcript}` : transcript;
    changeValue(combined);

    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
      if (overlayRef.current) overlayRef.current.scrollTop = inputRef.current.scrollTop;
    }
  }, [transcript, changeValue]);

  useEffect(() => {
    const textarea = inputRef.current;
    const overlay = overlayRef.current;
    if (!textarea || !overlay || !isRecording) return;

    overlay.scrollTop = textarea.scrollTop;
    const handleScroll = () => (overlay.scrollTop = textarea.scrollTop);

    textarea.addEventListener("scroll", handleScroll);
    return () => textarea.removeEventListener("scroll", handleScroll);
  }, [isRecording]);

  const handleSubmit = () => {
    if (!disabled && !isGenerating)
      onButtonClick?.({
        type: "submit",
        value: value ?? innerValue,
        files: files,
        selectedOption: selectOptions && getSelectedOption(selectOptions),
      });
  };

  const handleStop = () => {
    if (!disabled) onButtonClick?.({ type: "stop" });
  };

  const handleInputOnKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!disabled && !isGenerating && event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <MessageInputContainer size={size}>
      <MessageInput
        disabled={disabled}
        error={!!error}
        focus={isFocused}
        hasFiles={files && typeof callbackFile === "function"}
        onClick={handleInputContainerOnClick}
        onMouseDown={handleInputContainerOnMouseDown}
      >
        {files && typeof callbackFile === "function" && (
          <FilesContainer>
            <DxcDropdown
              options={dropdownOptions}
              onSelectOption={handleFileSelect}
              icon="add"
              disabled={isGenerating || disabled || isRecording}
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
          </FilesContainer>
        )}
        <InputWrapper>
          <MessageArea
            aria-label={languageContext.labels.messageInput.inputAriaLabel}
            aria-errormessage={error ? `error-${inputId}` : undefined}
            aria-invalid={!!error}
            disabled={isGenerating || disabled}
            id={inputId}
            isRecording={isRecording}
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
          {isRecording && (
            <TranscriptOverlay ref={overlayRef}>
              {baseTextRef.current && <span>{baseTextRef.current}</span>}
              {transcript && (
                <>
                  {transcript.length > 2 ? (
                    <>
                      <span>{transcript.slice(0, -2)}</span>
                      <HighlightedText>{transcript.slice(-2)} ...</HighlightedText>
                    </>
                  ) : (
                    <HighlightedText>{transcript}</HighlightedText>
                  )}
                </>
              )}
            </TranscriptOverlay>
          )}
        </InputWrapper>
        <DxcFlex justifyContent={selectOptions ? "space-between" : "flex-end"} alignItems="center">
          {selectOptions && (
            <DxcContainer width="35%" maxWidth="240px">
              <DxcSelect
                size="fillParent"
                options={selectOptions.map((option) => ({ label: option.label ?? option.value, value: option.value }))}
                disabled={isGenerating || disabled || isRecording}
                value={selectOptions.find((option) => option.selected)?.value || selectOptions[0]?.value}
                onChange={(val) => {
                  const newOption = selectOptions.find((option) => option.value === val.value);
                  newOption?.onSelect(val.value);
                }}
              />
            </DxcContainer>
          )}

          <DxcFlex gap="var(--spacing-gap-xs)">
            {allowRecording && (
              <DxcButton
                icon={isRecording ? "filled_pause" : "mic"}
                size={{ height: "medium" }}
                mode="tertiary"
                disabled={isGenerating || disabled}
                onClick={toggleVoiceRecognition}
                title={
                  isRecording
                    ? languageContext.labels.messageInput.stopRecordingButtonTitle
                    : languageContext.labels.messageInput.recordAudioButtonTitle
                }
                aria-label={
                  isRecording
                    ? languageContext.labels.messageInput.stopRecordingButtonTitle
                    : languageContext.labels.messageInput.recordAudioButtonTitle
                }
              />
            )}

            <DxcButton
              icon={!isGenerating ? "send" : "filled_stop"}
              size={{ height: "medium" }}
              disabled={disabled || isRecording}
              onClick={!isGenerating ? handleSubmit : handleStop}
              title={
                !isGenerating
                  ? languageContext.labels.messageInput.sendButtonTitle
                  : languageContext.labels.messageInput.stopButtonTitle
              }
              aria-label={
                !isGenerating
                  ? languageContext.labels.messageInput.sendButtonTitle
                  : languageContext.labels.messageInput.stopButtonTitle
              }
            />
          </DxcFlex>
        </DxcFlex>
      </MessageInput>
      {!disabled && typeof error === "string" && <ErrorMessage error={error} id={`error-${inputId}`} />}
    </MessageInputContainer>
  );
};

export default DxcMessageInput;
