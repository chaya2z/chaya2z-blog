import React from "react"
import NavigationBar from "./navBar/NavigationBar"

const style = {
  backgroundColor: "gray",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  paddingLeft: "2rem",
  color: "white"
}

const Header: React.FC = () => {
  return (
    <div>
      <header style={style}>
        <h1>海底タランテラ</h1>
      </header>
      <NavigationBar />
    </div>
  )
}

export default Header
