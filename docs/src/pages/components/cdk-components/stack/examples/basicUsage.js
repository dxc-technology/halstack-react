import { DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
  const Placeholder = () => (
    <div
        style={{
        height: "40px",
        border: "1px solid #a46ede",
        background: "#e5d5f6",
        }}
    ></div>
  );

  return (
    <DxcStack>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
    </DxcStack>
  );
}`;

const scope = {
  DxcStack,
};

export default { code, scope };
