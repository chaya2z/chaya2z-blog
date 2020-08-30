import React from "react"
import Helmet from "react-helmet"

export default (props) => (
  <Helmet
    link={[
      { href: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@600&display=swap", rel: "stylesheet" },
      { href: "https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100&display=swap", rel: "stylesheet" }
    ]}
  />
)
