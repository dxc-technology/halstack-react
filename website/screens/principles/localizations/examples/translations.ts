import {DxcSelect, DxcTextInput, DxcPaginator, HalstackProvider,  DxcInset} from "@dxc-technology/halstack-react";

const code = `()=>{

    const labels = {
        formFields:{ 
            optionalLabel: "**Opcional**",
        },
        select:{ 
            actionClearSelectionTitle: "Eliminar selección",
        },
        textInput:{ 
            clearFieldActionTitle: "Limpiar",
        },
        paginator: {
            itemsPerPageText: " Num. items",
            pageOfText: (a, b) => \`Pagina: \${a} de \${b}\`,
          },
    };
      
    return (

        <HalstackProvider labels={labels}>
        <DxcInset space="large">

        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={[
            { label: "Option 01", value: "1" },
            { label: "Option 02", value: "2" },
            { label: "Option 03", value: "3" },
            { label: "Option 04", value: "4" },
          ]}
          placeholder="Choose an option"
          multiple
          optional
        />
        </DxcInset>
        <DxcInset space="large">
          <DxcTextInput
          label="Input text"
          defaultValue="Example text"
          clearable
          optional
        />
        </DxcInset>
        <DxcInset space="large">

        <DxcPaginator
            itemsPerPageOptions={[10, 15]}
            totalItems={27}
          ></DxcPaginator>
          </DxcInset>

        </HalstackProvider>
    );
}`;

const scope = {
    DxcSelect, DxcTextInput, DxcPaginator, HalstackProvider, DxcInset
};

export default{code, scope};