import React from "react";
import styled from "styled-components";
import DocTitle from "../../../common/DocTitle";
import { DxcTag } from "@dxc-technology/halstack-react";
import ReadyIcon from "./ready.svg";
import ExperimentalIcon from "./experimental.svg";
import PlannedIcon from "./planned.svg";

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
                iconSrc= {
                    status === 'ready' ? 
                    ReadyIcon :
                    status === 'experimental' ? 
                    ExperimentalIcon :
                    status === 'planned' ?
                    PlannedIcon : ""
                }
                ></DxcTag>
            : ''}
            
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
`;

export default ComponentHeader;