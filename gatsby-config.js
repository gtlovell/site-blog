module.exports = {
  siteMetadata: {
    title: "G's Blog",
    description: 'This is a very cool blog'
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
