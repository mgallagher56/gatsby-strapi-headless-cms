import React  from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import { graphql } from "gatsby"
import ModuleParser from '../components/ModuleParser'

const PageTemplate = ({ data }) => {
  const pageData = data.allWpPage.edges[0].node;
  const modules = pageData.pageBuilder.layouts;

  if ( null !== modules) {
    return (
        <Layout>
        <Head title={pageData.title} />
        <ModuleParser moduleData={modules} />
        </Layout>
    )
    } else {
        return (
            <Layout>
            <Head title={pageData.title} />
            <h2>No modules found</h2>
            </Layout>
        )
    }
}

export default PageTemplate

export const query = graphql`
    query ($slug: String!) {
        allWpPage(filter: { slug: { eq: $slug } })  {
            edges {
                node {
                    title
                    pageBuilder {
                            layouts {
                            ... on WpPage_Pagebuilder_Layouts_Hero {
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
                            ... on WpPage_Pagebuilder_Layouts_Feed {
                                cardTypes
                                fieldGroupName
                                title
                            }
                            ... on WpPage_Pagebuilder_Layouts_CardContainer {
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
                                            publicURL
                                            childImageSharp {
                                                gatsbyImageData(placeholder: TRACED_SVG, tracedSVGOptions: {color: "#00FF7D"})
                                            }
                                        }
                                    }
                                }
                            }
                            ... on WpPage_Pagebuilder_Layouts_WysiwygMedia {
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
                            ... on WpPage_Pagebuilder_Layouts_Wysiwyg3Col {
                                fieldGroupName
                                wysiwygContent1
                                wysiwygContent2
                                wysiwygContent3
                            }
                            ... on WpPage_Pagebuilder_Layouts_Wysiwyg2Col {
                                fieldGroupName
                                wysiwygContent1
                                wysiwygContent2
                            }
                            ... on WpPage_Pagebuilder_Layouts_Wysiwyg1Col {
                                fieldGroupName
                                wysiwyg
                            }
                            ... on WpPage_Pagebuilder_Layouts_Wysiwyg4Col {
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
