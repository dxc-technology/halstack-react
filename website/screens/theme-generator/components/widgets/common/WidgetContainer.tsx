import styled from "styled-components";

const WidgetContainer = styled.span`
  display: grid;
  grid-template: 1fr / minmax(0, 50%) minmax(0, 50%);
  column-gap: 0.25rem;
`;

export default WidgetContainer;
