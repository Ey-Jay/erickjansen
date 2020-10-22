require("dotenv").config()
const siteConfig = require("./src/config/siteConfig")
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteUrl: siteConfig.siteUrl,
    image: siteConfig.image, // Path to your image you placed in the 'static' folder
    twitterUsername: siteConfig.twitterUsername,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Staatliches`,
          },
          {
            family: `Mulish`,
            variants: [`400`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Personal portfolio of Erick Jansen",
        short_name: siteConfig.title,
        start_url: "/",
        background_color: siteConfig.themeColor,
        theme_color: siteConfig.themeColor,
        display: "standalone",
        icon: "static/icon-512x512.png",
      },
    },
  ],
}
