import { DxcSelect, DxcTextInput, DxcPaginator, HalstackProvider, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [items, changeItems] = useState(10);
  const itemsPerPageClick = (value) => {
    changeItems(value);
  };

  const labels = {
    formFields: {
      optionalLabel: "(Opcional)",
    },
    select: {
      actionClearSelectionTitle: "Eliminar selección",
    },
    textInput: {
      clearFieldActionTitle: "Limpiar",
    },
    paginator: {
      itemsPerPageText: "Número de elementos: ",
      pageOfText: (a, b) => \`Página: \${a} de \${b}\`,
    },
  };

  return (
    <HalstackProvider labels={labels}>
      <DxcInset space="var(--spacing-padding-xl)">
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
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcTextInput
          label="Input text"
          defaultValue="Example text"
          clearable
          optional
        />
      </DxcInset>
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcPaginator
          itemsPerPageOptions={[10, 15]}
          totalItems={27}
          itemsPerPage={items}
          itemsPerPageFunction={itemsPerPageClick}
        />
      </DxcInset>
    </HalstackProvider>
  );
}`;

const scope = {
  DxcSelect,
  DxcTextInput,
  DxcPaginator,
  HalstackProvider,
  DxcInset,
  useState,
};

export default { code, scope };
