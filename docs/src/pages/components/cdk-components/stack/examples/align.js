import { DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
  const Placeholder = ({paddingRight}) => (
    <div
        style={{
        height: "40px",
        width: "80px",
        border: "1px solid #a46ede",
        background: "#e5d5f6",
        paddingRight: paddingRight || 0
        }}
    ></div>
  );

  return (
    <DxcStack align="end">
        <Placeholder paddingRight="30px"></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingRight="55px"></Placeholder>
    </DxcStack>
  );
}`;

const scope = {
  DxcStack,
};

export default { code, scope };
