import React from "react";
import styled from "styled-components";
import DocTitle from "../../../common/DocTitle";
import { DxcTag } from "@diaas/dxc-react-cdk";

function ComponentHeader({ title, status }) {
    return (
        <StyledHeader>
            <DocTitle size={1}>{title}</DocTitle>
            {status? 
                <DxcTag
                margin="medium"
                label={status}
                iconBgColor= {
                    status === 'ready' ? 
                    '#24cb93' :
                    status === 'experimental' ? 
                    '#e0ac5b' :
                    status === 'planned' ?
                    '#5b78b7' :
                    '#c34161'
                }
                ></DxcTag>
            : ''}
            
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: baseline;
`;

export default ComponentHeader;