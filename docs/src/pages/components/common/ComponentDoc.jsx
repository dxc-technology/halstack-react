import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 70px;

  @media (max-width: 45rem) {
    margin: 50px 20px;
  }
`;

export default MainContainer;
