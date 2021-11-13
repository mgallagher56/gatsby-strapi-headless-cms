import React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ModuleParser from '../components/ModuleParser'

const PostTemplate = ({ data }) => {
    const post = data.allWpPost.edges[0].node;
    const modules = post.pageBuilder.layouts;

    if (null !== modules) {
        return (
            <Layout>
                <div>
                    <Head title={post.title} />
                    <h1>{post.title}</h1>
                    <ModuleParser moduleData={modules} />
                    <p> On: {post.date} </p>
                </div>
            </Layout>
        )
    } else {
        return (
            <Layout>
                <div>
                    <Head title={post.title} />
                    <h1>{post.title}</h1>
                    <h2>No modules found</h2>
                </div>
            </Layout>
        )
    }
}

export default PostTemplate

export const query = graphql`
    query ($slug: String!) {
        allWpPost(sort: {fields: date}, filter: { slug: { eq: $slug } }) {
            edges {
                node {
                title
                date(formatString: "DD-MM-YYYY")
                title
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
