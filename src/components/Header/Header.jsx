import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Button } from "../../GlobalStyles";

//CSS
import { Navbar, Nav, SidebarButton, List, Dropdown, ListItem, Logo } from "./Header.styled";

export default function Header(props) {
  const { landingSection, profileSection, portfolioProjectsSection, contactSection, goTo } = props;
  const [menuDisplay, setMenuDisplay] = useState(false);

  useEffect(() => {
    if (screen.availWidth > 768) {
      setMenuDisplay(false);
    }
  }, [screen.availWidth]);

  const showHide = () => {
    menuDisplay ? setMenuDisplay(false) : setMenuDisplay(true);
  };

  return (
    <Navbar>
      <Nav>
        <SidebarButton primary bigFont onClick={showHide}>
          <FiMenu />
          {menuDisplay && (
            <Dropdown>
              <ListItem onClick={() => goTo(landingSection)}>Home</ListItem>
              <ListItem onClick={() => goTo(profileSection)}>Profile</ListItem>
              <ListItem onClick={() => goTo(portfolioProjectsSection)}>Projects</ListItem>
              <ListItem onClick={() => goTo(contactSection)}>Contact</ListItem>
            </Dropdown>
          )}
        </SidebarButton>
        <List>
          <Button primary bigFont onClick={() => goTo(landingSection)}>
            Home
          </Button>
          <Button primary bigFont onClick={() => goTo(profileSection)}>
            Profile
          </Button>
          <Button primary bigFont onClick={() => goTo(portfolioProjectsSection)}>
            Projects
          </Button>
          <Button primary bigFont onClick={() => goTo(contactSection)}>
            Contact
          </Button>
        </List>
        <Logo src="/logo2.png"></Logo>
      </Nav>
    </Navbar>
  );
}
