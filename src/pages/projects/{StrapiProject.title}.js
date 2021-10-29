import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

const ProjectTemplate = ({ pageContext: { title } }) => {
  return (
    <div>
      <h4>{title}</h4>
    </div>
  )
}

export default ProjectTemplate
