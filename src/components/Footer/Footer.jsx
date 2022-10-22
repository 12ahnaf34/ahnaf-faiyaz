import React from "react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Container, Link, Text } from "./Footer.styled";

export default function Footer() {
  return (
    <Container>
      <Text>LINKS</Text>
      <span>
        <Link href="https://github.com/12ahnaf34" target="_blank" rel="noreferrer noopener">
          <FaGithub />
        </Link>
        <Link href="https://www.youtube.com/channel/UCW31oHIg4kwdG9OyaeWnGLg" target="_blank" rel="noreferrer noopener">
          <FaYoutube />
        </Link>
        <Link href="https://www.linkedin.com/in/ahnaf-faiyaz-55379b252/" target="_blank" rel="noreferrer noopener">
          <FaLinkedin />
        </Link>
      </span>
    </Container>
  );
}
