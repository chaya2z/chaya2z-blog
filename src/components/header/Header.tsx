import React from "react"
import NavigationBar from "./navBar/NavigationBar"

const styles: { [key: string]: React.CSSProperties } = {
  siteTitle: {
    backgroundColor: "gray",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    paddingLeft: "2rem",
    color: "white",
    fontFamily: "\"M PLUS 1p\", sans-serif"
  },
  container: {
    maxWidth: "1080px",
    marginLeft: "auto",
    marginRight: "auto"
  }
}

const Header: React.FC = () => {
  return (
    <div style={styles.container}>
      <header>
        <h1 style={styles.siteTitle}>海底タランテラ</h1>
      </header>
      <NavigationBar/>
    </div>
  )
}

export default Header
