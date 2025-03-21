import { DxcPaginator, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {

  return (
    <DxcInset space="1rem">
      <DxcFlex gap="1rem" direction="column">
        <DxcPaginator/>
        <DxcPaginator itemsPerPageOptions={[5, 10, 15]} />
        <DxcPaginator showGoToPage />
        <DxcPaginator 
          showGoToPage 
          currentPage={1} 
          itemsPerPage={10} 
          totalItems={27} 
          onPageChange={() => {}} 
        />
        <DxcPaginator 
          showGoToPage 
          currentPage={2} 
          itemsPerPage={10} 
          totalItems={27} 
          onPageChange={() => {}} 
        />
        <DxcPaginator 
          showGoToPage 
          itemsPerPageOptions={[5, 10, 15]} 
          currentPage={2} 
          itemsPerPage={10} 
          totalItems={27} 
          onPageChange={() => {}} 
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcPaginator,
  DxcFlex,
  DxcInset,
  useState,
};

export default { code, scope };
