import React from "react"
import { createGlobalStyle } from "styled-components"

import SEO from "../components/seo"

import Header from "../components/Header"

const GlobalStyle = createGlobalStyle`

  html {
    /* background-color: #131516 */
    background-color: #1c1f21
  }

  body {
    /* color: #fcf7f8 */
    /* f5f5f5 */
    color: #f3f3f4;
    font-family: 'Mulish', sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  h2 {
    font-size: 2.5rem;
    color: #fff;
  }

  p {
    font-size: 1.7rem;
  }

  svg {
    width: 30px;
    fill: #f3f3f4;
  }

  li {
    margin: 5px 0;
  }
  
`
export default function Layout({ children, seo }) {
  return (
    <>
      <SEO {...seo} />
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}
