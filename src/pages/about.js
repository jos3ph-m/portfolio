import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({ data }) => {
  const {
    strapiAbout: { title },
  }
  return (
    <>
      <h2>about page</h2>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      info
      title
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default About
