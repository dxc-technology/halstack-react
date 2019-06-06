import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import componentsList from "../componentsList";

export default function SideMenu(props) {
  const screen = props.match.params.screen;
  return (
    <StyledMenu>
      <Title>DXC Components React</Title>
      <LinksList>
        {componentsList.map(({ title, route }) => (
          <StyledLink isSelected={screen === route}>
            <Link to={`/${route}`}>{title}</Link>
          </StyledLink>
        ))}
      </LinksList>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  width: 300px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
  padding: 30px 20px;
  border-bottom: 1px solid #d9d9d9;
  color: #666;
`;

const LinksList = styled.div`
  padding: 20px;
`;

const StyledLink = styled.div`
  margin-bottom: 5px;
  border-left: ${({ isSelected }) =>
    (isSelected && "5px solid #ffed00") || "0px"};
  padding-left: ${({ isSelected }) => (isSelected && "3px") || "0px"};
  & a {
    font-weight: ${({ isSelected }) => (isSelected && "bold") || "normal"};
    text-decoration: none;
    font-size: 14px;
    color: #666;
  }
`;
