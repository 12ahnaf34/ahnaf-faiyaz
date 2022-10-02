import styled from "styled-components";
import { Button, colors } from "../../GlobalStyles";
import "../../fonts/norwester.otf";

export const LandingContainer = styled.div`
  display: grid;
  max-width: 100%;
  container-type: inline-container;
  height: 100cqh;
  background-color: ${colors.gold};
  font-family: url("../../fonts/norwester.otf");
  justify-items: center;

  @media (max-width: 1050px) {
    height: 80%;
  }
`;

export const Image = styled.img`
  margin-top: 5cqi;
  width: 40cqi;
  background-color: ${colors.gold};

  @media (max-width: 2000px) {
    margin-top: 10cqi;
    height: fit-content;
    width: 60cqi;
  }

  @media (max-width: 1400px) {
    margin-top: 10cqi;
    height: fit-content;
    width: 80cqi;
  }

  @media (max-width: 1100px) {
    margin-top: 20cqi;
    width: 80cqi;
  }

  @media (max-width: 800px) {
    margin-top: 30cqi;
    width: 90cqi;
  }
`;

export const MinorContainer = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  background-color: ${colors.light};
  grid-template-rows: 150px 100px;

  @media (max-width: 2000px) {
    grid-template-rows: 10cqi 8cqi;
  }

  @media (max-width: 1100px) {
    grid-template-rows: 15cqi 8cqi;
  }

  @media (max-width: 800px) {
    height: 100%;
    grid-template-rows: 15cqi 10cqi;
    padding: 5px;
  }

  //Special
  @media (max-width: 820px) and (max-height: 1180px) {
    height: 100%;
    grid-template-rows: 15cqi 10cqi;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  background-color: ${colors.light};
  color: ${(props) => props.color || colors.dark};
  font-size: ${(props) => props.fontSize || "3cqi"};
  cursor: default;

  @media (max-width: 1900px) {
    font-size: ${(props) => props.fontSize || "4cqi"};
  }

  @media (max-width: 1100px) {
    font-size: ${(props) => props.fontSize || "6cqi"};
  }

  @media (max-width: 800px) {
    font-size: ${(props) => props.fontSize || "7cqi"};
  }
`;

export const ProjectsButton = styled(Button)`
  font-size: 1.5cqi;
  height: fit-content;

  @media (max-width: 1900px) {
    font-size: ${(props) => props.fontSize || "3cqi"};
  }

  @media (max-width: 1000px) {
    font-size: ${(props) => props.fontSize || "4cqi"};
  }

  @media (max-width: 800px) {
    font-size: ${(props) => props.fontSize || "5cqi"};
  }
`;
