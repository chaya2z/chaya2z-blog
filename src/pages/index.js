import React from "react"
import NavBar from "../components/nav-bar"
import Footer from "../components/footer"
import "./reset.css"
import "./index.css"

export default function Home() {
  return (
    <div style={{backgroundColor: "#F5F5F5"}}>
      <div className="heroImgSection">
        <h1 className="websiteTitle">海底タランテラ</h1>
      </div>
      <div className="navBarSection">
        <NavBar/>
      </div>
      <div className="contentsSection">
      </div>
      <Footer/>
    </div>
  )
}
