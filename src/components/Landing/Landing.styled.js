import styled from "styled-components";
import { Button, colors } from "../../GlobalStyles";

export const LandingContainer = styled.div`
  display: grid;
  container-type: inline-container;
  background-color: ${colors.gold};
  font-family: "Norwester";
  justify-items: center;
`;

export const Image = styled.img`
  margin-top: 5cqi;
  width: 50cqi;
  background-color: ${colors.gold};

  @media (max-width: 1700px) {
    margin-top: 10cqi;
    width: 60cqi;
  }

  @media (max-width: 1000px) {
    margin-top: 20cqi;
    width: 80cqi;
  }

  @media (max-width: 500px) {
    margin-top: 30cqi;
    width: 100cqi;
  }
`;

export const MinorContainer = styled.div`
  display: grid;
  width: clamp(40cqi, 99cqi + 5rem, 100cqi);
  align-items: center;
  justify-items: center;
  background-color: ${colors.light};
  grid-template-rows: 2fr 1fr;
`;

export const Paragraph = styled.p`
  text-align: center;
  background-color: ${colors.light};
  color: ${(props) => props.color || colors.dark};
  font-size: ${(props) => props.fontSize || "2cqi"};
  cursor: default;

  @media (max-width: 1700px) {
    font-size: ${(props) => props.fontSize || "4cqi"};
  }

  @media (max-width: 1000px) {
    font-size: ${(props) => props.fontSize || "7cqi"};
  }

  @media (max-width: 500px) {
    font-size: ${(props) => props.fontSize || "7cqi"};
  }
`;

export const ProjectsButton = styled(Button)`
  font-size: 1.5cqi;
  height: fit-content;

  @media (max-width: 1700px) {
    font-size: ${(props) => props.fontSize || "3cqi"};
  }

  @media (max-width: 1000px) {
    font-size: ${(props) => props.fontSize || "4cqi"};
  }

  @media (max-width: 500px) {
    font-size: ${(props) => props.fontSize || "5cqi"};
  }
`;
