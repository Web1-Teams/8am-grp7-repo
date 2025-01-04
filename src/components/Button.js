import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-block;
  width: 80%;
  margin: 2rem;
  font-size: 26px;
  border: none;
  border-radius: 5px;
  background-color: rgb(0, 64, 240);
  color: rgb(255, 255, 255);
  text-decoration: none;
  text-align: center;
  line-height: 10rem;
  transition: background-color 0.3s;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    background-color: #1a0541;
  }
`;

export default function ButtonComponent(props) {
  return <StyledLink to={props.link}>{props.link}</StyledLink>;
}
