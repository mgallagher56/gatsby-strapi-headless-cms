import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

export default function Home({ data }) {
  return (
    <Layout>
      <Head title="blog" />
      <h1>Blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.edges.map(({ node }) => (
        <div key={node.slug}>
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
{
    allWpPost(sort: {fields: date}) {
      edges {
        node {
          title
          slug
          date(formatString: "DD-MM-YYYY")
          title
          slug
          excerpt
          pageBuilder {
            layouts {
              ... on WpPost_Pagebuilder_Layouts_Hero {
                fieldGroupName
                wysiwyg
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: TRACED_SVG, tracedSVGOptions: {color: "#00FF7D"})
                    }
                  }
                }
              }
              ... on WpPost_Pagebuilder_Layouts_Feed {
                cardTypes
                fieldGroupName
                title
              }
              ... on WpPost_Pagebuilder_Layouts_CardContainer {
                fieldGroupName
                cardType
                title
                cards {
                  buttonText
                  content
                  fieldGroupName
                  subtitle
                  title
                  url
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: TRACED_SVG, tracedSVGOptions: {color: "#00FF7D"})
                      }
                    }
                  }
                }
              }
              ... on WpPost_Pagebuilder_Layouts_WysiwygMedia {
                fieldGroupName
                wysiwygContent
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: TRACED_SVG, tracedSVGOptions: {color: "#00FF7D"})
                    }
                  }
                }
              }
              ... on WpPost_Pagebuilder_Layouts_Wysiwyg3Col {
                fieldGroupName
                wysiwygContent1
                wysiwygContent2
                wysiwygContent3
              }
              ... on WpPost_Pagebuilder_Layouts_Wysiwyg2Col {
                fieldGroupName
                wysiwygContent1
                wysiwygContent2
              }
              ... on WpPost_Pagebuilder_Layouts_Wysiwyg1Col {
                fieldGroupName
                wysiwyg
              }
              ... on WpPost_Pagebuilder_Layouts_Wysiwyg4Col {
                fieldGroupName
                wysiwygContent1
                wysiwygContent2
                wysiwygContent3
                wysiwygContent4
              }
            }
          }
        }
      }
    }
  }
`
