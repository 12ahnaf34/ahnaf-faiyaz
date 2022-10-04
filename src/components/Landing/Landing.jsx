import React from "react";
import { Button } from "../../GlobalStyles";
import { LandingContainer, MinorContainer, Paragraph, Image, ProjectsButton } from "./Landing.styled";

export default function Landing(props) {
  const { goTo, portfolioProjectsSection } = props;

  return (
    <LandingContainer>
      <Image src="/logo1.png" />
      <MinorContainer>
        <Paragraph>Frontend Developer</Paragraph>
        <ProjectsButton primary bigFont onClick={() => goTo(portfolioProjectsSection)}>
          Projects
        </ProjectsButton>
      </MinorContainer>
    </LandingContainer>
  );
}
