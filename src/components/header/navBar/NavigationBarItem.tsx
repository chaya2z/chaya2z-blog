import React from "react"
import { Link } from "gatsby"

const styles: { [key: string]: React.CSSProperties} = {
  container: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  }
}

interface Props {
  name: string
  link: string
}

const NavigationBarItem: React.FC<Props> = ({ name, link }) => {
  return (
    <Link to={link}>
      <div style={styles.container}>{name}</div>
    </Link>
  )
}

export default NavigationBarItem
