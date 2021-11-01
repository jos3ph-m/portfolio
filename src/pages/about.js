import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({ data }) => {
  const { strapiAbout: { title, image, info, stack } = data }
  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <img src={image[0].localFile.publicURL} alt={title} />
        </div>
      </section>
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
