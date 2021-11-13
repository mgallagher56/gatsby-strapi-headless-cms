/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;
    const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js");
    const PageTemplate = path.resolve("./src/templates/Page.js");

    const result = await graphql(`
    {
        allWpPage {
          edges {
            node {
              slug
            }
          }
        }
        allWpPost {
          edges {
            node {
              slug
            }
          }
        }
    }
    `)
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    
    const Pages = result.data.allWpPage.edges;
    Pages.forEach(page => {
        createPage({
            path: `/${page.node.slug}`,
            component: PageTemplate,
            context: {
                slug: page.node.slug
            },
        })
    })

    const BlogPosts = result.data.allWpPost.edges;
    BlogPosts.forEach(post => {
        createPage({
            path: `/blog/${post.node.slug}`,
            component: BlogPostTemplate,
            context: {
                slug: post.node.slug
            },
        })
    })
}
