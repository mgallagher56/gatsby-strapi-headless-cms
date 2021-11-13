require(`dotenv`).config({
    path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

// require .env.development or .env.production
require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `MGR - Porfolio`,
        titleTemplate: `%s · Dev MVP`,
        description:
            `Dev Portfolio`,
        url: process.env.URL, // No trailing slash allowed!
        author: `Marc Gallagher-Reid`,
    },
    flags: { PRESERVE_WEBPACK_CACHE: true },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-preload-fonts`,
        {
            resolve: `gatsby-plugin-gatsby-cloud`,
            options: {
                allPageHeaders: [
                    `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`,
                    `cache-control: public, max-age=31536000, immutable`,
                    `Permissions-Policy: geolocation=(), midi=(), notifications=(), push=(), sync-xhr=(), microphone=(), camera=(), magnetometer=(), gyroscope=(), speaker=(self), vibrate=(), fullscreen=(self), payment=()`
                ],
                mergeCachingHeaders: true
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `G-5L1QF3DK9J`,
            },
        },
        // {
        //     resolve: `gatsby-plugin-sitemap`,
        //     options: {
        //         query: `
        //       {
        //         allSitePage {
        //           nodes {
        //             path
        //           }
        //         }
        //         allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
        //           nodes {
        //             ... on WpPost {
        //               uri
        //               modifiedGmt
        //             }
        //             ... on WpPage {
        //               uri
        //               modifiedGmt
        //             }
        //           }
        //         }
        //       }
        //     `,
        //         resolveSiteUrl: () => process.env.URL,
        //         resolvePages: ({
        //             allSitePage: { nodes: allPages },
        //             allWpContentNode: { nodes: allWpNodes },
        //         }) => {
        //             const wpNodeMap = allWpNodes.reduce((acc, node) => {
        //                 const { uri } = node
        //                 acc[uri] = node

        //                 return acc
        //             }, {})

        //             return allPages.map(page => {
        //                 return { ...page, ...wpNodeMap[page.path] }
        //             })
        //         },
        //         serialize: ({ path, modifiedGmt }) => {
        //             return {
        //                 url: path,
        //                 lastmod: modifiedGmt,
        //             }
        //         },
        //     },
        // },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `MGR Dev - Portfolio`,
                theme_color: `#00e06c`,
                background_color: `#202231`,
                icon: `src/assets/images/icon.png`,
                display: `standalone`,
                icon_options: {
                    purpose: `any maskable`,
                  },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url: process.env.WPGRAPHQL_URL,
            },
        },
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        `gatsby-plugin-offline`,
    ],
}
