module.exports = {
  pathPrefix: '/maribarramakeup',
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },

  siteMetadata: {
    title: `Maribarra Makeup`,
    description: 'Book now with Maribarra.',
    url: `https://maribarramakeup.com/`,
    siteUrl: `https://maribarramakeup.com/`,
    image: './src/images/logo_maribarra.png',
    og: {
      siteName: 'Maribarra Makeup',
    },
  },

  plugins: ["gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: "gatsby-plugin-svgr-loader",
    options: {
      rule: {
        include: /icon/
      }
    }
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`, // Needed for dynamic images
  'gatsby-plugin-postcss',
]
};