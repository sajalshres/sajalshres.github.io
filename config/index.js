module.exports = {
  author: "sajalshres",
  siteTitle: "Sajal Shrestha Portfolio",
  siteShortTitle: "sajalshres.",
  siteDescription:
    "I'm Sajal Shrestha, I design, build and deploy things for the web.",
  siteUrl: "https://sajalshres.github.io",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Sajal Shrestha", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#ffd95a",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#616161",
      card: "#757575",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sajalshres",
  shownArticles: 3,
  socialMedia: [
    {
      name: "Github",
      url: "https://github.com/sajalshres",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/sajalshres/",
    },
    {
      name: "Medium",
      url: "https://sajalshres.medium.com/",
    },
    {
      name: "Dev.to",
      url: "https://dev.to/sajalshres",
    },
  ],
  navLinks: {
    menu: [
      {
        name: "Articles",
        url: "/#articles",
      },
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [],
};
