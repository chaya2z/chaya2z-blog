import React from "react"
import Helmet from "react-helmet"

export default props => (
  <Helmet
    link={[
      {
        href:
          "https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100&family=Noto+Serif+JP:wght@300&family=Sawarabi+Gothic&display=swap",
        rel: "stylesheet",
      },
    ]}
  />
)
