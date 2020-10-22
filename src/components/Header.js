import React from "react"
import styled from "styled-components"

import GithubIcon from "../svg/github.svg"
import TwitterIcon from "../svg/twitter-round.svg"
import LinkedinIcon from "../svg/linkedin-round.svg"

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
`

const Title = styled.h1`
  text-transform: uppercase;
  font-family: "Staatliches", sans-serif;
  font-size: 60px;
  margin: 0;
  @media only screen and (max-width: 500px) {
    font-size: 55px;
  }
`

const SocialLinks = styled.ul`
  list-style: none;
  font-size: 1.3rem;
  padding: 0;
  margin-bottom: 10px;
  display: flex;

  & > * + * {
    margin-left: 10px;
  }

  a {
    color: inherit;
    opacity: 0.5;
    text-decoration: none;
    transition: all ease 0.5s;
  }

  a:hover {
    opacity: 1;
  }
`

const Header = () => {
  return (
    <FlexContainer>
      <Title>Erick Jansen</Title>
      <SocialLinks>
        <li>
          <a href="https://github.com/Ey-Jay">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/janseniter">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/erickjansen/">
            <LinkedinIcon />
          </a>
        </li>
      </SocialLinks>
    </FlexContainer>
  )
}

export default Header
