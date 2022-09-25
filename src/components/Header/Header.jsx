import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Button } from "../../GlobalStyles";

//CSS
import { Navbar, Nav, SidebarButton, List, Dropdown, ListItem, Logo } from "./Navbar.styled";

export default function Header() {
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
              <ListItem>Home</ListItem>
              <ListItem>Projects</ListItem>
              <ListItem>Contact</ListItem>
            </Dropdown>
          )}
        </SidebarButton>
        <List>
          <Button primary bigFont>
            Home
          </Button>
          <Button primary bigFont>
            Projects
          </Button>
          <Button primary bigFont>
            Contact
          </Button>
        </List>
        <Logo src="/logo2.png"></Logo>
      </Nav>
    </Navbar>
  );
}
