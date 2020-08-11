import React from "react"
import NavBar from "../components/nav-bar"
import Footer from "../components/footer"
import "./reset.css"
import "./contact.css"

export default function Home() {
  return (
    <div style={{backgroundColor: "#F5F5F5"}}>
      <NavBar/>
      <div className={"contactForm"}>
        <iframe
          title="googleForm" src="https://docs.google.com/forms/d/e/1FAIpQLSdlcpfWL_hKSpToao2xzi6zSCsZtZ0_Njn0kCtXZ4vijbPlYw/viewform?embedded=true"
          width="800" height="876" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
        </iframe>
      </div>
      <Footer/>
    </div>
  )
}
