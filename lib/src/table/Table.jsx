import styled from "styled-components";

const DxcTable = styled.table`
  border-collapse: collapse;
  & tr {
    border-bottom: 1px solid #e0e0e0;
  }

  & tr:nth-child(odd) {
    background-color: #eee;
  }
  & tr:nth-child(1) {
    background-color: #fff;
  }
  & td {
    color: #5a5a5a;
  }
  & th,
  td {
    padding: 12px 20px 12px 10px;
  }

  & th {
    text-align: left;
    text-transform: uppercase;
    font-size: 14px;
  }
`;

export default DxcTable;
