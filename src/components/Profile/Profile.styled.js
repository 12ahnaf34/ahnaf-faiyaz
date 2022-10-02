import { colors } from "../../GlobalStyles";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: grid;
  width: 100%;
  container-type: inline-container;
  margin-top: 200px;
  background-color: ${colors.grey};
  cursor: default;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
    "Heading Heading"
    "Description Skills";

  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 250px;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 2fr 2fr;
    grid-template-areas:
      "Heading "
      "Description"
      "Skills";
  }

  @media (max-width: 800px) {
    margin-top: 120px;
  }
`;

export const Heading = styled.h1`
  grid-area: Heading;
  width: 100%;
  font-size: ${({ fontSize }) => fontSize || "7cqi"};
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 7cqi;
  }

  @media (max-width: 400px) {
    font-size: 9cqi;
  }
`;

export const Description = styled.p`
  grid-area: Description;
  text-align: top;
  margin: 10px 6cqi;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.grey};
  font-family: "Bahnschrift";
  font-size: 2cqi;
  color: ${colors.dark};

  @media (max-width: 1000px) {
    width: 90cqi;
    font-size: 4cqi;
  }
`;

export const SkillsContainer = styled.div`
  grid-area: Skills;
  margin: 0cqi;
  text-align: center;
  background-color: ${colors.grey};

  @media (max-width: 1000px) {
    width: 100cqi;
    font-size: 4cqi;
  }
`;

export const Skills = styled.span`
  width: fit-content;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.dark};
  color: ${({ color }) => color || colors.light};
  border-radius: 2px;
  margin: 5px;
  padding: 5px 5px;
  font-size: ${({ fontSize }) => fontSize || "1.5cqi"};

  @media (max-width: 1000px) {
    font-size: 3cqi;
    margin: 4px;
  }

  @media (max-width: 800px) {
    font-size: 4cqi;
    margin: 5px;
  }

  @media (max-width: 400px) {
    font-size: 3cqi;
    margin: 5px;
  }
`;

export const CustomSpan = styled.span`
  width: fit-content;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.dark};
  color: ${({ color }) => color || colors.light};
  font-size: ${({ fontSize }) => fontSize || "2cqi"};
  padding: 3px;

  @media (max-width: 1000px) {
    font-size: 4cqi;
  }
`;
