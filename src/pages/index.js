import React, { useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import ProjectCard from "../components/ProjectCard"

const Section = styled.section`
  margin-bottom: 140px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * + * {
    margin-left: 20px;
    @media only screen and (max-width: 574px) {
      margin-left: initial;
    }
  }

  @media only screen and (max-width: 574px) {
    & > * {
      margin: 5px;
    }
  }
`

const TechContainer = styled.ul`
  box-sizing: border-box;
  list-style: none;
  padding: 15px;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 5px;
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const ContactButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  color: inherit;
  text-decoration: none;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  cursor: pointer;
  transition: all ease 0.3s;
  font-weight: 600;
  font-size: 1.7rem;

  &:hover {
    background-color: #f3f3f4;
    color: #1c1f21;
  }

  &:active {
    transition: all 0.05s;
    transform: scale(0.9);
  }
`

export const query = graphql`
  {
    projects: allContentfulProject {
      nodes {
        projectTitle
        projectUrl
        repoUrl
        technologyStack
        projectDescription {
          projectDescription
        }
        projectImage {
          description
          fluid(maxWidth: 1080) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default function Home({ data: { projects } }) {
  useEffect(() => {
    console.log(
      "🚀 This site is built by Erick Jansen using GatsbyJS and Styled Components"
    )
    console.log("🧔🏻 I'm currently open to work, give me a call")
  }, [])

  return (
    <Layout>
      <Section>
        <h2>
          Hello{" "}
          <span role="img" aria-label="Peace hand sign emoji">
            ✌🏼
          </span>
        </h2>
        <p>
          I'm Erick, a Full-Stack Developer living in Germany{" "}
          <span role="img" aria-label="German Flag emoji">
            🇩🇪
          </span>
          .
        </p>
        <p>
          I've been building stuff for the WWW{" "}
          <span role="img" aria-label="Globe showing europe and africa emoji">
            🌍
          </span>{" "}
          since 2017.
        </p>
        <ContactButton href="mailto:me@erickjansen.com">
          Get in touch
        </ContactButton>
      </Section>

      <Section>
        <h2>
          Tech Stack{" "}
          <span role="img" aria-label="mechanic man emoji">
            👨🏻‍🔬
          </span>
        </h2>
        <FlexContainer>
          <TechContainer>
            <h3>Front-End</h3>
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>Styled Components</li>
            <li>11ty</li>
            <li>JavaScript/ES6+</li>
            <li>CSS3</li>
            <li>HTML5</li>
          </TechContainer>
          <TechContainer>
            <h3>Back-End</h3>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB/Mongoose</li>
            <li>PostgreSQL/Sequelize</li>
            <li>Firebase</li>
            <li>REST/GraphQL</li>
            <li>Socket.io</li>
          </TechContainer>
          <TechContainer>
            <h3>CMS</h3>
            <li>WordPress</li>
            <li>Contentful</li>
            <li>NetlifyCMS</li>
            <h3>Tools</h3>
            <li>Git/GitHub</li>
            <li>Terminal/Bash</li>
            <li>Jest</li>
            <li>Docker</li>
          </TechContainer>
        </FlexContainer>
      </Section>
      <Section>
        <h2>
          Projects{" "}
          <span role="img" aria-label="Test tube emoji">
            🧪
          </span>{" "}
        </h2>
        <ProjectsContainer>
          {projects.nodes.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.projectTitle}
              stack={project.technologyStack}
              description={project.projectDescription.projectDescription}
              url={project.projectUrl}
              repoUrl={project.repoUrl}
              // image={project.projectImage}
            />
          ))}
        </ProjectsContainer>
      </Section>
    </Layout>
  )
}
