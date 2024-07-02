import styled from "styled-components";

const StyledPreview = styled.div`
  background-color: #ffffff;
  background-image: linear-gradient(45deg, #f9f9fa 25%, transparent 25%),
    linear-gradient(135deg, #f9f9fa 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f9f9fa 75%),
    linear-gradient(135deg, transparent 75%, #f9f9fa 75%);
  background-size: 20px 20px;
  background-position:
    0px 0px,
    10px 0px,
    10px -10px,
    0px 10px;
  border: 1px solid #707070;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  overflow: auto;
  height: 350px;
  > div {
    min-width: min-content;
  }
`;

export default StyledPreview;
