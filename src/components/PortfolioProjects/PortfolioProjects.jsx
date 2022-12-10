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
          <Title>Clothaven</Title>
          <YoutubeLink href="https://youtu.be/wjlLld3euWU" target="_blank" rel="noreferrer noopener">
            <Thumbnail src="clothaven_thumb.png" alt="Clothaven" />
          </YoutubeLink>
          <SubContainer>
            <Description primary column="1/3">
              Made using React{"(Typescript)"}. User data stored in Firebase.
            </Description>
            <GithubLink href="https://github.com/12ahnaf34/tshirts" target="_blank" rel="noreferrer noopener">
              Github
            </GithubLink>
            <SiteLink href="https://clothaven.netlify.app/" target="_blank" rel="noreferrer noopener">
              Website
            </SiteLink>
          </SubContainer>
        </Item>

        <Item>
          <Title>Star Wars</Title>
          <YoutubeLink href="https://youtu.be/UxzYZzb2Z2I" target="_blank" rel="noreferrer noopener">
            <Thumbnail src="star_wars_thumb.png" alt="Star Wars" />
          </YoutubeLink>
          <SubContainer>
            <Description primary column="1/3">
              Made using React. Data fetched from Star Wars API.
            </Description>
            <GithubLink href="https://github.com/12ahnaf34/star-wars" target="_blank" rel="noreferrer noopener">
              Github
            </GithubLink>
            <SiteLink href="https://star-wars-15424c.netlify.app" target="_blank" rel="noreferrer noopener">
              Website
            </SiteLink>
          </SubContainer>
        </Item>

        <Item>
          <Title>Todo List</Title>
          <YoutubeLink href="https://youtu.be/Iz2IoUbu9jU" target="_blank" rel="noreferrer noopener">
            <Thumbnail src="todoList_thumb.png" alt="Todo List" />
          </YoutubeLink>
          <SubContainer>
            <Description primary column="1/3">
              Made using React. Data stored in Airtable.
            </Description>
            <GithubLink href="https://github.com/12ahnaf34/ctd-react-sparrow" target="_blank" rel="noreferrer noopener">
              Github
            </GithubLink>
            <SiteLink href="https://todolist-7149e4.netlify.app" target="_blank" rel="noreferrer noopener">
              Website
            </SiteLink>
          </SubContainer>
        </Item>

        <Item>
          <Title>Weather App</Title>
          <YoutubeLink href="https://youtu.be/wbewK-zvSEk" target="_blank" rel="noreferrer noopener">
            <Thumbnail src="weather_app_thumb.png" alt="Weather App" />
          </YoutubeLink>
          <SubContainer>
            <Description primary column="1/3">
              Made using Next.js. Data stored in Firebase.
            </Description>
            <GithubLink href="https://github.com/12ahnaf34/Weather-App" target="_blank" rel="noreferrer noopener">
              Github
            </GithubLink>
            <SiteLink href="https://weatherapp-64b823.netlify.app/" target="_blank" rel="noreferrer noopener">
              Website
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
            <Description primary column="1/3">
              Made using React. Backend made using Node.js.
            </Description>
            <GithubLink href="https://github.com/12ahnaf34/Stock-Journal" target="_blank" rel="noreferrer noopener">
              Github
            </GithubLink>
            <SiteLink href="https://stockjournal.netlify.app" target="_blank" rel="noreferrer noopener">
              Website
            </SiteLink>
          </SubContainer>
          <Description primary fontSize="1cqi" fontColor={colors.light} background={colors.dark}>
            Note: Backend hosted on Heroku so it may take 30 seconds for website to load up.
          </Description>
        </Item>
      </ProjectsGrid>
    </PortfolioProjectsContainer>
  );
}
