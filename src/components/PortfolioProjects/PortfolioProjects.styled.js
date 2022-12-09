import styled from "styled-components";
import { colors } from "../../GlobalStyles";

export const PortfolioProjectsContainer = styled.div`
  container-type: inline-container;
  width: 100%;
  margin-top: 400px;
  background-color: ${colors.dark};
  cursor: default;
  color: ${colors.light};

  @media (max-width: 800px) {
    margin-top: 200px;
  }
`;

export const Heading = styled.h1`
  width: 100%;
  font-size: ${({ fontSize }) => fontSize || "7cqi"};
  text-align: center;

  @media (max-width: 800px) {
    font-size: 7cqi;
  }

  @media (max-width: 400px) {
    font-size: 9cqi;
  }
`;

export const ProjectsGrid = styled.div`
  container-type: inline-container;
  grid-template-columns: 1fr;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  margin: auto;
  gap: 5px;
  justify-items: center;
  align-items: center;
  background-color: ${colors.dark};
  padding: 2cqi 5cqi;

  @media (max-width: 400px) {
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: ${colors.light};
  font-size: 3cqi;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 4cqi;
  }

  @media (max-width: 400px) {
    font-size: 6cqi;
  }
`;

export const YoutubeLink = styled.a`
  margin: auto;
`;

export const GithubLink = styled.a`
  display: grid;

  text-decoration: none;
  margin: auto;
  border-radius: 5px;
  padding: 5px;
  background-color: ${colors.gold};
  color: ${colors.dark};
  font-size: 1.5cqi;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(10px) scale(1.2);
  }

  @media (max-width: 800px) {
    font-size: 6cqi;
  }

  @media (max-width: 400px) {
    font-size: 9cqi;
  }
`;

export const SiteLink = styled.a`
  display: grid;

  text-decoration: none;
  border-radius: 5px;
  padding: 5px;
  background-color: ${colors.gold};
  color: ${colors.dark};
  margin: auto;
  font-size: 1.5cqi;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(10px) scale(1.2);
  }

  @media (max-width: 800px) {
    font-size: 6cqi;
  }

  @media (max-width: 400px) {
    font-size: 9cqi;
  }
`;

export const Thumbnail = styled.img`
  width: ${({ size }) => size || "70cqi"};
`;

export const SiteThumbnail = styled.img`
  width: 3cqi;

  @media (max-width: 800px) {
    width: 6cqi;
  }

  @media (max-width: 400px) {
    width: 9cqi;
  }
`;

export const Description = styled.span`
  background-color: ${({ background }) => background || colors.dark};
  color: ${({ fontColor }) => fontColor || colors.light};
  margin: 5px;
  padding: 5px;
  font-size: ${({ fontSize }) => fontSize || "1cqi"};
  font-family: ${({ primary }) => (primary ? "Bahnschrift" : "Norwester")};
  grid-column: ${({ column }) => column};

  @media (max-width: 800px) {
    align-items: middle;
    padding: 3px;
    font-size: 3.5cqi;
    gap: 5px;
    margin: 0;
  }

  @media (max-width: 400px) {
    align-items: middle;
    padding: 2px;
    margin-top: 0px;
    font-size: 4cqi;
    text-align: left;
    gap: 5px;
    margin: 0;
  }
`;

export const SubContainer = styled.div`
  display: grid;
  container-type: inline-container;
  margin-top: 20px;
  align-items: start;
  justify-items: center;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 800px) {
    align-items: middle;
    gap: 5px;
    margin: 0;
  }

  @media (max-width: 400px) {
    align-items: middle;
    margin: 50px;
    gap: 5px;
    margin: 0;
  }
`;
