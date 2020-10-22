import React from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-bottom: 75px;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`

const Title = styled.a`
  display: inline-block;
  margin-bottom: 5px;
  color: inherit;
  font-size: 2rem;
  text-decoration: none;
  transition: all ease 0.3s;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Stack = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 0 25px 0;
  padding: 0;
  text-transform: uppercase;
  & > * + * {
    margin-left: 5px;
  }
`

const StackItem = styled.li`
  padding: 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.08);
  font-size: 0.9rem;
`

const Description = styled.p`
  font-size: 1.3rem;
  flex: 1;
`
const MoreContainer = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`
const MoreButton = styled.a`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: inherit;
  text-decoration: none;
  transition: all ease 0.3s;

  &:hover {
    background-color: #f3f3f4;
    color: #1c1f21;
  }

  &:active {
    transition: all 0.05s;
    transform: scale(0.9);
  }
`

// const ImageContainer = styled.div`
//   object-fit: cover;
//   height: 190px;
//   margin-bottom: 15px;
// `

// const Image = styled(Img)`
//   height: 100%;
//   transition: all ease 0.3s;
//   &:hover {
//     transition: all ease 0.3s;
//     transform: scale(1.01);
//     cursor: pointer;
//   }
// `

const ProjectCard = ({ title, stack, description, url, repoUrl }) => {
  return (
    <Container>
      <Title href={url}>{title}</Title>
      <Stack>
        {stack.map((item, idx) => (
          <StackItem key={idx}>{item}</StackItem>
        ))}
      </Stack>
      <Description>{description}</Description>
      <MoreContainer>
        <MoreButton href={url}>live</MoreButton>
        <MoreButton href={repoUrl}>code</MoreButton>
      </MoreContainer>
    </Container>
  )
}

export default ProjectCard
