import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  )
}

export default ProjectsPage
