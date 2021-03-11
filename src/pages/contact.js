import React from "react"
import NavigationBar from "../components/header/navBar/NavigationBar"
import "./reset.css"
import "./contact.css"
import CustomHead from "../components/head"
import Footer from "../components/footer/Footer"

export default function Home() {
  return (
    <div>
      <CustomHead />
      <div className="titleSection">
        <h1 className={"title"}>お問い合わせ</h1>
      </div>
      <div className="navBarSection">
        <NavigationBar />
      </div>
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
