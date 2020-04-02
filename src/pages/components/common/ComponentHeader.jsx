import React from "react";
import styled from "styled-components";
import DocTitle from "../../../common/DocTitle";
import { DxcTag } from "@diaas/dxc-react-cdk";

function ComponentHeader({ title, status }) {
    return (
        <StyledHeader>
            <DocTitle size={1}>{title}</DocTitle>
            <DxcTag
                margin="medium"
                label={status}
            ></DxcTag>
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