module.exports = {
  siteMetadata: {
    title: `Dayong Lee Blog`,
    author: {
      name: `Dayong Lee`,
      summary: `I am a university student who is living in Korea and interested in technology and economy. I like to get various and useful information 😄`,
    },
    description: `This blog focuses on technology and economics.`,
    siteUrl: `https://dayongbz.github.io`,
    social: {
      twitter: `dayongbz`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-header`,
              maintainCase: false,
              removeAccents: true,
              elements: [`h2`, `h3`, `h4`],
              icon: false,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: "GitHub Dark",
                parentSelector: {
                  "body.dark": "GitHub Dark",
                  "body.light": "GitHub Light",
                },
              },
              extensions: [
                `${__dirname}/extensions/GitHub.github-vscode-theme-1.1.5.vsix`,
              ], // Or install your favorite theme from GitHub
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-176287431-1`,
      },
    },
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark",
        classNameLight: "light",
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        autoLabel: "always",
        labelFormat: "[filename]--[local]",
      },
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dayong Lee Blog`,
        short_name: `Dayong Lee`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0366d6`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`
  ],
}
