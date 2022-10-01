import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  dark: "#343434",
  light: "#FCFAF1",
  grey: "#CACACA",
  gold: "#E6B31E",
};

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
  box-sizing: border-box;
  font-size: 62.5%;

  @media only screen and (max-width: 1200px){
    font-size: 58%;
  }

  @media only screen and (max-width: 1980px){
    font-size: 78%;
  }
}


body {
  font-family: "Norwester";
  font-weight: 400;
  line-height: 1.6;
  font-size: 1.6rem;
  background:${colors.light};
  background-color:${colors.light};
  color:${colors.dark};

  
  ::-webkit-scrollbar {
    display: block;
    background:${colors.light};
    width:10px;
  }
  ::-webkit-scrollbar-thumb {
    display: block;
    background:${colors.gold};
    border:2px solid ${colors.gold};
    border-radius:3px;
    width:2px;
  }
}
`;

export default GlobalStyles;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;

  @media (max-width: 400px) {
    padding: 0 10px;
  }

  @media (max-width: 991px) {
    padding: 0 30px;
  }

  @media (min-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "15px")};
  background-color: ${({ primary }) => (primary ? colors.gold : colors.light)};
  color: ${({ primary }) => (primary ? colors.dark : colors.dark)};
  padding: ${({ big }) => (big ? "18px 30px" : "10px 28px")};
  font-size: ${({ bigFont }) => (bigFont ? "20px" : "18px")};
  font-family: "Norwester";
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? colors.dark : colors.gold)};
    color: ${({ primary }) => (primary ? colors.gold : colors.dark)};
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.2);
  }

  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${({ big }) => (big ? "18px 30px" : "10px 20px")};
  }
  @media only screen and (max-width: 375px) {
    padding: ${({ big }) => (big ? "12px 20px" : "10px 20px")};
    font-size: ${({ bigFont }) => (bigFont ? "16px" : "18px")};
  }
`;

export const OutlineButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "40px" : "30px")};
  border: 2px solid ${colors.gold};
  color: ${colors.gold};
  outline: none;
  padding: ${({ big }) => (big ? "15px 60px" : "13px 55px")};
  font-size: ${({ fontBig }) => (fontBig ? "22px" : "18px")};
  transition: all 0.5s ease;
  background-color: ${colors.light};

  &:hover {
    background-color: ${colors.gold};
    color: ${colors.dark};
    border: none;
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.2);
  }

  @media only screen and (max-width: 1200px) {
    border-radius: ${({ bigRadius }) => (bigRadius ? "20px" : "18px")};
    padding: ${({ big }) => (big ? "9px 30px" : "8px 28px")};
    font-size: ${({ fontBig }) => (fontBig ? "18p" : "16px")};
  }
`;
