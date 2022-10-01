import styled from "styled-components";
import { Button } from "../../GlobalStyles";

const colors = {
  dark: "#343434",
  light: "#FCFAF1",
  grey: "#CACACA",
  gold: "#E6B31E",
};

export const Navbar = styled.div`
  position: fixed;
  max-width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 20px 15px;
  background-color: ${colors.light};
  border-bottom: 4px solid ${colors.grey};

  font-family: "Norwester";
`;

export const Nav = styled.div`
  display: grid;
  grid-template-columns: 550px 1fr;
  grid-template-areas: "List Logo";

  @media (max-width: 768px) {
    grid-template-areas: "SidebarButton Logo";
  }
`;

export const SidebarButton = styled(Button)`
  display: none;
  grid-area: SidebarButton;
  background-color: ${colors.gold};
  color: ${colors.dark};

  @media (max-width: 768px) {
    display: block;
    width: 80px;
    height: 40px;
    padding: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  container-type: inline-container;
  width: 600px;
  grid-area: List;
  justify-content: space-between;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Dropdown = styled.ul`
  position: relative;
  right: 45px;
  display: flex;
  width: 100cqi;
  flex-direction: column;
  background-color: ${colors.light};
  list-style: none;
  margin: 20px;
`;

export const ListItem = styled.li`
  text-align: left;
  color: ${colors.dark};
  font-size: 4cqi;
  padding: 5px;
  margin-left: 10px;

  &:hover {
    color: ${colors.gold};
    background-color: ${colors.dark};
  }
`;

export const Logo = styled.img`
  display: none;
  grid-area: Logo;
  position: absolute;
  right: 20px;
  top: 11px;
  height: 60px;
  align-item: right;

  @media (min-width: 769px) {
    display: block;
  }
`;
