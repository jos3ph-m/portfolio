import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  return (
    <>
      <main></main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default ProjectTemplate
