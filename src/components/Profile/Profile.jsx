import React from "react";
import { Heading, ProfileContainer, Description, SkillsContainer, Skills, CustomSpan } from "./Profile.styled";
import { colors } from "../../GlobalStyles";

export default function Profile(props) {
  return (
    <ProfileContainer>
      <Heading>Profile</Heading>
      <Description>
        I am a web designer who enjoys the act of creating, especially frontend design. I like the fact that it requires both logic and{" "}
        <CustomSpan backgroundColor={colors.dark} color={colors.light}>
          creativity.
        </CustomSpan>
      </Description>
      <SkillsContainer>
        <Heading fontSize={"3cqi"}>Skills</Heading>
        <Skills>Javascript</Skills>
        <Skills>HTML</Skills>
        <Skills>CSS</Skills>
        <Skills>React</Skills>
      </SkillsContainer>
    </ProfileContainer>
  );
}
