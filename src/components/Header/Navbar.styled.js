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
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 10px 15px;
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
  width: 500px;
  grid-area: List;
  justify-content: space-between;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Dropdown = styled.ul`
  display: flex;
  width: 150px;
  flex-direction: column;
  background-color: ${colors.light};
  list-style: none;
  padding: 0 0 0 5px;
  margin: 10px;
`;

export const ListItem = styled.li`
  color: ${colors.dark};
  text-align: left;

  &:hover {
    color: ${colors.gold};
  }
`;

export const Logo = styled.img`
  display: none;
  grid-area: Logo;
  position: absolute;
  right: 20px;
  top: 2px;
  height: 60px;
  align-item: right;

  @media (min-width: 769px) {
    display: block;
  }
`;
