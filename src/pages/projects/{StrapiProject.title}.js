import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  return (
    <>
      <Seo title={data} />
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
      </main>
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
