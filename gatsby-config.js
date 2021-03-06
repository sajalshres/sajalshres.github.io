const {
  author,
  siteTitle,
  siteShortTitle,
  siteDescription,
  siteIcon,
  siteUrl,
  colors,
} = require("./config");

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: author,
    siteUrl: siteUrl,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "260546938",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteTitle,
        short_name: siteShortTitle,
        start_url: `/`,
        background_color: colors.lightTheme.background,
        theme_color: colors.lightTheme.primary,
        display: `minimal-ui`,
        icon: siteIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 80,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
  ],
};
