import React from "react"
import { makeStyles } from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles(() => ({
  container: {
    "paddingLeft": "2rem",
    "paddingRight": "2rem",
    "paddingTop": "1rem",
    "paddingBottom": "1rem"
  }
}))

interface Props {
  name: string
  link: string
}

const NavigationBarItem: React.FC<Props> = ({ name, link }) => {
  const classes = useStyles()
  return (
    <Link to={link}>
      <div className={classes.container}>{name}</div>
    </Link>
  )
}

export default NavigationBarItem
