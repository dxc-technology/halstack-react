import { DxcMessageInput, DxcInset, DxcFlex, DxcButton } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [files, setFiles] = useState([
    { label: "document.pdf", icon: "insert_drive_file" },
    { label: "image.png", icon: "image" }
  ]);
  const [selectedModel, setSelectedModel] = useState("GPT-4");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  
  const onChange = ({ value, error }) => {
    setValue(value);
    setError(error || "");
  };
  
  const onBlur = ({ value, error }) => {
    console.log("Input blurred with value:", value);
    if (error) {
      setError(error);
    }
  };

  const onButtonClick = async (type, signal) => {
    if (type === "submit") {
      setIsGenerating(true);
      console.log("Submitting message:", value);
      console.log("Attached files:", files);
      console.log("Selected model:", selectedModel);
      
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setIsGenerating(false);
      setValue("");
      setFiles([]);
    } else if (type === "stop") {
      console.log("Stopping generation");
      setIsGenerating(false);
    }
  };

  const callbackFile = (updatedFiles) => {
    setFiles(updatedFiles);
  };

  const onRecordingChange = (isRecording) => {
    console.log("Recording state changed:", isRecording);
  };

  const modelList = [
    {
      label: "GPT-4",
      icon: "psychology",
      value: "gpt4",
      onSelect: () => setSelectedModel("GPT-4")
    },
    {
      label: "GPT-3.5",
      icon: "smart_toy",
      value: "gpt3.5",
      onSelect: () => setSelectedModel("GPT-3.5")
    },
    {
      label: "Claude",
      icon: "lightbulb",
      value: "claude",
      onSelect: () => setSelectedModel("Claude")
    }
  ];

  const toggleSize = () => {
    // This would toggle between sizes in a real implementation
  };
  
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-l)">
        <DxcMessageInput
          placeholder="Ask me anything... (min 10, max 200 characters)"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onButtonClick={onButtonClick}
          files={files}
          callbackFile={callbackFile}
          modelList={modelList}
          allowVoiceInput
          onRecordingChange={onRecordingChange}
          isGenerating={isGenerating}
          error={error}
          minLength={10}
          maxLength={200}
          size="large"
        />
        <div style={{ fontSize: "14px", color: "#666" }}>
          <strong>Selected model:</strong> {selectedModel}
          <br />
          <strong>Character count:</strong> {value.length} / 200
          <br />
          <strong>Attached files:</strong> {files.length}
        </div>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcMessageInput,
  DxcInset,
  DxcFlex,
  DxcButton,
  useState,
};

export default { code, scope };
