import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  container: {
    padding: "1rem 2rem",
    color: "black",
    textDecoration: "none",
    borderBottom: "2px solid #008080",
    marginRight: "2px",
    transition: "all 0.6s ease",
    '&:hover': {
      backgroundColor: "#008080",
      color: "#FFFFDD",
      borderBottom: "2px solid dimgray",
    }
  }
})

interface Props {
  name: string
  link: string
}

const NavigationBarItem: React.FC<Props> = ({ name, link }) => {
  const classes = useStyles()
  return (
    <Link to={link} className={classes.container}>
      <div>{name}</div>
    </Link>
  )
}

export default NavigationBarItem
