module.exports = {
  siteMetadata: {
    title: `centenarian.fun`,
    name: `aspiring centenarian`,
    siteUrl: `https://www.centenarian.fun`,
    description: `The journey of an aspiring centenarian.`,
    hero: {
      heading: `Make It To The Race.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/awefulBrown`
      },
      {
        name: `github`,
        url: `https://github.com/dapperAuteur`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/awefulbrown`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/brandanthonymcdonald`
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/i_write_code_favicon.png`
      }
    }
  ]
};
