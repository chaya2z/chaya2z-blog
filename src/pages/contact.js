import React from "react"
import NavBar from "../components/nav-bar"
import Footer from "../components/footer"
import "./reset.css"
import "./contact.css"
import Head from "../components/head"

export default function Home() {
  return (
    <div>
      <Head/>
      <div className="titleSection">
        <h1 className={"title"}>お問い合わせ</h1>
      </div>
      <div className="navBarSection">
        <NavBar/>
      </div>
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
