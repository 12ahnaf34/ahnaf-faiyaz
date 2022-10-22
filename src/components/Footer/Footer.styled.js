import styled from "styled-components";
import { colors } from "../../GlobalStyles";

export const Container = styled.div`
  min-height: 200px;
  width: 100%;
  display: grid;
  justify-items: center;
  container-type: inline-container;

  padding: 100px 0;
  font-family: Bahnschrift;
  font-size: 2cqi;
  background-color: #000;
  color: ${colors.light};
`;

export const Text = styled.p`
  font-size: 1.5cqi;
  margin: 5px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.light};
  margin: 5px;
`;
