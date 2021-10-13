import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return <header className="hero">
    <section className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
        </div>
      </article>
      <StaticImage src="../assets/images/hero.svg" alt="portfolio" className="hero-img" placeholder="blurred"></StaticImage>
    </section>
  </header>
}

export default Hero
