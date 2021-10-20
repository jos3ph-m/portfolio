import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob {
      nodes {
        position
        company
        date
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJob: { nodes: jobs },
  } = data
  const { company, position, date, desc } = jobs[0]
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center"></div>
    </section>
  )
}

export default Jobs
