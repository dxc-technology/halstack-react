import { DxcCard } from "@dxc-technology/halstack-react";
const code = `() => {
    return (
      <DxcCard 
        onClick={() => {
          console.log("click");
        }}
        imageSrc="https://picsum.photos/id/1022/200/300" 
        margin="small"
      >
        Lorem Ipsum
      </DxcCard>
    );
  }`;

const scope = {
  DxcCard
};

export default { code, scope };
