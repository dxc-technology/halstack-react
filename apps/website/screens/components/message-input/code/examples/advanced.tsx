import { DxcMessageInput, DxcInset, DxcFlex, DxcButton } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [files, setFiles] = useState([
    new File([""], "document.pdf", { type: "application/pdf" }),
    new File([""], "image.jpg", { type: "image/jpeg" }),
    new File([""], "document.pdf", { type: "application/pdf" }),
    new File([""], "image.jpg", { type: "image/jpeg" }),
  ]);
  const [selectedOption, setSelectedOptions] = useState("model-1.0");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  
  const onChange = ({ value, error }) => {
    setValue(value);
    setError(error || "");
  };
  
  const onBlur = ({ value, error }) => {
    if (error) {
      setError(error);
    }
  };

  const onButtonClick = async ({type}) => {
    if (type === "submit") {
      setIsGenerating(true);
      console.log("Submitting message:", value);
      console.log("Attached files:", files);
      console.log("Selected model:", selectedOption);
      
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

  const selectOptions = [
    {
      label: "MODEL-1.0",
      icon: "psychology",
      value: "model-1.0",
      onSelect: () => setSelectedOptions("model-1.0"),
      selected: selectedOption === "model-1.0"
    },
    {
      label: "MODEL-3.5",
      icon: "smart_toy",
      value: "model-3.5",
      onSelect: () => setSelectedOptions("model-3.5"),
      selected: selectedOption === "model-3.5"
    },
    {
      label: "MODEL-4+",
      icon: "lightbulb",
      value: "model-4+",
      onSelect: () => setSelectedOptions("model-4+"),
      selected: selectedOption === "model-4+"
    }
  ];
  
  return (
    <DxcInset space="var(--spacing-padding-xl)">
        <DxcMessageInput
          placeholder="Ask me anything... (min 10, max 200 characters)"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onButtonClick={onButtonClick}
          files={files}
          callbackFile={callbackFile}
          selectOptions={selectOptions}
          allowRecording
          isGenerating={isGenerating}
          error={error}
          minLength={10}
          maxLength={200}
          size="large"
        />
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
