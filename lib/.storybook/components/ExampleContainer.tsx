import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
  pseudoState?: string;
  expanded?: boolean;
};

const ExampleContainer = ({ children, pseudoState, expanded = false }: Props): JSX.Element => (
  <DivContainer className={pseudoState} expanded={expanded}>
    {children}
  </DivContainer>
);

const DivContainer = styled.div`
  margin: 15px;
  ${(props) => props.expanded && "height: 100vh;"}
  * {
    overflow: auto;
    /* width */
    ::-webkit-scrollbar {
      width: 10px !important;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1 !important;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888 !important;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555 !important;
    }
  }
`;

export default ExampleContainer;
