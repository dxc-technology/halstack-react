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
  background-color: var(--color-bg-neutral-lightest);
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

const Input = styled.textarea<{ isRecording?: boolean }>`
  min-height: 20px;
  max-width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  resize: none;
  flex-grow: 1;
  color: ${({ disabled, isRecording }) =>
    isRecording ? "transparent" : disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)"};
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

  ${scrollbarStyles};
  &::-webkit-scrollbar {
    width: 4px;
  }
`;

const InputWrapper = styled.div`
  max-height: 150px;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const TranscriptOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  pointer-events: none;
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  white-space: pre-wrap;
  word-break: break-word;
  overflow-y: auto;
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
  const translatedLabels = useContext(HalstackLanguageContext);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [innerValue, setInnerValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { transcript, isRecording, startRecording, stopRecording, resetTranscript } = useVoiceTranscription();

  const changeValue = (newValue: string) => {
    if (value == null) {
      setInnerValue(newValue);
    }
    const lengthError = isLengthIncorrect(newValue, minLength, maxLength)
      ? translatedLabels.formFields.lengthErrorMessage?.(minLength, maxLength)
      : undefined;
    onChange?.({
      value: newValue,
      ...(lengthError && { error: lengthError }),
    });
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
    const lengthError = isLengthIncorrect(event.target.value, minLength, maxLength)
      ? translatedLabels.formFields.lengthErrorMessage?.(minLength, maxLength)
      : undefined;
    onBlur?.({
      value: event.target.value,
      ...(lengthError && { error: lengthError }),
    });
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
      resetTranscript();
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

      if (overlayRef.current) {
        overlayRef.current.scrollTop = inputRef.current.scrollTop;
      }
    }
  }, [transcript, changeValue]);

  useEffect(() => {
    onRecordingChange?.(isRecording);
  }, [isRecording, onRecordingChange]);

  useEffect(() => {
    const textarea = inputRef.current;
    const overlay = overlayRef.current;

    if (!textarea || !overlay || !isRecording) return;

    overlay.scrollTop = textarea.scrollTop;

    const handleScroll = () => {
      overlay.scrollTop = textarea.scrollTop;
    };

    textarea.addEventListener("scroll", handleScroll);
    return () => textarea.removeEventListener("scroll", handleScroll);
  }, [isRecording]);

  const handleSubmit = () => {
    if (disabled || isGenerating) return;
    onButtonClick?.("submit");
  };

  const handleStop = () => {
    if (disabled) return;
    onButtonClick?.("stop");
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
        onClick={handleInputContainerOnClick}
        onMouseDown={handleInputContainerOnMouseDown}
      >
        {files && (
          <FilesContainer>
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
          </FilesContainer>
        )}
        <InputWrapper>
          <Input
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
                  {baseTextRef.current && <span> </span>}
                  {transcript.length > 2 ? (
                    <>
                      <span>{transcript.slice(0, -2)}</span>
                      <HighlightedText>{transcript.slice(-2)}...</HighlightedText>
                    </>
                  ) : (
                    <HighlightedText>{transcript}</HighlightedText>
                  )}
                </>
              )}
            </TranscriptOverlay>
          )}
        </InputWrapper>
        <DxcFlex justifyContent={modelList ? "space-between" : "flex-end"} alignItems="center">
          {modelList && (
            <DxcContainer width="35%" maxWidth="240px">
              <DxcSelect
                size="fillParent"
                options={modelList.map((option) => ({ label: option.label ?? option.value, value: option.value }))}
                disabled={isGenerating || disabled}
                defaultValue={modelList[0]?.value}
                onChange={(val) => {
                  const selectedOption = modelList.find((option) => option.value === val.value);
                  selectedOption?.onSelect();
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
      {!disabled && typeof error === "string" && <ErrorMessage error={error} id={`error-${inputId}`} />}
    </MessageInputContainer>
  );
};

export default DxcMessageInput;
