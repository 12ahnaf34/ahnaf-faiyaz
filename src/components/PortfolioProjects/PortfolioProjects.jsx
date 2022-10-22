import React from "react";
import { FaGithub } from "react-icons/fa";
import { colors } from "../../GlobalStyles";
//CSS
import {
  PortfolioProjectsContainer,
  Heading,
  ProjectsGrid,
  Item,
  Title,
  YoutubeLink,
  Thumbnail,
  Description,
  GithubLink,
  SiteLink,
  SubContainer,
  SiteThumbnail,
} from "./PortfolioProjects.styled";

export default function PortfolioProjects(props) {
  const { portfolioProjectsSection } = props;

  return (
    <PortfolioProjectsContainer ref={portfolioProjectsSection}>
      <Heading>Projects</Heading>
      <ProjectsGrid>
        <Item>
          <Title>Star Wars</Title>
          <YoutubeLink href="https://youtu.be/UxzYZzb2Z2I" target="_blank" rel="noreferrer noopener">
            <Thumbnail src="star_wars_thumb.png" alt="Star Wars" />
          </YoutubeLink>
          <SubContainer>
            <GithubLink href="https://github.com/12ahnaf34/star-wars" target="_blank" rel="noreferrer noopener">
              <FaGithub />
            </GithubLink>
            <SiteLink href="https://star-wars-15424c.netlify.app" target="_blank" rel="noreferrer noopener">
              <SiteThumbnail src="/vite.svg" />
            </SiteLink>
          </SubContainer>
        </Item>

        <Item>
          <Title>Todo List</Title>
          <YoutubeLink href="https://youtu.be/Iz2IoUbu9jU" target="_blank" rel="noreferrer noopener">
            <Thumbnail src="todoList_thumb.png" alt="Todo List" />
          </YoutubeLink>
          <SubContainer>
            <GithubLink href="https://github.com/12ahnaf34/ctd-react-sparrow" target="_blank" rel="noreferrer noopener">
              <FaGithub />
            </GithubLink>
            <SiteLink href="https://todolist-7149e4.netlify.app" target="_blank" rel="noreferrer noopener">
              <SiteThumbnail src="/react-icon.svg" />
            </SiteLink>
          </SubContainer>
        </Item>

        <Item>
          <Title>Weather App</Title>
          <YoutubeLink href="https://youtu.be/wbewK-zvSEk" target="_blank" rel="noreferrer noopener">
            <Thumbnail src="weather_app_thumb.png" alt="Weather App" />
          </YoutubeLink>
          <SubContainer>
            <GithubLink href="https://github.com/12ahnaf34/Weather-App" target="_blank" rel="noreferrer noopener">
              <FaGithub />
            </GithubLink>
            <SiteLink href="https://weatherapp-64b823.netlify.app/" target="_blank" rel="noreferrer noopener">
              <SiteThumbnail src="/nextjs-icon.svg" />
            </SiteLink>
          </SubContainer>
          <Description primary fontSize="1cqi" fontColor={colors.light} background={colors.dark}>
            Note: Government API used to fetch weather data, it sometimes doesn't return data. Refreshing the page should resolve the issue.
          </Description>
        </Item>

        <Item>
          <Title>Stock Journal</Title>
          <YoutubeLink href="https://youtu.be/Iv42RtPjpIA" target="_blank" rel="noreferrer noopener">
            <Thumbnail src="/stock_journal_thumb.png" alt="Stock Journal" />
          </YoutubeLink>
          <SubContainer>
            <GithubLink href="https://github.com/12ahnaf34/Stock-Journal" target="_blank" rel="noreferrer noopener">
              <FaGithub />
            </GithubLink>
            <SiteLink href="https://stockjournal.netlify.app" target="_blank" rel="noreferrer noopener">
              <SiteThumbnail src="/vite.svg" />
            </SiteLink>
          </SubContainer>
          <Description primary fontSize="1cqi" fontColor={colors.light} background={colors.dark}>
            Note: Backend hosted on Heroku
          </Description>
        </Item>
      </ProjectsGrid>
    </PortfolioProjectsContainer>
  );
}
