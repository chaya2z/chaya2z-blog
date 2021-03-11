import React from "react"
import NavigationBar from "./navBar/NavigationBar"

const Header: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <header style={{ backgroundColor: "gray" }}>
        <h1 className="text-white text-4xl py-8 pl-8">海底タランテラ</h1>
      </header>
      <NavigationBar/>
    </div>
  )
}

export default Header
