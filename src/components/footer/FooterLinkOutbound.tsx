import React from "react"
import { GitHub, Twitter } from "@material-ui/icons"
import { Link } from "gatsby"

const FooterLinkOutbound: React.FC = () => {
  return (
    <div className="flex justify-center py-10">
      <Link to={"https://github.com/chaya2z"} className="mx-8 hover:text-blue-500 duration-200 ease-in">
        <GitHub fontSize="large" className="mx-4" />
        GitHub
      </Link>
      <Link to={"https://twitter.com/chaya2z"} className="mx-8 hover:text-blue-500 duration-200 ease-in">
        <Twitter fontSize="large" className="mx-4" />
        Twitter
      </Link>
    </div>
  )
}

export default FooterLinkOutbound
