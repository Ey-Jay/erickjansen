import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "../index.css"
import Layout from "../components/Layout"

const BackButton = styled(Link)`
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

const NotFound = () => {
  return (
    <Layout>
      <h2>404</h2>
      <p>
        This page doesn't exist{" "}
        <span role="img" aria-label="alien emoji">
          👽
        </span>
      </p>
      <BackButton to="/">Back to earth</BackButton>
    </Layout>
  )
}

export default NotFound
