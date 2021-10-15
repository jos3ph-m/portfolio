import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text } = service
          return (
            <article key={id} className="service">
              {icon}
              <h4></h4>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
