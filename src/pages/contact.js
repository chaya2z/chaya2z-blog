import React from "react"
import "./reset.css"
import "./contact.css"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <div className={"contactForm"}>
        <iframe
          title="googleForm"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdlcpfWL_hKSpToao2xzi6zSCsZtZ0_Njn0kCtXZ4vijbPlYw/viewform?embedded=true"
          width="800"
          height="876"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </div>
  )
}
