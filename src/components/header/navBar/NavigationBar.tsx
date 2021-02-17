import React from "react"
import NavigationBarItem from "./NavigationBarItem"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  itemsContainer: {
    display: 'flex',
  },
}))

const NavigationBar: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.itemsContainer}>
      <NavigationBarItem name={'ホーム'} link={'/'}/>
      <NavigationBarItem name={'ブログ'} link={'/posts'}/>
      <NavigationBarItem name={'プロフィール'} link={'/profile'}/>
    </div>
  )
}

export default NavigationBar
