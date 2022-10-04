import React, { useRef } from "react";
import GlobalStyles from "../GlobalStyles";
import Header from "../components/Header/Header";
import Landing from "../components/Landing/Landing";
import Profile from "../components/Profile/Profile";
import PortfolioProjects from "../components/PortfolioProjects/PortfolioProjects";
//CSS
import { MainContainer, ScrollbarWrapper } from "./Home.styled";
import ContactForm from "../components/ContactForm/ContactForm";
import GlobalFonts from "../fonts/GlobalFonts";

export default function Home() {
  const landingSection = useRef();
  const profileSection = useRef();
  const portfolioProjectsSection = useRef();
  const contactSection = useRef();

  const goTo = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollbarWrapper>
      <GlobalStyles />
      <GlobalFonts />
      <MainContainer>
        <Header
          landingSection={landingSection}
          profileSection={profileSection}
          portfolioProjectsSection={portfolioProjectsSection}
          contactSection={contactSection}
          goTo={goTo}
        />
        <span ref={landingSection}></span>
        <Landing goTo={goTo} portfolioProjectsSection={portfolioProjectsSection} />
        <br ref={profileSection}></br>
        <Profile />
        <PortfolioProjects portfolioProjectsSection={portfolioProjectsSection} />
        <span ref={contactSection}></span>
        <ContactForm />
      </MainContainer>
    </ScrollbarWrapper>
  );
}
