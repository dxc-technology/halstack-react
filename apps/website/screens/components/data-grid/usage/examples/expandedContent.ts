import { DxcContainer, DxcDataGrid, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";

const code = `() => {
  const columns = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "complete",
      label: "% Complete",
    },
  ];
  
  const rows = [
    {
      id: 1,
      complete: 46,
      expandedContent: "Expanded content"
    },
    {
      id: 2,
      complete: 51,
      expandedContent: <DxcContainer overflow="auto" height="200px" padding="medium">
                          <DxcParagraph> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet vulputate augue, non cursus justo eleifend non. 
                            Nam ante erat, finibus at tincidunt ut, convallis sed tortor. Proin commodo vestibulum sagittis. 
                            Nunc elit lorem, lobortis quis est in, tempus feugiat velit. Donec commodo hendrerit augue non suscipit. 
                            Nam facilisis leo at est auctor, a faucibus diam lacinia. 
                            In finibus urna id felis dictum blandit. 
                            Praesent pharetra sapien ac purus fringilla, ac molestie metus ullamcorper. 
                            Phasellus aliquet lobortis bibendum. Fusce convallis nulla at mauris tincidunt hendrerit sed sit amet est. 
                            Fusce aliquam quam id efficitur convallis. Vivamus mattis ex in nisi aliquet, et volutpat nulla rhoncus. 
                            Integer dui mauris, fringilla eu vulputate vel, ullamcorper ut orci.
                          </DxcParagraph>
                          <DxcParagraph> 
                            In hac habitasse platea dictumst. 
                            Sed velit arcu, consectetur pharetra hendrerit id, convallis id erat. 
                            Quisque eu ante sed ligula blandit placerat ac vitae purus. 
                            Proin ullamcorper dapibus erat. 
                            Vestibulum hendrerit iaculis ipsum, sit amet aliquam enim ornare vitae. 
                            Nullam molestie malesuada cursus. 
                            Maecenas et blandit eros, at posuere urna. 
                            Ut enim neque, volutpat sit amet scelerisque id, hendrerit vitae mi. 
                            Morbi sit amet laoreet ante, eget gravida leo. Sed eu dolor at leo vestibulum imperdiet. 
                            Aenean fringilla lorem et condimentum sollicitudin.
                          </DxcParagraph>
                        </ DxcContainer>,
      expandedContentHeight: 200
    },
    {
      id: 3,
      complete: 40,
    },
    {
      id: 4,
      complete: 10,
    },

  ];
  return (
    <DxcInset space="2rem">
      <DxcDataGrid columns={columns} rows={rows} expandable uniqueRowId="id" />
    </DxcInset>
  );
}`;

const scope = {
  DxcDataGrid,
  DxcContainer,
  DxcInset,
  DxcParagraph,
};

export default { code, scope };
